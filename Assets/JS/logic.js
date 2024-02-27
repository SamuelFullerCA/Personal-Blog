// condition to check weather dark mode is on on alternate page
// const switcher = document.querySelector('#switchmode')
// let mode = "light"
// while(true){
// if(localStorage.getItem('darkmodeon') === 'true'){
//     mode = 'dark';
//     document.body.setAttribute('class', 'dark-mode');
//     document.querySelector('#switchmode').checked = true;
//     // document.querySelector('#switchmode').setAttribute('style', 'transition: .0s;')
//     break;
//  } else{
//     mode = 'light';
//     document.body.setAttribute('class', 'light-mode');
//     break;
//     }
// }
// // function to set dark mode via slider
// switcher.addEventListener ('click', function(){
//     if (mode === 'light') {
//         mode = 'dark';
//         localStorage.setItem('darkmodeon', true);
//         document.body.setAttribute('class', 'dark-mode');
//     } else {
//         mode = 'light';
//         localStorage.setItem('darkmodeon', false);
//         document.body.setAttribute('class', 'light-mode');
//     }
// });


// // function to return to previos page
// const returns = document.querySelector('#return')
// returns.addEventListener('click', function(){
//     window.location.href = "./index.html";

// });




// // object of the data not sure if i need this
// let blogsarray = [];

//     blogsarray.push(JSON.parse(localStorage.getItem(`blogs`)))

// const blogdata = {
//     username: window.localStorage.getItem("username"),
//     title: window.localStorage.getItem("title"),
//     content: window.localStorage.getItem("content")
// }

// blogsarray.push(blogdata)

// console.log(blogdata)

// window.localStorage.setItem('blogs', JSON.stringify(blogsarray))




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





// console.log(blogsarray)




















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


// function initial() {
//     blogs = JSON.parse(localStorage.getItem(`blogs`))
// }

//     renderblogs()
// }

// function storeblogs() {
//     localStorage.setItem('blogs', JSON.stringify(blogs))
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















