class DarkMode {
    constructor() {
        this.status = localStorage.getItem('enable');
        document.querySelector('#Switch-Mode').src="img/dark.png";
        this.active()
    };
    enableDark() {
        // enable do something with desing
        this.status = localStorage.setItem('enable','DarkMode');
        this.icon = document.querySelector('#Switch-Mode').src="img/dark.png";
        this.object = {
            class  : ['.fst-dark-bg','.darkmode-body','.logo-color'],
            colors : ['green','blue'],
            text   : ['white']
        }
        // looping 
        for (let i = 0; i < 3; i++){
            this.css_class = document.querySelector(this.object.class[i]);
            this.css_class.style.backgroundColor = this.object.colors[i];
            this.css_class.style.color = this.object.text;
        }
    }
    disableDark() {
        this.icon = document.querySelector('#Switch-Mode').src="img/light.png";
        // this.choose = document.querySelector('.fst-dark-bg');
        // this.choose.style.backgroundColor = 'red';
        this.status = localStorage.setItem('enable','LightMode');
    }
    active() {
        this.dark_btn = document.querySelector('#Switch-Mode');
        this.dark_btn.addEventListener('click', () => {
        this.status = localStorage.getItem('enable');
            if (this.status !== 'DarkMode') {
                this.enableDark()
            } else {
                this.disableDark()
            }
        });
    }
}
obj = new DarkMode()