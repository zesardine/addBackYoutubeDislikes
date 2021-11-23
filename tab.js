chrome.runtime.onMessage.addListener(
	function(request, sender) {
		if(request.message == "addDislikes"){ //Sends the interval start time and total time
			console.log("Recieved from background");
			mainFunc();
		}
	}
);

function mainFunc(){
	
	var request = makeHttpObject();
	request.open("GET", window.location, true);
	request.send(null);
	request.onreadystatechange = function() {
	  if (request.readyState == 4)
	
		tmp = request.responseText;
		
		if(tmp == undefined){
			return 0;
		}
			
		var elementExists = document.getElementsByClassName("customthingy").length;
			
		if(elementExists !== 0){document.getElementsByClassName("customthingy")[0].remove();}
		
		let beginStr = tmp.search("averageRating");
		let endStr = tmp.search("allowRatings");
		let important = parseFloat(tmp.substring(beginStr, endStr).replace(/[^\d.]/g, ''));
		console.log(beginStr, endStr, important);
		
		let likes = 0;
		let dislikes = 0;
		
		if(beginStr != -1 && endStr != -1){
		
			let stuffs = document.getElementsByTagName("yt-formatted-string");
			likes = 0;
			for (let i = 0; i < stuffs.length; i++){
				if(stuffs[i].getAttribute('aria-label') != undefined){
					if(stuffs[i].getAttribute('aria-label').includes("likes")){
						likes = parseInt((stuffs[i].getAttribute('aria-label')).replace(/[^\d.]/g, ''));
						break;
					}
				}
			}
			dislikes = Math.round(((5-important)*likes)/(important-1));
			console.log(convertSI(dislikes));	
		}
		
		var dislikesExists = document.getElementsByClassName("newDislikeCount").length;
		
		//if(elementExists !== 0 || dislikesExists !== 0){return 0;}

	
		//document.getElementsByClassName("ytd-toggle-button-renderer")[7].remove();
		if(document.getElementsByClassName("ytd-menu-renderer")[1].querySelector("a").querySelector("yt-formatted-string").innerText !== "LIKE"){
			document.getElementsByClassName("ytd-menu-renderer")[2].querySelector('yt-formatted-string').innerHTML = convertSI(dislikes);
		}else{
			document.getElementsByClassName("ytd-menu-renderer")[2].querySelector('yt-formatted-string').innerHTML = "DISLIKE";
		}
		
		var elementExists = document.getElementsByClassName("customthingy").length;
		if(elementExists > 0){document.getElementsByClassName("customthingy")[0].remove();}
		
		setTimeout(function(){
			var wd = document.getElementsByClassName("ytd-menu-renderer")[0].children[2].offsetLeft*0.95;
			var ratio = (important-1)/4*100
			var bloop = document.createElement("div");
			bloop.innerHTML = '<div id="sentiment" class="style-scope ytd-video-primary-info-renderer customthingy" system-icons="" style="width: ' + wd +'px;"><!--css-build:shady--><div id="container" class="style-scope" style="height:2px; background-color: #555;"><div id="like-bar" class="style-scope" style="width: ' + ratio + '%; height: 2px; background-color: white"></div></div><tp-yt-paper-tooltip position="top" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1" style="left: 8.25px; top: -82px; white-space: nowrap;"><!--css-build:shady-->' + likes + ' / ' + dislikes + '</tp-yt-paper-tooltip>';           
			document.getElementById("menu-container").appendChild(bloop); 
		}, 1000);
	
	};
	
}

//literally SI function copied from stackoverflow
function convertSI(num){
	let SI_SYMBOL = ["", "k", "M", "B", "T"];
	
	let tier = Math.log10(Math.abs(num)) / 3 | 0;
	let formatted = num;

	// if zero, we don't need a suffix
	if(tier != 0){
		let suffix = SI_SYMBOL[tier];
		let scale = Math.pow(10, tier * 3);

		// scale the number
		let scaled = num / scale;

		// format number and add suffix
		return(scaled.toFixed(1) + suffix);	
	}else{
		return num;
	}
}

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}