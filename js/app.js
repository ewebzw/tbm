const themeStyle = document.getElementById('theme-s');
const themeStyle2 = document.getElementById('theme-s2');
const themeNav = document.getElementById('theme');
const themeNav2 = document.getElementById('themed');
const themeLink = document.getElementById('t-link');

document.addEventListener('DOMContentLoaded',()=>{
	themeNav.addEventListener('click',() => {
		themeStyle.href="css/dark.css";
})
themeNav2.addEventListener('click',() => {
		themeStyle.href="css/default.css";
})

})