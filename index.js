// lodash.js
var _ = require('lodash');
// moment-range.js
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

// Start of Project

// Year - Month - Day
const yearRange = moment.range('2019-01-01', '2019-12-31');
const weekDayRange = moment.range('2019-01-06', '2019-01-12');

// Month 1
const mRange1 = moment.range('2019-01-01', '2019-01-31');
// Month 2
const mRange2 = moment.range('2019-02-01', '2019-02-28');
// Month 3
const mRange3 = moment.range('2019-03-01', '2019-03-31');
// Month 4
const mRange4 = moment.range('2019-04-01', '2019-04-30');
// Month 5
const mRange5 = moment.range('2019-05-01', '2019-05-31');
// Month 6
const mRange6 = moment.range('2019-06-01', '2019-06-30');
// Month 7
const mRange7 = moment.range('2019-07-01', '2019-07-31');
// Month 8
const mRange8 = moment.range('2019-08-01', '2019-08-31');
// Month 9
const mRange9 = moment.range('2019-09-01', '2019-09-30');
// Month 10
const mRange10 = moment.range('2019-10-01', '2019-10-31');
// Month 11
const mRange11 = moment.range('2019-11-01', '2019-11-30');
// Month 12
const mRange12 = moment.range('2019-12-01', '2019-12-31');

// Months Array
    const month = Array.from(yearRange.by('month'));
    var arraym = month.map(m => m.format('MMMM'))

    const weekdays = Array.from(weekDayRange.by('days'));
    var arrayw = weekdays.map(m => m.format('dddd'));

    
        const day1 = Array.from(mRange1.by('days'));
        var m1 = day1.map(m => m.format('D'));

        const day2 = Array.from(mRange2.by('days'));
        var m2 = day2.map(m => m.format('D'));

        const day3 = Array.from(mRange3.by('days'));
        var m3 = day3.map(m => m.format('D'));

        const day4 = Array.from(mRange4.by('days'));
        var m4 = day4.map(m => m.format('D'));

        const day5 = Array.from(mRange5.by('days'));
        var m5 = day5.map(m => m.format('D'));

        const day6 = Array.from(mRange6.by('days'));
        var m6 = day6.map(m => m.format('D'));

        const day7 = Array.from(mRange7.by('days'));
        var m7 = day7.map(m => m.format('D'));

        const day8 = Array.from(mRange8.by('days'));
        var m8 = day8.map(m => m.format('D'));

        const day9 = Array.from(mRange9.by('days'));
        var m9 = day9.map(m => m.format('D'));

        const day10 = Array.from(mRange10.by('days'));
        var m10 = day10.map(m => m.format('D'));

        const day11 = Array.from(mRange11.by('days'));
        var m11 = day11.map(m => m.format('D'));

        const day12 = Array.from(mRange12.by('days'));
        var m12 = day12.map(m => m.format('D'));



    for(i=0; i<month.length;i++){
        console.log(arraym[i]) // Months
        console.log(_.join(arrayw));
    }

    console.log(m1)
    console.log(m2)
    console.log(m3)
    console.log(m4)

        // console.log(_.join(arrayw));
