/**
 * Date Formatter
 *
 * Create appropriate date strings for the <time> element.
 * Returns both human and machine readable values.
 */
function dateFormatter(date: Date | string) {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const nthNumber = (number: number) => {
    return number > 0
      ? ['th', 'st', 'nd', 'rd'][(number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10]
      : ''
  }

  const [day, month, year] = [
    date.getDate() + nthNumber(date.getDate()),
    monthNames[date.getMonth()],
    date.getFullYear(),
  ]

  let readableDateString = `${day} ${month}, ${year}`
  let machineReadableDateString = date.toISOString()

  return { readableDateString, machineReadableDateString }
}

export default dateFormatter
