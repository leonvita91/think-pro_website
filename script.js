
// read the key value from localstorge

let darkMode = localStorage.getItem('DarkMode');
const DarkMode_toggle = document.querySelector('#dark-mode');


const enableDarkMode = () => {
    // orginize JS
    document.querySelector('#dark-mode').src="img/light.png";
    const en = {
        dark : function (className,bg_color) {
            this.className = className
            this.bg_color = bg_color
            const bg = document.querySelector(this.className)
            bg.style.backgroundColor = this.bg_color
        }
    }

    localStorage.setItem('DarkMode','enable');
    new en.dark(".fst-dark-bg","green");
};

const disableDarkMode = () => {
    document.querySelector('#dark-mode').src="img/dark.png";

    const dis = {
        light : function (className,bg_color) {
            this.className = className
            this.bg_color = bg_color
            const selector = document.querySelector(this.className)
            selector.style.backgroundColor = this.bg_color
        }
    }
    new dis.light('.fst-dark-bg','red')

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





// Jquery About us page
$(function() {
    $('#ayoub').hide(500).fadeOut(4000).fadeIn(4000);
    $('#ayoub').addClass('user-rotation');
});