/**
 * Date Formatter
 *
 * Create appropriate date strings for the <time> element.
 * Returns both human and machine readable values.
 */
function dateFormatter(date: Date) {
	const dateFormatted = new Date(date);

	new Date(date).toString();

	const [month, day, year] = [
		dateFormatted.getMonth(),
		dateFormatted.getDate(),
		dateFormatted.getFullYear(),
	];

	let readableDateString = `${day}/${month + 1} — ${year}`;
	let machineReadableDateString = dateFormatted.toISOString();

	return { readableDateString, machineReadableDateString };
}

export default dateFormatter;
