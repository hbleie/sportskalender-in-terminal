import { sportskalender } from "./parse-html.js";

(async () => {
  const websiteURL = 'https://www.vg.no/sport/kalender/fotball';
  console.log('VGs fotballkalender:');
  console.log('-------------------');

  sportskalender(websiteURL);
})();