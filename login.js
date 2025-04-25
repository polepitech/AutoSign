import 'dotenv/config';
import puppeteer from 'puppeteer';
const email = process.env.ED_EMAIL;
const password = process.env.ED_PASSWORD;   


export async function getEdSquareSessionData() {
    const browser = await puppeteer.launch({  headless: false,
      defaultViewport: null,
      args: ['--start-maximized'] }); 
    // const browser = await puppeteer.launch({headless:'new'});
    const page = await browser.newPage();

    // Aller à la page de connexion
    await page.goto('https://app.edsquare.fr/users/sign_in', {
      waitUntil: 'networkidle2'
    });

    // CHERCHER LE BOUTON DE CONSENTEMENT
    try {
      await page.waitForSelector('button', { timeout: 3000 }); // change le sélecteur selon le bouton
      const allButtons = await page.$$('button');
      for (const btn of allButtons) {
        const text = await page.evaluate(el => el.innerText, btn);
        if (text.includes('accepter') || text.includes('Accepter')) {
          console.log('✅ Bouton de consentement détecté, on clique...');
          await btn.click();
          break;
        }
      }
    } catch (e) {
      console.log('⚠️ Aucun bandeau cookies détecté (ou déjà accepté)');
    }

    // Remplir et soumettre le formulaire de login
    await page.waitForSelector('#user_email');
    await page.type('#user_email', process.env.ED_EMAIL);
    await page.type('#user_password', process.env.ED_PASSWORD);
    await page.click('button[type="submit"]');
    console.log('🔐 Envoi des identifiants...');

    // Attendre la le token après login
    await page.waitForSelector('meta[name="csrf-token"]'); 

    console.log('🔐 Connexion réussie !');

    await page.goto('https://app.edsquare.fr/apps/classrooms', {
      waitUntil: 'networkidle2'
    });
    
    console.log('🔍 Recherche de la page de signature...');
    await page.waitForSelector('a[data-remote="true"]');
    const link = await page.$('[data-remote="true"]');

    if (!link) {
      console.log('❌ Aucun lien avec data-remote="true" trouvé.');
    } else {
      try {
        await Promise.all([
          link.click(),
          page.waitForSelector('#course_user_signature_planning_event_id', { timeout: 3000 }),
        ]);
    
        var planningEventId = await page.$eval('#course_user_signature_planning_event_id', el => el.value);
        console.log('🎯 Emargement trouvé ! id :', planningEventId);
    
      } catch (err) {
        console.log('❌ Erreur lors de la récupération de l’emargement :', err);
      }
    }
    // Récupérer le token CSRF depuis la balise <meta>
    const csrfToken = await page.$eval('meta[name="csrf-token"]', el => el.content);

    // Récupérer les cookies
    const cookies = await page.cookies();
    const cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join('; ');

    await browser.close();
  return {
    csrfToken,
    cookieHeader,
    planningEventId
  };
}
