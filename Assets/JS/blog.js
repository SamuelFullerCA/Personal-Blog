// let mode = 'dark';

// themSwitcher.addEventListener('click', function(){
//     if (mode === 'dark'){
//         mode = 'light'
//         container.setAttribute('class', 'light');
//     }  else {
//         mode = 'dark';
//         container.setAttribute('class', 'dark');
//       }
// });
// darkmode() {
//     var changer = document.body;
//     changer.classList.toggle("dark-mode");
//   }
    
    
const switcher = document.querySelector('#switchmode')

let mode = "light"
    
switcher.addEventListener ('click', function(){
    if (mode === 'light') {
        mode = 'dark';
        document.body.setAttribute('class', 'dark-mode');
    } else {
        mode = 'light';
        document.body.setAttribute('class', 'light-mode');
    }
});