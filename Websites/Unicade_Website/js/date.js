var today = new Date();
var dateString = today.getMonth() + '/';
dateString += today.getDay() + '/';
dateString += today.getFullYear();


var timeString = today.getHours() + ':';
timeString += today.getMinutes();
var infoString = dateString + ' ' + timeString;
document.write(infoString);
