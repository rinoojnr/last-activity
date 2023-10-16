// var posts =  [{title:'POST1'},{title:'POST2'}]

// function printPost(){
//     posts.forEach((post)=>console.log(post.title))
// }


// function createPost(post){
//     // return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             posts.push(post)
//             // res()
//         },2000)
//     // })
    
    
// }

// createPost({title:'POST3'}).then(printPost)
// printPost()
const promise1 = function createPost(){
    posts.push({title:'POST3'})
}
const promise2 = function printPost(){
    posts.forEach((post)=>{
        console.log(post.title)
    })
}
const Promise3 =function deletePost(){
    posts.pop()
}

const Promise4 =function lastActivity(){
    var currendDate = new Date();
    console.log(currendDate);
}
Promise.all([promise1(),Promise3(),promise2(),Promise4()])
