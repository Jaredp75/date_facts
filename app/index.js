var moment = require('moment');
const chalk = require('chalk');
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var dayOfYear = moment().dayOfYear();
var startofDay = moment().startOfDay();
var totalSeconds = function(){
  var hour = moment().hour();
  var minute = moment().minute();
  var seconds = moment().second();
  var total = (hour * 60 * 60) + (minute * 60) + seconds;
  return total
}

console.log;
	log(`
	It is ${chalk.blue(now)}.
	It is the ${chalk.magenta(dayOfYear)}th day of the year.
	It is ${chalk.cyan(totalseconds())} seconds into the day.
	`);
