function generatetimeday() {
	today = new Date;
	weekDayName = new Array ("Sun","Mon","Tues","Wed","Thurs","Fri","Sat");
	monthName = new Array ("Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec");
	var hour = today.getHours();
	var minute = today.getMinutes();
	var weekDay = weekDayName[today.getDay()];
	var month = monthName[today.getMonth()];
	var day = today.getDate();
	var year = today.getFullYear();
	var ap = "am";
	if (hour   > 11) { ap = "pm";             }
	if (hour   > 12) { hour = hour - 12;      }
 	if (hour   == 0) { hour = 12;             }
 	if (minute < 10) { minute = "0" + minute; }
 	var dayTime = hour + ":" + minute + ap + " &nbsp; <small>" + weekDay + ", " + month + " " + day + "</small>";
	$("#time-day").html(dayTime);
	$("#copy-year").html(year);
}