


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



let username = window.localStorage.getItem("username")
let title = window.localStorage.getItem("title")
let content = window.localStorage.getItem("content")


while(true){
    const post = document.createElement('article')
    document.querySelector('#newblog').appendChild(post)
    post.setAttribute('class', 'titleclass');


    if (title !== null){
        posttitle = document.createElement('h2')
        posttitle.textContent = `${title}`;
        document.querySelector('.titleclass').appendChild(posttitle)
    } else{
        break;
    }

    if (content !== null){
        postcontent = document.createElement('p')
        postcontent.textContent = `${content}`;
        document.querySelector('.titleclass').appendChild(postcontent)
    } else{
        break;
    }

    if (username !== null){
        postuser = document.createElement('h3')
        postuser.textContent = `Blog written by: ${username}`;
        document.querySelector('.titleclass').appendChild(postuser)
        break;
    }else {
        break;
    }
    

}











