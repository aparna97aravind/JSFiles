run(function *()
{
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    //console.log("1.",url, "DONE");
    const response = yield fetch(url);
    //console.log("2.",response,"DONE");
    const post =  yield response.json();
    //console.log("3.",post,"DONE");
    const title =  post.title;
    //console.log("4.",title,"DONE");
    console.log('Title', title);
})

function run(generator)
{
    const genobj = generator(); //creating a generator object
    const invoking= genobj.next().value;  //line 4 yield-fetch(url) => promise
    invoking //resolving promises
    .then(result=>{
        return genobj.next(result).value; //line 6 yield-pause
    })
    .then(response => {
        genobj.next(response).value //till completion
    })
}
