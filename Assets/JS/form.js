
//function to go to blog page without submitting a blog
const toblogpage = document.querySelector('#toblog')
toblogpage.addEventListener('click', function(){
    window.location.href = "./blog.html";

});


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
        console.log('1')
    }else if (title === ""){
        alert("Form Incomplete, please add a title")
        console.log('2')
    }else if (article === ""){
        alert("Form Incomplete, your blog has no content")
        console.log('3')
    }else{
        localStorage.setItem("username", `${user}`);
        localStorage.setItem("title", `${title}`)
        localStorage.setItem("content", `${article}`)
        console.log('4')

    //opens blog page on submit button click
    window.location.href = "./blog.html";
    }
}


// click event listern that runs psotblog function
const click = document.querySelector('#buttonclick')
click.addEventListener('click', psotblog);



