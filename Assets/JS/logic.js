
//sets default mode on first time opening page to light
let mode = "light"

//sets mode based off previous page
while(true){
if(localStorage.getItem('darkmodeon') === 'true'){
    mode = 'dark';
    document.body.setAttribute('class', 'dark-mode');
    document.querySelector('#switchmode').checked = true;
    document.querySelector('.slider').style.transition = '0s'
    break;
 } else{
    mode = 'light';
    document.body.setAttribute('class', 'light-mode');
    break;
    }
}

//function to set mode via slider being clicked
const switcher = document.querySelector('#switchmode')
switcher.addEventListener ('click', function(){
    if (mode === 'light') {
        mode = 'dark';
        localStorage.setItem('darkmodeon', true);
        document.body.setAttribute('class', 'dark-mode');
    } else {
        mode = 'light';
        localStorage.setItem('darkmodeon', false);
        document.body.setAttribute('class', 'light-mode');
    }
});