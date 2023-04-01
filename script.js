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
            $('#Switch-Mode').addClass('rotations');
        }
        // Callback method
        this.active()
    };
    enableDark() {
        // set dark-mode option 
        this.status = localStorage.setItem('enable','DarkMode');
        // switch to dark-logo
        this.icon = document.querySelector('#Switch-Mode').src="icons/home/dark.png";
        // Define the Classes_background and Colors
        this.classList = ['.Dark-nav','.darkmode-body','.side-dark-body']
        this.colorList = ['#1d2a35','#0d1721','#15202b']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.backgroundColor = this.colorList[i];
        }
        // Define the Classes_Text and Colors
        this.classList = ['.logo-color','.side-nav-home','.side-nav-about-us']
        this.colorList = ['white','white','white']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.color = this.colorList[i];
        }
        $(document).ready(function() {
            $('#Switch-Mode').fadeIn(1500);

        })
    }
    disableDark() {
        this.icon = document.querySelector('#Switch-Mode').src="icons/home/light.png";
        this.status = localStorage.setItem('enable','LightMode');
        // Define the Classes_background and Colors
        this.classList = ['.Dark-nav','.darkmode-body','.side-dark-body']
        this.colorList = ['#5800FF','#0096FF','#00D7FF']
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.backgroundColor = this.colorList[i];
        }
        // Define the Classes_Text and Colors
        this.classList = ['.logo-color']
        this.colorList = ['white']
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
                $('#Switch-Mode').animate({padding: '10px 20px 30px 50px'}).fadeIn(500);
                $('#Switch-Mode').animate({padding: '0px'});
                $('#Switch-Mode').addClass('rotations');
                    
            } else {
                this.disableDark()
                $('#Switch-Mode').animate({padding: '10px 20px 30px 50px'}).fadeIn(1000);
                $('#Switch-Mode').animate({padding: '0px'});
                $('#Switch-Mode').addClass('rotations');
            }
        });
    }
}
obj = new DarkMode()