// lodash.js
var _ = require('lodash');
// moment-range.js
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

// Start of Project

// Year - Month - Day
const yearRange = moment.range('2019-01-01', '2019-12-31');
const monthRange = moment.range('2019-01-06', '2019-01-12');
// Months Array
    const month = Array.from(yearRange.by('month'));
    var arraym = month.map(m => m.format('MMMM'))

    const weekdays = Array.from(monthRange.by('days'));
    var arrayw = weekdays.map(m => m.format('dddd'));

    for(i=0; i<month.length;i++){
        console.log(arraym[i]) // Months
        console.log(_.join(arrayw));
    }

    function changes(){
        _.unshift()
        _.join()
    }

        // console.log(_.join(arrayw));
