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
        localStorage.setItem('darkmodeon', true);
        document.body.setAttribute('class', 'dark-mode');
    } else {
        mode = 'light';
        localStorage.setItem('darkmodeon', false);
        document.body.setAttribute('class', 'light-mode');
    }
});


// function to return to previos page
const returns = document.querySelector('#return')
returns.addEventListener('click', function(){
    window.location.href = "./index.html";

});







// object of the data not sure if i need this
let blogsarray = []


const blogdata = {
    username: window.localStorage.getItem("username"),
    title: window.localStorage.getItem("title"),
    content: window.localStorage.getItem("content")
}  
test = JSON.parse(localStorage.getItem(`blogs`))

    do{
        if (test === null){
            blogsarray.push(blogdata)
            window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
            console.log(blogsarray)
        } else {
            blogsarray = JSON.parse(localStorage.getItem(`blogs`))
            blogsarray.push(blogdata) 
            window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
            console.log(blogsarray)
        }
    }while((blogsarray === null))

ha = "hahahahha"


//function that creates a blogpost

for (i = 0; i < blogsarray.length; i++) {

    console.log(blogsarray.length)

   





    
    const blogindex = blogsarray[i]


    userinput = blogindex['usernme'];
    titleinput = blogindex['title'];
    contentinput = blogindex['content'];


    const post = document.createElement('article')
    document.querySelector('#newblog').appendChild(post)
    post.setAttribute('class', `article${i}`);


    if (blogindex !== null){
        posttitle = document.createElement('h2')
        posttitle.textContent = `${titleinput}`;
        document.querySelector(`.article${i}`).appendChild(posttitle)
    } else{
    }

    if (blogindex !== null){
        postcontent = document.createElement('p')
        postcontent.textContent = `${contentinput}`;
        document.querySelector(`.article${i}`).appendChild(postcontent)
    } else{
    }

    if (blogindex !== null){
        postuser = document.createElement('h3')
        postuser.textContent = `Blog written by: ${userinput}`;
        document.querySelector(`.article${i}`).appendChild(postuser)
        
    }else {
    }
    
    document.querySelector('#newblog').appendChild(post)
    document.querySelector(`.article${i}`).appendChild(posttitle)
    document.querySelector(`.article${i}`).appendChild(postcontent)
    document.querySelector(`.article${i}`).appendChild(postuser)
}




































// initial()
// // storeblogs()



// console.log(blogsarray)

// function initial() {
    
//     do{
//         if (blogsarray === null){
//             blogsarray = blogdata
//             window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
//             break
//         } else {
//             blogsarray = JSON.parse(localStorage.getItem(`blogs`)) 
//             break;
//     }
//     }while((blogsarray === null))

// }


// console.log(blogsarray)


// //function that creates a blogpost
// function postblog(){
//     let userdirect = window.localStorage.getItem("username")
//     let titledirect = window.localStorage.getItem("title")
//     let contentdirect = window.localStorage.getItem("content")

//     const post = document.createElement('article')
//     document.querySelector('#newblog').appendChild(post)
//     post.setAttribute('class', 'titleclass');


//     if (titledirect !== null){
//         posttitle = document.createElement('h2')
//         posttitle.textContent = `${titledirect}`;
//         document.querySelector('.titleclass').appendChild(posttitle)
//     } else{
//     }

//     if (contentdirect !== null){
//         postcontent = document.createElement('p')
//         postcontent.textContent = `${contentdirect}`;
//         document.querySelector('.titleclass').appendChild(postcontent)
//     } else{
//     }

//     if (userdirect !== null){
//         postuser = document.createElement('h3')
//         postuser.textContent = `Blog written by: ${userdirect}`;
//         document.querySelector('.titleclass').appendChild(postuser)
        
//     }else {
//     }
    
//     document.querySelector('#newblog').appendChild(post)
//     document.querySelector('.titleclass').appendChild(posttitle)
//     document.querySelector('.titleclass').appendChild(postcontent)
//     document.querySelector('.titleclass').appendChild(postuser)
// }



// function storeblogs() {
//     blogsarray.push(blogdata)
//     window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
// }











// const newblog = document.querySelector('#newblog');


// function renderblogs() {
//     newblog.innerHTML = '';
//     for (let i =  0; i < blogs.length; i++) {
//         const blog = blogs[i]

//         const article = document.createElement('article');
//         article.textContent = blog;
//         blog.appendChild(article)

//     }



// }


//     renderblogs()
// }




// const blogpost = blogdata;

//   if (blogpost === '') {
//   }
  
//   blogs.push(blogpost);
//   todoInput.value = '';


//   storeblogs();
//   renderblogs();




















// do{
//     let username = window.localStorage.getItem("username")
//     let title = window.localStorage.getItem("title")
//     let content = window.localStorage.getItem("content")

//     const post = document.createElement('article')
//     // document.querySelector('#newblog').appendChild(post)
//     post.setAttribute('class', 'titleclass');


//     if (title !== null){
//         posttitle = document.createElement('h2')
//         posttitle.textContent = `${title}`;
//         // document.querySelector('.titleclass').appendChild(posttitle)
//     } else{
//         break;
//     }

//     if (content !== null){
//         postcontent = document.createElement('p')
//         postcontent.textContent = `${content}`;
//         // document.querySelector('.titleclass').appendChild(postcontent)
//     } else{
//         break;
//     }

//     if (username !== null){
//         postuser = document.createElement('h3')
//         postuser.textContent = `Blog written by: ${username}`;
//         // document.querySelector('.titleclass').appendChild(postuser)
        
//     }else {
//         break;
//     }
    
//     document.querySelector('#newblog').appendChild(post)
//     document.querySelector('.titleclass').appendChild(posttitle)
//     document.querySelector('.titleclass').appendChild(postcontent)
//     document.querySelector('.titleclass').appendChild(postuser)
//     break;

// }while (true)















