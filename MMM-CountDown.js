Module.register("MMM-CountDown",{
	// Default module config.
	defaults: {
		date: "3000-01-01",		
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: 'Days',
		hoursLabel: 'Hours',
		minutesLabel: 'Minutes',
		secondsLabel: 'Seconds',
		icon: null,
		iconColor: 'white'
	},

	getTranslations: function() {
		return {
		  en: "translations/en.json",
		  de: "translations/de.json",
		}
	},

	// set update interval
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
	},

	getStyles: function() {
		return ["MMM-CountDown.css", "font-awesome.css"];
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");
			
		var counterWrapper = document.createElement("div");
		counterWrapper.className = "counterWrapper"; //  bright small light


		var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		// Build icon
		if(this.config.icon){
			var iconWrapper = document.createElement("div");
			iconWrapper.className = "icon";
	
			counterWrapper.appendChild(iconWrapper);

			var iconElement = document.createElement("i");
			iconElement.className = "fas fa-" + this.config.icon;

			if(this.config.iconColor){
				iconElement.style = "color:" + this.config.iconColor + ";";
			}
			
			iconWrapper.appendChild(iconElement);
		}		
		
		// Build day digit
		var digitWrapper = document.createElement("div");
		digitWrapper.className = "digit";

		var numberElement = document.createElement("div");
		numberElement.className = "number";
		numberElement.innerHTML = diffDays;

		var labelElement = document.createElement("div");
		labelElement.className = "label";
		labelElement.innerHTML = this.translate('DAYS');

		digitWrapper.appendChild(numberElement);
		digitWrapper.appendChild(labelElement);
		counterWrapper.appendChild(digitWrapper);
		
		// Build hours digit
		if(this.config.showHours == true) {
			var digitWrapper = document.createElement("div");
			digitWrapper.className = "digit";
	
			var numberElement = document.createElement("div");
			numberElement.className = "number";
			numberElement.innerHTML = this.zeroFill(diffHours, 2);

			var labelElement = document.createElement("div");
			labelElement.className = "label";
			labelElement.innerHTML = this.translate('HOURS');

			digitWrapper.appendChild(numberElement);
			digitWrapper.appendChild(labelElement);
			counterWrapper.appendChild(digitWrapper);
		} 

		// Build minutes digit
		if(this.config.showMinutes == true) {
			var digitWrapper = document.createElement("div");
			digitWrapper.className = "digit";
	
			var numberElement = document.createElement("div");
			numberElement.className = "number";
			numberElement.innerHTML = this.zeroFill(diffMinutes, 2);

			var labelElement = document.createElement("div");
			labelElement.className = "label";
			labelElement.innerHTML = this.translate('MINUTES');

			digitWrapper.appendChild(numberElement);
			digitWrapper.appendChild(labelElement);
			counterWrapper.appendChild(digitWrapper);
		} 

		// Build seconds digit
		if(this.config.showSeconds == true) {
			var digitWrapper = document.createElement("div");
			digitWrapper.className = "digit";
	
			var numberElement = document.createElement("div");
			numberElement.className = "number";
			numberElement.innerHTML = this.zeroFill(diffSeconds, 2);

			var labelElement = document.createElement("div");
			labelElement.className = "label";
			labelElement.innerHTML = this.translate('SECONDS');

			digitWrapper.appendChild(numberElement);
			digitWrapper.appendChild(labelElement);
			counterWrapper.appendChild(digitWrapper);
		} 
		
		wrapper.appendChild(counterWrapper);

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
