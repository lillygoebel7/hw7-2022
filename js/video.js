var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9
	console.log("New Speed is " + video.playbackRate * 100);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.10
	console.log("New Speed is " + video.playbackRate * 100);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Forward");
	video.currentTime += 10
	if (video.currentTime >= 67.4033){
		video.currentTime = 0
	}
	console.log("Current Time: " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute button pressed")
	if (video.muted == false) {   
		video.muted = true;
		console.log("Video Muted")
		document.querySelector('#mute').innerHTML = "Unmute";
	 	}
 
	else {
		video.muted = false;
		console.log("Video Umuted")
		document.querySelector('#mute').innerHTML = "Mute";
	 	}
});

document.querySelector('#slider').addEventListener("click", function(){
	console.log("The current volume is " + video.volume);
	video.volume = this.value / 100;
	console.log("The current volume is " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});

document.querySelector('#vintage').addEventListener("click", function(){
	console.log("old school");
});

document.querySelector('#orig').addEventListener("click", function(){
	console.log("original");
});


