import { sportskalender } from "./parse-html.js";

(async () => {
const websiteURL = 'https://www.vg.no/sport/kalender';
  console.log('VGs sportskalender:');
  console.log('');
sportskalender(websiteURL);
})();