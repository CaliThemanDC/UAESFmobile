


/*This Function hides the nav bar and places a mobile nav bar


	

/*This Function moves the Speaker's from the ul list  
and places the name under the image when in mobile view
*/
function mobileSpeaker() {
//This searches for speakers names
var speakersName = $(sName);
var speaker;



//loops through each speakers name and places their name under their picture
for(var i = 0; i < speakersName.length; i++) {
	 speaker = $(speakerName); 
	 speaker[i].textContent = speakersName[i].textContent;
};

$('nameRow1').css('visibility', 'hidden');
}
mobileSpeaker();