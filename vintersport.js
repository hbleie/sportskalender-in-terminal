import { sportskalender } from "./parse-events.js";

(async () => {
  const websiteURL = 'https://api.vg.no/sportskalender/v1/events?fromDate=';
  console.log('VGs sportskalender Vintersport:');
  sportskalender(websiteURL, 'vintersport');
})();