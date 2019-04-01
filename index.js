// lodash.js
var _ = require('lodash');
// moment-range.js
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const chalk = require('chalk');
// Start of Project

// Year - Month - Day
const yearRange = moment.range('2019-01-01', '2019-12-31');
// const weekDayRange = moment.range('2019-01-06', '2019-01-12');

// Month 1
const mRange1 = moment.range('2019-01-01','2019-01-31');
// Month 2
const mRange2 = moment.range('2019-02-01','2019-02-28');
// Month 3
const mRange3 = moment.range('2019-03-01','2019-03-31');
// Month 4
const mRange4 = moment.range('2019-04-01','2019-04-30');
// Month 5
const mRange5 = moment.range('2019-05-01','2019-05-31');
// Month 6
const mRange6 = moment.range('2019-06-01','2019-06-30');
// Month 7
const mRange7 = moment.range('2019-07-01','2019-07-31');
// Month 8
const mRange8 = moment.range('2019-08-01','2019-08-31');
// Month 9
const mRange9 = moment.range('2019-09-01','2019-09-30');
// Month 10
const mRange10 = moment.range('2019-10-01','2019-10-31');
// Month 11
const mRange11 = moment.range('2019-11-01','2019-11-30');
// Month 12
const mRange12 = moment.range('2019-12-01','2019-12-31');

    function calendar(){

        const month = Array.from(yearRange.by('month'));
        var arraym = month.map(m => m.format('MMMM'))
    
        // const weekdays = Array.from(weekDayRange.by('days'));
        // var arrayw = weekdays.map(m => m.format('ddd'));
    
        const months = ["day1","day2","day3","day4","day5","day6",
        "day7","day8","day9","day10","day11","day12",]
    
        var mapping = ["m1","m2","m3","m4","m5","m6",
        "m7","m8","m9","m10","m11","m12",]
    
        var ranges = [mRange1,mRange2,mRange3,mRange4,mRange5,mRange6,
        mRange7,mRange8,mRange9,mRange10,mRange11,mRange12]
        
        for (i=0; i < 12;i++){

            months[i] = Array.from(ranges[i].by('days'));
            mapping[i] = months[i].map(m => m.format('D'));
            console.log(arraym[i]) // Months

            console.log(_.pad('Sun  Mon  Tue  Wed  Thu  Fri  Sat', 42, '-')) // WeekDays


            // console.log(_.join(arrayw)); // WeekDays 
            // if ( ranges[i] == mRange6){
            //     console.log(chalk.red(mapping));
            // }

            console.log(_.chunk(mapping[i], 7))
            var join = _.join(ranges[i]);
            console.log(join)

        }
    }

    calendar();

    // TESTING 

    // const day1 = Array.from(mRange1.by('days'));
    // var m1 = day1.map(m => m.format('D'));


    // for(i=0; i<month.length;i++){
    //     console.log(arraym[i]) // Months
    //     console.log(_.join(arrayw));
    //     console.log(map[i])
    // }

    // console.log(_.join(arrayw));
