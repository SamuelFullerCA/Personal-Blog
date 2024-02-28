
// function to return to the form page
const returns = document.querySelector('#return')
returns.addEventListener('click', function(){
    window.location.href = "./index.html";
});

//array for all blogpost data
let blogsarray = []

//object for latest submited blog
const blogdata = {
    username: window.localStorage.getItem("username"),
    title: window.localStorage.getItem("title"),
    content: window.localStorage.getItem("content")
}  
test = JSON.parse(localStorage.getItem(`blogs`))

//adds latest sumited blog to an array of all previous submited blogs
do{
        // creates the initial post and stores it in local storage, then does a repeat check of all adition posts before storing them
        if (test === null){
            blogsarray.push(blogdata)
            window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
            console.log("initial post")
            break;
        } else{
            //idk how I managed but this section stops a page reresh from reposting the last blog in the array
            blogsarray = JSON.parse(localStorage.getItem(`blogs`))
            if(blogsarray.length >= 1){
                const blogindexrepeat = blogsarray[blogsarray.length -1]
                console.log(blogindexrepeat)
                repeatcontentinput = blogindexrepeat['content'];
                if (blogdata['content'] === repeatcontentinput){
                    console.log("Cut repeated post on page refresh")
                    break;
                    }
                }
            // collects the array of blogs, adds the new blog, and stores the array with new blog
            blogsarray = JSON.parse(localStorage.getItem(`blogs`))
            blogsarray.push(blogdata) 
            window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
            console.log('after initial post')
            break;
        }
}while((blogsarray === null))

//for loop that creates all the posts
for (i = 0; i < blogsarray.length; i++) {

    const blogindex = blogsarray[i]

    userinput = blogindex['username'];
    titleinput = blogindex['title'];
    contentinput = blogindex['content'];

    const post = document.createElement('article')
    document.querySelector('#newblog').appendChild(post)
    post.setAttribute('class', `article${i}`);

    if (blogindex !== null){
        posttitle = document.createElement('h2')
        posttitle.textContent = `${titleinput}`;
        document.querySelector(`.article${i}`).appendChild(posttitle)
    }

    if (blogindex !== null){
        postcontent = document.createElement('p')
        postcontent.textContent = `${contentinput}`;
        document.querySelector(`.article${i}`).appendChild(postcontent)
    }

    if (blogindex !== null){
        postuser = document.createElement('h3')
        postuser.textContent = `Blog written by: ${userinput}`;
        document.querySelector(`.article${i}`).appendChild(postuser)
        
    }
    
    document.querySelector('#newblog').appendChild(post)
    document.querySelector(`.article${i}`).appendChild(posttitle)
    document.querySelector(`.article${i}`).appendChild(postcontent)
    document.querySelector(`.article${i}`).appendChild(postuser)
}

// function to copy email on click
const copyemail = document.querySelector('#email')
copyemail.addEventListener('click', function(){
    let copytext = "samuelfullerca@gmail.com"
    navigator.clipboard.writeText(copytext);
    alert("Email copied to clipboard!")
})










  
