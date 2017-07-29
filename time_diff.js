function diff(current, interval){
    var time_diff = {
        hour: 0,
        minute: 0
    };
	var standard_date = new Date(); 	
	var standard_hour = (parseInt(current.getHours()/interval) + 1) * interval;
	
	standard_date.setHours(standard_hour, 0);

	var gap = (standard_date.getTime() - current.getTime())/60000;

	time_diff.hour = parseInt(gap/60);
    time_diff.minute = gap%60;

    return time_diff;
}

diff(new Date(), 2);


module.exports = diff;
