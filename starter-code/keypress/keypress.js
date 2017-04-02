console.log("Sanity Check: JS is working!");
 var startTime;
 var end Time;
 var counting = false;
 var repeatDisplay;
 var total = 0;

$(document).ready(function(){
	$("window"). on("keypress", function handlekeypress(event) {
		if (!counting) {
			counting = true;
			startTime = Date.now();
			repeatDisplay = setInterval(showCurrentTotal, 100);
			} else {
				counting = false;
				clearInterval( repeatDisplay);
				endTime = (Date.now() - startTime)/1000;
				total  = total + endTime;
				$("#total-time"). text ( total +"seconds");
			}
			
		})

})
