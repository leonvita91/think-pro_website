
// read the key value from localstorge
let darkMode = localStorage.getItem('DarkMode');

const DarkMode_toggle = document.querySelector('#dark-mode');

const enableDarkMode = () => {
    // add dark-mode when it enable
    let dark_mode = document.body;
    dark_mode.style.backgroundColor = '#1d2a35';
    let side_nav = document.getElementById('side-nav-body');
    side_nav.style.backgroundColor = '#335980';
    let dark_nav = document.getElementById('nav');
    dark_nav.style.backgroundColor = '#335980';
    // change text color
    const bright_text = document.querySelectorAll('.light');
    bright_text.forEach((light) => {
        light.style.color = 'white';
    });

    let dark_btn = document.getElementById('dark-btn');
    dark_btn.style.backgroundColor = '#335980';
    // set localstorge key to enable
    localStorage.setItem('DarkMode','enable');

};

const disableDarkMode = () => {
    // add dark-mode when it enable
    let dark_mode = document.body;
    dark_mode.style.backgroundColor = 'white';
    let side_nav = document.getElementById('side-nav-body');
    side_nav.style.backgroundColor = 'white';
    let dark_nav = document.getElementById('nav');
    dark_nav.style.backgroundColor = '#c8e3fa';
    
     // change text color
     const bright_text = document.querySelectorAll('.light');
     bright_text.forEach((light) => {
         light.style.color = 'black';
     });

    let dark_btn = document.getElementById('dark-btn');
    dark_btn.style.backgroundColor = '#c8e3fa';
    // set localstorge key to null 
    localStorage.setItem('DarkMode',null);
};

if (darkMode === 'enable'){
    enableDarkMode();
}else {
    disableDarkMode();
};


DarkMode_toggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('DarkMode');
    if (darkMode !== 'enable') {
        enableDarkMode();

    } else {
        disableDarkMode();

    };
});







/*
function dark () {
  
    let dark_mode = document.body;
    dark_mode.style.backgroundColor = '#1d2a35';
    let dark_nav = document.getElementById('nav');
    dark_nav.style.backgroundColor = '#0d1721';
    let dark_text = document.getElementById('site-name');
    dark_text.style.color = 'white';
    let dark_btn = document.getElementById('dark-btn');
    dark_nav.style.backgroundColor = '#335980';
};
*/
/*
change font
function demo () {
    let f = document.getElementById('head')
    f.style.fontFamily = 'Impact,Charcoal,sans-serif'
}

change links:
change images:
function fun () {
    var img = document.getElementById('pic');
    img.src = 'bg1.jpg';
    
    function fun () {
        var img = document.getElementById('pic');
        img.src = 'bg1.jpg';
    }
}
function change_links () {
    let lin = 'https://www.facebook.com';
    document.getElementById('links').href = lin;
    
};
*/
