/**
 * @prettier
 */

import moment from 'moment-timezone/builds/moment-timezone-with-data-10-year-range'

const date = new Date('2014-10-25T10:46:20Z')
const nyTimeZone = 'America/New_York'

const time = moment.tz(date, nyTimeZone)

console.log('moment', time.format('YYYY-MM-DD HH:mm:ssZZ'))
