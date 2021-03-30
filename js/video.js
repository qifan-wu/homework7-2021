var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click",
function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + '%';
});

document.querySelector("#pause").addEventListener("click",
function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("changing volume");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100 + '%';
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("mute");
		video.muted = true;
		this.innerHTML="Unmute";
	}
	else {
		console.log("unmute");
		video.muted = false;
		this.innerHTML="Mute";
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});
''
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping ahead");
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15;
	}
	else {video.currentTime = 0}
	console.log(video.currentTime);
});
