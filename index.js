// lodash.js
var _ = require('lodash');
// moment-range.js
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

// Start of Project

const range = moment.range('2019-01-01', '2019-12-31');

// for (let month of range.by('month')) {
//   month.format('YYYY-MM-DD');
// }

// Months Array
const month = Array.from(range.by('month'));
var arraym = month.map(m => m.format('MMMM'))

console.log(arraym)

// Days Array
const days = Array.from(range.by('days'));
var arrayd = days.map(m => m.format('DD'))

console.log(arrayd)

// var newarrayd = _.chunk(arrayd, 7)

// console.log(newarrayd)