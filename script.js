class DarkMode {
    constructor() {
        this.status = localStorage.getItem('enable');
        console.log(this.status)
        this.active()
    };

    enableDark(class_name,bg_color) {
        // enable do something with desing
        this.class_name = class_name
        this.bg_color = bg_color
        this.icon = document.querySelector('#Switch-Mode').src = 'img/light.png'
        this.css_class = document.querySelector(class_name);
        this.css_class.style.backgroundColor = bg_color;
        this.status = localStorage.setItem('enable','DarkMode');
    }
    disableDark() {
        this.choose = document.querySelector('.fst-dark-bg');
        this.choose.style.backgroundColor = 'red';
        this.status = localStorage.setItem('enable','LightMode');
    }

    active() {
        this.dark_btn = document.querySelector('#Switch-Mode');
        this.dark_btn.addEventListener('click', () => {
        this.status = localStorage.getItem('enable');
        console.log(this.status)
            if (this.status !== 'DarkMode') {
                this.enableDark('.fst-dark-bg','green')
            } else {
                this.disableDark()
            }
        });        
    }   
}
obj = new DarkMode()