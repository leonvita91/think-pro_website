
localStorage.setItem('color','#1d2a35');

function dark () {
    let colour = localStorage.getItem('color');  
    let dark_mode = document.body;
    dark_mode.style.backgroundColor = colour ;
    let dark_nav = document.getElementById('nav');
    dark_nav.style.backgroundColor = '#0d1721';
    let dark_text = document.getElementById('site-name'); 
    dark_text.style.color = 'white';
    let dark_btn = document.getElementById('dark-btn');
    dark_nav.style.backgroundColor = '#335980';
}

/*
function fun () {
    var img = document.getElementById('pic');
    img.src = 'bg1.jpg';
}
*/

