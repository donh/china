/*
var tasks = [
{"startDate":new Date("1981"),"endDate":new Date("1985"),"taskName":"6-5","status":"RUNNING"},
{"startDate":new Date("1986"),"endDate":new Date("1990"),"taskName":"7-5","status":"SUCCEEDED"},
{"startDate":new Date("1991"),"endDate":new Date("1995"),"taskName":"8-5","status":"FAILED"},
{"startDate":new Date("1996"),"endDate":new Date("2000"),"taskName":"9-5","status":"KILLED"},
{"startDate":new Date("2001"),"endDate":new Date("2005"),"taskName":"10-5","status":"RUNNING"},
{"startDate":new Date("2006"),"endDate":new Date("2010"),"taskName":"11-5","status":"SUCCEEDED"},
{"startDate":new Date("2011"),"endDate":new Date("2015"),"taskName":"12-5","status":"FAILED"}
];
*/

var tasks = [
{"startDate":new Date("1991"),"endDate":new Date("1995"),"taskName":"8-5","status":"FAILED"},
{"startDate":new Date("1996"),"endDate":new Date("2000"),"taskName":"9-5","status":"KILLED"},
{"startDate":new Date("2001"),"endDate":new Date("2005"),"taskName":"10-5","status":"RUNNING"},
{"startDate":new Date("2006"),"endDate":new Date("2010"),"taskName":"11-5","status":"SUCCEEDED"},
{"startDate":new Date("2011"),"endDate":new Date("2015"),"taskName":"12-5","status":"FAILED"}
];

var taskStatus = {
	"SUCCEEDED" : "bar",
	"FAILED" : "bar-failed",
	"RUNNING" : "bar-running",
	"KILLED" : "bar-killed"
};

var taskNames = [ "8-5", "9-5", "10-5", "11-5", "12-5" ];
//var taskNames = [ "6-5", "7-5", "8-5", "9-5", "10-5", "11-5", "12-5" ];

tasks.sort(function(a, b) {
	return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
	return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

//var format = "%H:%M";
var format = "%Y";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);