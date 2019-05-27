/**
 * @prettier
 */

import format from 'date-fns-tz/format'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'

const date = new Date('2014-10-25T10:46:20Z')
const nyTimeZone = 'America/New_York'
const nyDate = utcToZonedTime(date, nyTimeZone)

const time = format(nyDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: nyTimeZone })

console.log('date-fns', time)
