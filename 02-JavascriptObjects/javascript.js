function resetPage() {
	location.reload();
}

// objects
var song1 = new Object();
var song2 = {};
var song3 = {
	album: "Evolve",
	title: "Believer",
	artist: "Imagine Dragons",
	trackLength: "3:24",
}

function demoConstructors() {
	document.getElementById('songOne').innerHTML = song1;	
	document.getElementById('songTwo').innerHTML = song2;	
	document.getElementById('songThreeAlbum').innerHTML = "Album:  " + song3.album;
	document.getElementById('songThreeTitle').innerHTML = "Title:  " + song3.title;
	document.getElementById('songThreeArtist').innerHTML = "Artist:  " + song3.artist;
	document.getElementById('songThreeTrackLength').innerHTML = "Track Length:  " + song3.trackLength;
}

// properties
function changeProperties() {
	song1.title = "Old Town Road";
	song2["artist"] = "Lil Nas X";
	song3.album = "Blurryface"
	song3.title = "Stressed Out"
	song3["artist"] = "Twenty One Pilots"
	song3["trackLength"] = "3:22"
}

function demoProperties() {
	changeProperties();
	document.getElementById('songOne2').innerHTML = "Title:  " + song1.title;	
	document.getElementById('songTwo2').innerHTML = "Artist:  " + song2["artist"];	
	document.getElementById('songThreeAlbum2').innerHTML = "Album:  " + song3.album;
	document.getElementById('songThreeTitle2').innerHTML = "Title:  " + song3.title;
	document.getElementById('songThreeArtist2').innerHTML = "Artist:  " + song3["artist"];
	document.getElementById('songThreeTrackLength2').innerHTML = "Track Length:  " + song3["trackLength"];
}

// methods
var getMethodSong = {
	artist: "Taylor Swift",
	title: "ME! (feat. Brendon Urie)",
	trackLenth: function () {
		var min = 3;
		var sec = 13;
		return min + ":" + sec;
	}
}

function demoMethods() {
	document.getElementById('songArtist').innerHTML = getMethodSong.artist;	
	document.getElementById('songTitle').innerHTML = getMethodSong.title;	
	document.getElementById('songTrackLength').innerHTML = getMethodSong.trackLenth();
}

// Instances
var classMates = [];
function ClassMate(album, title, artist, trackLength) {
	this.album = album,
	this.title = title,	
	this.artist = artist,
	this.trackLength = trackLength,
	this.songString = function () {
		return 	"Album:  " + this.album + "<br>" +
						"Title:  " + this.title + "<br>" +
						"Artist:  " + this.artist + "<br>" +
						"Track Length:  " + this.trackLength;
	}
}
// Array of objects
classMates.push(new ClassMate("Floored", "Fly", "Sugar Ray", "4:52"));
classMates.push(new ClassMate("Hot Fuss", "Mr. Brightside", "The Killers", "3:42"));
classMates.push(new ClassMate("Bleed American", "The Middle", "Jimmy Eat World", "2:45"));

function demoInstances() {
	//innerHTML = innerHTML.replace(/\n\r?/g, '<br />');
	document.getElementById('instance1').innerHTML = classMates[0]["songString"]();	
	document.getElementById('instance2').innerHTML = classMates[1]["songString"]();	
	document.getElementById('instance3').innerHTML = classMates[2]["songString"]();
}

