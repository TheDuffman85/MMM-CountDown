Module.register("MMM-CountDown",{
	// Default module config.
	defaults: {
		date: "3000-01-01",
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: ' Tage ',
		hoursLabel: ' Std. ',
		minutesLabel: ' Min. ',
		secondsLabel: ' Sek.'
	},

	// set update interval
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");

		var timeWrapper = document.createElement("div");

		timeWrapper.className = "time bright small light";

		var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
		
		// Build the output
		var hrs = '';
		var mins = '';
		var secs = '';
		var days = diffDays + this.config.daysLabel;
		
		if(this.config.showHours == true) hrs = this.zeroFill(diffHours, 2) + this.config.hoursLabel;
		if(this.config.showMinutes == true) mins = this.zeroFill(diffMinutes, 2) + this.config.minutesLabel;
		if(this.config.showSeconds == true) secs = this.zeroFill(diffSeconds, 2) + this.config.secondsLabel;

		timeWrapper.innerHTML = days + hrs + mins + secs;
		
		wrapper.appendChild(timeWrapper);

		return wrapper;
	},
	
	zeroFill: function (number, width) {
		var fillZeroes = "00000000000000000000"; 
		
		// make sure it's a string
		var input = number + "";  
		var prefix = "";
		if (input.charAt(0) === '-') {
			prefix = "-";
			input = input.slice(1);
			--width;
		}
		var fillAmt = Math.max(width - input.length, 0);
		return prefix + fillZeroes.slice(0, fillAmt) + input;
	}
});
