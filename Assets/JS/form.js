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