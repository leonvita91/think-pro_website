
class DarkMode {
    constructor() {
        this.status = localStorage.getItem('DarkMode');
        this.enableDark()
        
    };
    
    
    enableDark()
    {
        let z = document.body
        z.style.color = 'green'
        // enable do something with desing
        // this.choose = document.getElementsByClassName('fst-dark-bg')
        // this.choose.style.color = 'green'
        
    }

    active() {
        this.dark_btn = document.querySelector('#Switch-Mode');
        this.dark_btn.addEventListener('click', () => {
    
        });
        
    }
}

obj = new DarkMode()