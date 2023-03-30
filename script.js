class DarkMode {
    constructor() {
        // initialize
        this.status = localStorage.getItem('enable');
        console.log(this.status)
        // Check status
        if (this.status === 'DarkMode'){
            this.enableDark()
        } else {
            this.disableDark()
        }
        // Callback method
        this.active()
    };
    enableDark() {
        // set dark-mode option 
        this.status = localStorage.setItem('enable','DarkMode');
        // switch to dark-logo
        this.icon = document.querySelector('#Switch-Mode').src="img/dark.png";
        // Define the Classes_background and Colors
        this.classList = ['.Dark-nav','.darkmode-body','.side-dark-body']
        this.colorList = ['green','yellow','blue']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.backgroundColor = this.colorList[i];
        }
        // Define the Classes_Text and Colors
        this.classList = ['.logo-color','.side-nav-text']
        this.colorList = ['white','white']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.color = this.colorList[i];
        }
    }
    disableDark() {
        this.icon = document.querySelector('#Switch-Mode').src="img/light.png";
        this.status = localStorage.setItem('enable','LightMode');
        // Define the Classes_background and Colors
        this.classList = ['.Dark-nav','.darkmode-body','.side-dark-body']
        this.colorList = ['grey','white','red']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.backgroundColor = this.colorList[i];
        }
        // Define the Classes_Text and Colors
        this.classList = ['.logo-color','.side-nav-text']
        this.colorList = ['black','black']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.color = this.colorList[i];
        }
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