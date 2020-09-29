let togDate = document.querySelector('.fa-info-circle');
const barLink = document.querySelector('.fa-bars');
const realTime = document.querySelector('.time');
const webLinks = document.querySelector('.bar-link');
let showDate = document.querySelector('.dis-text');
let backNew = document.querySelector('html');
let darkMode = document.querySelector('.dark');

barLink.addEventListener('click', (e) => {
	webLinks.classList.toggle('active')
});

showDate.innerHTML = Date()

togDate.addEventListener('click', (e) => {
	showDate.classList.toggle('show')
});

darkMode.addEventListener('click', (e) => {
	backNew.classList.toggle('back')
});

/*
togDate.addEventListener('click', (e) => {
	document.querySelector('.dis-text')
	.innerHTML = Date()
});

barLink.addEventListener('click', (e) => {
	document.querySelector('.nav-link1')
	.innerHTML = "Website 1"
});

barLink.addEventListener('click', (e) => {
	document.querySelector('.nav-link2')
	.innerHTML = "Website 2"
});
*/
setInterval(displaytime, 500);
function displaytime (){
	var time = new Date();
	var hrs = time.getHours();
	var min = time.getMinutes();

	if (hrs > 12) {
		hrs = hrs - 12
	}

	if (hrs == 0) {
		hrs = 12;
	}

	if (hrs < 10) {
		hrs = hrs;
	}

	if (min < 10) {
		min = '0' + min; 
	}

	realTime.innerHTML = hrs + ':' + min;

}