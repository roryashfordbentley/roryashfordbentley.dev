/**
 * Date Formatter
 *
 * Create appropriate date strings for the <time> element.
 * Returns both human and machine readable values.
 */
function dateFormatter(date: Date) {
	const dateFormatted = new Date(date);

	new Date(date).toString();

	var monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const nthNumber = (number) => {
		return number > 0
			? ["th", "st", "nd", "rd"][
					(number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10
				]
			: "";
	};

	const [day, month, year] = [
		dateFormatted.getDate() + nthNumber(dateFormatted.getDate()),
		monthNames[dateFormatted.getMonth()],
		dateFormatted.getFullYear(),
	];

	let readableDateString = `${day} ${month} ${year}`;
	let machineReadableDateString = dateFormatted.toISOString();

	return { readableDateString, machineReadableDateString };
}

export default dateFormatter;
