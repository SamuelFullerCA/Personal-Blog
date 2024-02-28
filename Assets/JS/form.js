
//function to save from inputs to local storage
function psotblog(event) {

    //Prevent default action
    event.preventDefault();

    let user = document.querySelector('#user').value
    let title = document.querySelector('#title').value
    let article = document.querySelector('#article').value


    //alerts for incomplete form
    if (user === ""){
        alert("Form Incomplete, please fill out Username")
    }else if (title === ""){
        alert("Form Incomplete, please add a title")
    }else if (article === ""){
        alert("Form Incomplete, your blog has no content")
    }else{
        localStorage.setItem("username", `${user}`);
        localStorage.setItem("title", `${title}`)
        localStorage.setItem("content", `${article}`)
        

    //opens blog page on submit button click
    window.location.href = "./blog.html";
    }
}


// click event listern that runs psotblog function
const click = document.querySelector('#submitclicked')
click.addEventListener('click', psotblog);


//function to go to blog page after submiting at least 1 blog
const toblogpage = document.querySelector('#toblog')
toblogpage.addEventListener('click', function(){
    
    let usernull = localStorage.getItem('username')
    let titlenull = localStorage.getItem('title')
    let contentenull = localStorage.getItem('content')

    //this stops a bug causing blog post from apearing with null as a blog post title, username, and content...
    //...when going to blog page before any values are in local storage
    if(usernull === null || contentenull === null || titlenull === null){
        alert('You must submit at least 1 blog before freely accessing the blog page')
    } else{
    window.location.href = "./blog.html";
    }

});
