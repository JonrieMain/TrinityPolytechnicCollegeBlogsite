/* bars,close,navList */
let bars = document.querySelector('#bars');
let close = document.querySelector('#close');
let navList = document.querySelector('.navList');

 /* 2 Click event listener for navigation bar*/ 
bars.addEventListener('click', ()=>{
	navList.style.left="50%";
	close.style.display="block"
	bars.style.display="none";
});
close.addEventListener('click', ()=>{
	navList.style.left="-40%";
	close.style.display="none";
	bars.style.display="block";
});