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




let user = document.querySelector('#user')
let title = document.querySelector('#title')
let article = document.querySelector('#article')

// userinput = user.value,
// titleinput = title.value,
// articleinput = article.value

function psotblog(event) {
    // Prevent default action
    event.preventDefault();
    
    userinput = user.value,
    titleinput = title.value,
    articleinput = article.value

    // blog = {
    // username: userinput,
    // blogtitle: titleinput,
    // content: articleinput
    // }





    localStorage.setItem("username", `${userinput}`);
    localStorage.setItem("title", `${titleinput}`)
    localStorage.setItem("content", `${articleinput}`)

    window.location.href = "./blog.html";

    // localStorage.setItem("BlogPost", JSON.stringify(blog))

}

const click = document.querySelector('#buttonclick')

click.addEventListener('click', psotblog);





