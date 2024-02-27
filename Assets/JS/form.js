// condition to check weather dark mode is on on alternate page
const switcher = document.querySelector('#switchmode')
let mode = "light"
while(true){
if(localStorage.getItem('darkmodeon') === 'true'){
    mode = 'dark';
    document.body.setAttribute('class', 'dark-mode');
    document.querySelector('#switchmode').checked = true;
    // document.querySelector('#switchmode').setAttribute('style', 'transition: .0s;')
    break;
 } else{
    mode = 'light';
    document.body.setAttribute('class', 'light-mode');
    break;
    }
}
// function to set dark mode via slider
switcher.addEventListener ('click', function(){
    if (mode === 'light') {
        mode = 'dark';
        document.body.setAttribute('class', 'dark-mode');
        localStorage.setItem('darkmodeon', true);
    } else {
        mode = 'light';
        localStorage.setItem('darkmodeon', false);
        document.body.setAttribute('class', 'light-mode');
    }
});  


// function to save from inputs to local storage
function psotblog(event) {
    // Prevent default action
    event.preventDefault();
    
    let user = document.querySelector('#user').value
    let title = document.querySelector('#title').value
    let article = document.querySelector('#article').value

    

    localStorage.setItem("username", `${user}`);
    localStorage.setItem("title", `${title}`)
    localStorage.setItem("content", `${article}`)

    window.location.href = "./blog.html";
}


// click event listern that runs psotblog function
const click = document.querySelector('#buttonclick')
click.addEventListener('click', psotblog);





