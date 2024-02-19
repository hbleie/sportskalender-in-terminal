import axios from 'axios';

export const sportskalender = async (websiteURL, filter) => {
const { data } = await axios.get(websiteURL);

let result = parseHTML(data, filter);

for (let line of result) {
  console.log(line);
}

function parseHTML(html, filter) {
    // Find the start of the main section that contains the events
    let mainStart = html.indexOf('<main class="Eventlist_main__FqUi8 grouped background-primary">');
    let mainEnd = html.indexOf('</main>', mainStart);
    let mainContent = html.substring(mainStart, mainEnd);

    let daysWithEvents = mainContent.split('<section class="Eventlist_group__Xr6Ht">');

    let events = daysWithEvents.map((day, index) => {
        // Skip the first element if it's not an event
        if (index === 0 && !day.includes('<h1 class="title-medium">')) {
            return null;
        }
        const dateStart = day.indexOf('<h2 class="Eventlist_date__LF1JF label-medium">') + '<h2 class="Eventlist_date__LF1JF label-medium">'.length;  
        const dateEnd = day.indexOf('</h2>', dateStart);
        const date = day.substring(dateStart, dateEnd);

        // Split the main content into separate events
        let events = day.split('<article>');

        // Extract the title and time of each event and combine them into a string
        let eventInfo = fetchEventInfo(events, filter, date);

        eventInfo = [date, ...eventInfo, ' ']
   
        return eventInfo;
    });
    
    events = events.flat();
    // Remove null elements from the array
    events = events.filter(event => event !== null);

    const formattedLines = formatEvents(events.slice(0,25));
    
    return formattedLines;

};

/**
 * Extract the title and time of each event and combine them into a string
 * @param {*} events 
 * @returns {string[]} An array of strings, each containing the title, sport, time and TV channel of an event
 */
function fetchEventInfo(events, filter) {
    // Extract the title and time of each event and combine them into a string
    let eventInfo = events.map((event, index) => {
        // Skip the first element if it's not an event
        if (index === 0 && !event.includes('<h1 class="title-medium">')) {
            return null;
        }

        let titleStart = event.indexOf('<h1 class="title-medium">') + '<h1 class="title-medium">'.length;
        let titleEnd = event.indexOf('</h1>', titleStart);
        let title = event.substring(titleStart, titleEnd);

        let timeStart = event.indexOf('<time class="label-medium">') + '<time class="label-medium">'.length;
        let timeEnd = event.indexOf('</time>', timeStart);
        let time = event.substring(timeStart, timeEnd);

        let sportStart = event.indexOf('<p class="EventCard_metaTitle__vzlD5 color-accent">') + '<p class="EventCard_metaTitle__vzlD5 color-accent">'.length;
        let sportEnd = event.indexOf('</p>', sportStart);
        let sport = event.substring(sportStart, sportEnd);

        let channelStart = event.indexOf('<p class="EventCard_footerText__l0n8l label-medium label-secondary">') + '<p class="EventCard_footerText__l0n8l label-medium label-secondary">'.length;
        let channelEnd = event.indexOf('</p>', channelStart);
        let channel = event.substring(channelStart, channelEnd);

        switch (filter) {
            case 'vintersport':
                if (!vintersport.includes(sport)) {
                    return null;
                }
                break;
            default:
                break;
        }

        return title + ' | ' + sport + ' | ' + time + ' | ' + channel;
    });
    return eventInfo;
}

/**
 * 
 * @param {string[]} events 
 * @returns {string[]} An array of strings, each containing the title, sport, time and TV channel of an event. Formatted to be aligned in columns
 */
function formatEvents(events) {
    let longestTitleLen = 0, longestSportLen = 0
    let longestTitle = "", longestSport = ""


    events.forEach(line => {
        let parts = line.split('|').map(part => part.trim()); // Split by '|' and remove leading/trailing spaces
        if (parts.length > 2) {
            if (parts[0].length > longestTitleLen) {
                longestTitleLen = parts[0].length;
                longestTitle = parts[0];
            }
            if (parts[1] && parts[1].length > longestSportLen) {
                longestSportLen = parts[1].length;
                longestSport = parts[1];
            }
    }
    });

    // Add spaces to the end of each line to make the columns line up
    let formattedLines = events.map(line => {
        let parts = line.split('|').map(part => part.trim()); // Split by '|' and remove leading/trailing spaces
        // If parts only has one element, then the string is not an event and should be returned
        if (parts.length < 2) {
            return parts[0];
        }
        let spaces = ' '.repeat(longestTitleLen - parts[0].length + 3);
        let spaces2 = ' '.repeat(longestSportLen - parts[1].length + 3);
        if (parts[2].length == 2) {
            parts[2] = parts[2] + ' '.repeat(3);
        }
        return parts[0] + spaces + parts[1] + spaces2 + parts[2] + '  ' + parts[3];
    });
    return formattedLines;
    }
}

const vintersport = [
    'Langrenn',
    'Skiskyting',
    'Alpint',
    'Hopp',
    'Kombinert',
    'Snowboard',
    'Freestyle Ski',
    'Skøyter',
    'Ishockey'
];