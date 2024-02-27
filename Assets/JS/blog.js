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







// array for all blogpost data
let blogsarray = []


const blogdata = {
    username: window.localStorage.getItem("username"),
    title: window.localStorage.getItem("title"),
    content: window.localStorage.getItem("content")
}  
test = JSON.parse(localStorage.getItem(`blogs`))




let ha = "hahahahahhah popped"


    // saves all blogs
    do{
        // creates the initial post and stores it in local storage,
        //then does a repeat check of all adition posts before storing them
        if (test === null){
            blogsarray.push(blogdata)
            window.localStorage.setItem('blogs', JSON.stringify(blogsarray))
            console.log("initial post")
            break;
        } else{
            //idk how i managed but this section stops a page reresh 
            //from reposting the last blog in the array
            blogsarray = JSON.parse(localStorage.getItem(`blogs`))
            console.log(blogsarray.length)
            if(blogsarray.length >= 1){
                const blogindexrepeat = blogsarray[blogsarray.length -1]
                console.log(blogindexrepeat)
                repeatcontentinput = blogindexrepeat['content'];
                if (blogdata['content'] === repeatcontentinput){
                    console.log(ha)
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

    // if(i !== 0){
    //     const blogindexrepeat = blogsarray[i - 1]
    //     console.log(blogindexrepeat)
    //     repeatcontentinput = blogindexrepeat['content'];
    //     if (blogdata['content'] === repeatcontentinput){
    //          console.log(ha)
    //         blogsarray.pop()
    //         console.log(blogsarray)
    //         break;
    //     }
        
    // }




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



