// Dark Mode Class
class DarkMode {
    constructor() {
        // initialize
        this.status = localStorage.getItem('enable');
        // Check status
        if (this.status === 'DarkMode'){
            this.enableDark()
        } else {
            this.disableDark()
            $('#Switch-Mode').addClass('rotations');
        }

        // first load animations
        $('.social-container').hide(0).slideDown(2600).fadeOut(700).fadeIn(700);
        $('.para-container').hide(0).fadeIn(1000);
        $('.gridsys').hide(0).fadeIn(500);
        $('.naving').hide(0).fadeIn(2000);
        // Callback method
        this.active()
    };

    // Enable Dark-mode
    enableDark() {
        // set dark-mode option 
        this.status = localStorage.setItem('enable','DarkMode');
        // switch to dark-logo
        this.icon = document.querySelector('#Switch-Mode').src="static/icons/home/light.png";
        // Define the Classes_background and Colors
        this.classList = [
        '.Dark-nav',
        '.darkmode-body',
        '.side-dark-body',
        '.para-container h1',
        '.para-container p',
        '.footer-container'
    ]
        this.colorList = [
        '#1A374D',
        '#406882',
        '#6998AB',
        '#6998AB',
        '#1A374D',
        '#1A374D'
    ]
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.backgroundColor = this.colorList[i];
        }
        // Define the Classes_Text and Colors
        this.classList = [
            '.logo-color',
            '.side-nav-home',
            '.side-nav-about-us',
            '.side-nav-login',
            '.para-container h1',
            '.para-container p',
            '.footer-container'
        ]
        this.colorList = [
            'white',
            'white',
            'white',
            'white',
            'white',
            'white',
            'white'
        ]
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.color = this.colorList[i];
        }
    }
    // Disable Dark-mode
    disableDark() {
        this.icon = document.querySelector('#Switch-Mode').src="static/icons/home/dark.png";
        this.status = localStorage.setItem('enable','LightMode');
        // Define the Classes_background and Colors
        this.classList = [
            '.Dark-nav',
            '.darkmode-body',
            '.side-dark-body',
            '.para-container h1',
            '.para-container p',
            '.footer-container'
        ]
        this.colorList = [
            '#C3F8FF',
            '#ABD9FF',
            '#ABD9FF',
            '#ABD9FF',
            '#ABD9FF',
            '#ABD9FF'
        ]
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.backgroundColor = this.colorList[i];
        }
        // Define the Classes_Text and Colors
        this.classList = [
            '.logo-color',
            '.side-nav-home',
            '.side-nav-about-us',
            '.side-nav-login',
            '.para-container h1',
            '.para-container p',
            '.footer-container'
        ]
        this.colorList = [
            'black',
            'black',
            'black',
            'black',
            'black',
            'black',
            'black'
        ]
        //  Apply Looping
        for (let i =0; i < this.classList.length;i++) {
            this.selector_class = document.querySelector(this.classList[i]);
            this.selector_class.style.color = this.colorList[i];
        }
    }
    // on click method
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