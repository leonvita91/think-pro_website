

// read the key value from localstorge
let darkMode = localStorage.getItem('DarkMode');

const DarkMode_toggle = document.querySelector('#dark-mode');



const enableDarkMode = () => {
    
    document.querySelector('#dark-mode').src="light.png";

    
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
    document.querySelector('#dark-mode').src="dark.png";
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
        
        $(function(){
            $('#dark-mode').animate({padding: '10px 20px 30px 50px'}).fadeIn(500);
            $('#dark-mode').animate({padding: '0px'});
            $('#dark-mode').addClass('rotation').fadeIn(1000);
            
        });

    } else {
        disableDarkMode();
        $('#dark-mode').animate({padding: '10px 20px 30px 50px'}).fadeIn(1000);
        $('#dark-mode').addClass('dark-rotation').fadeIn(500);
        $('#dark-mode').animate({padding: '0px'});
    };
});

// AboutUs page
$(function() {
    $('#ayoub').hide(500).fadeOut(2000).fadeIn(2000);
    $('#ayoub').addClass('user-rotation');


});
