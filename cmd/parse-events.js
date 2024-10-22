import axios from "axios";

export const sportskalender = async (websiteURL, filter) => {
	const { data } = await axios.get(`${websiteURL}${new Date().toISOString()}`);

	const result = parseEvents(data, filter);

	for (const line of result) {
		console.log(line);
	}
	/**
	 *
	 * @param {Record<string, any>[]} events
	 * @param {string} filter
	 * @returns
	 */
	function parseEvents(events, filter) {
		let eventInfo = fetchEventInfo(events, filter);

		// Remove null elements from the array
		eventInfo = eventInfo.filter((event) => event !== null);

		const formattedLines = formatEvents(eventInfo.slice(0, 25));

		return formattedLines;
	}

	/**
	 * Extract the title and time of each event and combine them into a string
	 * @param {*} events
	 * @returns {string[]} An array of strings, each containing the title, sport, time and TV channel of an event
	 */
	function fetchEventInfo(events, filter) {
		// Extract the title and time of each event and combine them into a string
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		let date = "";
		const eventInfo = events.map((event, index) => {
			const title = event?.title;

			const sport = event?.sport?.title;

			const time = new Date(
				event?.eventStart ?? event?.startsAt,
			).toLocaleTimeString("no-NO");

			const eventDate = new Date(
				event.eventStart ?? event?.startsAt,
			).toLocaleDateString("no-NO", options);

			if (new Date(event.eventStart).getTime() < new Date().getTime()) {
				return null;
			}

			const channel = event?.streams[0]?.title;

			switch (filter) {
				case "vintersport":
					if (!vintersport.includes(sport)) {
						return null;
					}
					break;
				case "fotball":
					if (sport !== "Fotball") {
						return null;
					}
					break;
				default:
					break;
			}

			if (eventDate !== date) {
				date = eventDate;
				return [
					"",
					date,
					title + " | " + sport + " | " + time + " | " + channel,
				];
			}

			return title + " | " + sport + " | " + time + " | " + channel;
		});

		return eventInfo.flat(Number.Infinity);
	}

	/**
	 *
	 * @param {string[]} events
	 * @returns {string[]} An array of strings, each containing the title, sport, time and TV channel of an event. Formatted to be aligned in columns
	 */
	function formatEvents(events) {
		let longestTitleLen = 0;
		let longestSportLen = 0;
		let longestTitle = "";
		let longestSport = "";

		for (const line of events) {
			const parts = line.split("|").map((part) => part.trim());
			if (parts.length > 2) {
				// Split by '|' and remove leading/trailing spaces
				if (parts[0].length > longestTitleLen) {
					longestTitleLen = parts[0].length;
					longestTitle = parts[0];
				}
				if (parts[1] && parts[1].length > longestSportLen) {
					longestSportLen = parts[1].length;
					longestSport = parts[1];
				}
			}
		}

		// Add spaces to the end of each line to make the columns line up
		const formattedLines = events.map((line) => {
			const parts = line.split("|").map((part) => part.trim()); // Split by '|' and remove leading/trailing spaces
			// If parts only has one element, then the string is not an event and should be returned
			if (parts.length < 2) {
				return parts[0];
			}
			const spaces = " ".repeat(longestTitleLen - parts[0].length + 3);
			const spaces2 = " ".repeat(longestSportLen - parts[1].length + 3);
			if (parts[2].length === 2) {
				parts[2] = parts[2] + " ".repeat(3);
			}
			return (
				parts[0] + spaces + parts[1] + spaces2 + parts[2] + "  " + parts[3]
			);
		});
		return formattedLines;
	}
};

const vintersport = [
	"Langrenn",
	"Skiskyting",
	"Alpint",
	"Hopp",
	"Kombinert",
	"Snowboard",
	"Freestyle Ski",
	"Skøyter",
	"Ishockey",
];
