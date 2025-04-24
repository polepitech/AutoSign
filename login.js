import 'dotenv/config';
import puppeteer from 'puppeteer';
const email = process.env.ED_EMAIL;
const password = process.env.ED_PASSWORD;   


export async function getEdSquareSessionData() {
//   const browser = await puppeteer.launch({ headless: 'new' }); 
//   const page = await browser.newPage();

//   // Aller à la page de connexion
//   await page.goto('https://app.edsquare.fr/users/sign_in', {
//     waitUntil: 'networkidle2'
//   });

//   // Remplir et soumettre le formulaire de login
//   await page.type('#user_email', process.env.ED_EMAIL);
//   await page.type('#user_password', process.env.ED_PASSWORD);
//   await page.click('input[type="submit"]');

//   // Attendre la redirection après login
//   await page.waitForNavigation({ waitUntil: 'networkidle2' });

//   // Récupérer le token CSRF depuis la balise <meta>
//   const csrfToken = await page.$eval('meta[name="csrf-token"]', el => el.content);

//   // Récupérer les cookies
//   const cookies = await page.cookies();
//   const cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join('; ');

//   await browser.close();

    const csrfToken = 'P_dUvV9kWMoDzP5mJEbmX2PNgZDfYYV23Y5MB2nTE6evB-rcSPBS97Y5H_JkOyt3L06foOw3WGmH15XeYUWDCQ';
    const cookieHeader = 'SRV=7ed13463-1b49-4d83-b115-02c39aeed7e1; _ga=GA1.1.1137887988.1745499928; ppms_privacy_7f3526cd-932e-4e70-a7ac-c15eada16263={%22visitorId%22:%22e1638ae9-e0e3-436a-a835-de69f35569ee%22%2C%22domain%22:{%22normalized%22:%22app.edsquare.fr%22%2C%22isWildcard%22:false%2C%22pattern%22:%22app.edsquare.fr%22}%2C%22consents%22:{%22analytics%22:{%22status%22:0%2C%22updatedAt%22:%222025-04-24T13:05:29.285Z%22}}%2C%22staleCheckpoint%22:%222025-04-24T13:05:27.855Z%22}; _ga_KJP5RLYRC9=GS1.1.1745499927.1.1.1745501385.0.0.0; _edsquare_session=HoTsaNW0i%2BT%2B37pAYpo6m4fJN33p50sbIa97m4G5PgquVoGfidfKHYFioAGy%2BV5SDW6PTtqcuErh%2Bo4i%2FuMPQT5nve9FGg8FPW6roSV25jy6ItEUu%2B2a6WdOgJRgVLs8TGzXytdOg7S96Jv3rqN8WyUQ7Dwz%2FgRtEZIO%2Bn7LUZjkwfsO5DqsJ5O5Uwgsv6vvC5MQ%2BOJGIVv4r1cF1eeGNuNqzkqoFnFXdEfr5JPus0aIeef%2B1tdVKOzdPuDQ2bjgzehOi%2B8WiW16fptbvfNSMlwGhpB7Lw7enR1Ekv66QypO2123VWql1gGw99FprUGG3q1Pf%2B5bCFAnMqSRZ6Ym1060btE2%2FHR%2FJmBFJGPzomWveFQDc8N%2FSs1vrDdKzShIBH2FGOxqAeKKOawgTg1bCAuHkYQKOZsEvcf9RjP%2BR49V0EKKe6B4LesgkV2dsegEU2b0vf5xxFOd5c9ATjtju%2BxNjceI675xk5iqsQD4y3VkikZuHBIvCbAkdySAMQut8QbuY53TAzCYMJKFT3njoYEOCayKkKrHVGk8O3fo%2BCWQs8nLruLPwVCDy27pUbPYZ058%2FdzZxblLJ1RTwSF0KPOE4ADZKULQiCu%2FqmV7t4yKdxWU4cWLixjI3kqXHl5Jd3TSJxAkqEO6RD4tBB5Fti8IcOuvME6FoheCUAYV6ex18e6eoB8fj7lqTEfLVycyDwpv79RepADbwfEBIX9ul1UMPbJ5Oj1QnRAVPV1fMls2u9%2BgArxNdu%2BxfAb4E2FdZxpc2rqsg9BmmVqLugv1vV1eUxtbWKV1oOpW%2BXXCBjSSGpgb9Z49axTJ0O7xMqpVDramV4wyye2bGgBW%2BzUwEx%2FXyzUNabQDkacBrI6Rgu%2FTSAtyFm2ogakdp6kQIZL%2FJJgHX6saFdfmFs1zqFXZsT4%3D--I2uQrrz%2Bl3AJ3aWT--6f4RpCFAC1donXE8Hl9X3w%3D%3D'
  return {
    csrfToken,
    cookieHeader
  };
}
