


// Create OOP 

class Dark_mode {
    constructor() {
        //initialize 
        const status = localStorage.getItem('DarkMode');
        console.log(status)
        //call methods
        this.enableDarkMode()
        //this.disableDarkMode()
        
    }
    
    enableDarkMode () {
            this.status = localStorage.getItem('DarkMode');
            .addEventListener('click', () => {
            console.log(this.status , `mew is enable`)
            if (darkMode !== 'enable') {
                    enableDarkMode();
                    console.log('testing work')
                    $(function(){
                            $('#dark-mode').animate({padding: '10px 20px 30px 50px'}).fadeIn(500);
                            $('#dark-mode').animate({padding: '0px'});
                            $('#dark-mode').addClass('rotation').fadeIn(1000);
                        });
                
                    } else {
                            disableDarkMode();
                            console.log('testing disable working')
                            $('#dark-mode').animate({padding: '10px 20px 30px 50px'}).fadeIn(1000);
                            $('#dark-mode').addClass('dark-rotation').fadeIn(500);
                            $('#dark-mode').animate({padding: '0px'});
                        };
                    });
        }
                    
}

obj = new Dark_mode()

// enableDarkMode (class_name,bg_color){

//     document.querySelector('#dark-mode').src="img/light.png";
//     // Define objects 
//     this.class_name = class_name
//     this.bg_color = bg_color

//     const dark_bg = document.querySelector(this.class_name)
//     dark_bg.style.backgroundColor = this.bg_color

//     localStorage.setItem('DarkMode','enable')
// }

// // tes = new Dark_mode('mewo');
// // tes.dem()




// // // Enable darkmode

// // const enableDarkMode = () => {
// //     document.querySelector('#dark-mode').src="img/light.png";
// //     // object for class names,bg-color and text colors
// //     const en = {
// //         selector : localStorage.setItem('DarkMode','enable'),
// //         dark_bg : function  (className,bg_color) {
// //             this.className = className
// //             this.bg_color = bg_color
// //             const dark_bg = document.querySelector(this.className)
// //             dark_bg.style.backgroundColor = this.bg_color
            
// //         },
// //         dark_text : function  (class_text,color_text) {
// //             this.class_text = class_text
// //             this.color_text = color_text
// //             const text = document.querySelector(this.class_text)
// //             text.style.color = this.color_text
// //         },
// //     }

//     //new en.dark_text('.logo-color' , 'white')

//     // looping throgh class and colors
//     let class_names = [
//     '.fst-dark-bg',
//     'body',
//     '.side-dark-body'
// ]
//     let colors_names = [
//     '#335980','#1d2a35','#335980'
// ]
//     for (let i = 0; i < 3; i++){
//          new en.dark_bg(class_names[i],colors_names[i]);
//     }
// };

// const disableDarkMode = () => {
//     document.querySelector('#dark-mode').src="img/dark.png";
//     const dis = {
//         light : function (className,bg_color) {
//             this.className = className
//             this.bg_color = bg_color
//             const selector = document.querySelector(this.className)
//             selector.style.backgroundColor = this.bg_color
//         }
//     }

//     // looping throgh class and colors
//     let class_names = [
//         '.fst-dark-bg',
//         'body',
//         '.side-dark-body',
//     ]
//         let colors_names = [
//         '#ffffff','#ffffff','#ffffff'
//     ]
//         for (let i = 0; i < 3; i++){
//             new dis.light(class_names[i],colors_names[i]);
//         }
//     localStorage.setItem('DarkMode',null);
// };



// // Jquery About us page
// $(function() {
//     $('#ayoub').hide(500).fadeOut(4000).fadeIn(4000);
//     $('#ayoub').addClass('user-rotation');
// });