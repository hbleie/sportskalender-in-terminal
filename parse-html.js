import axios from 'axios';

export const sportskalender = async (websiteURL) => {
const { data } = await axios.get(websiteURL);

let result = await parseHTML(data);

for (let line of result) {
  console.log(line);
}

function parseHTML(html) {
    // Find the start of the main section that contains the events
    let mainStart = html.indexOf('<main class="Eventlist_main__FqUi8 grouped background-primary">');
    let mainEnd = html.indexOf('</main>', mainStart);
    let mainContent = html.substring(mainStart, mainEnd);

    // Split the main content into separate events
    let events = mainContent.split('<article>');

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

        return title + ' ' + time;
    });

    // Remove null elements from the array
    eventInfo = eventInfo.filter(event => event !== null);

    return eventInfo.slice(0,20);
}
};