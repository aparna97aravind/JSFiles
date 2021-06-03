function fakeAjax(url, cb)
{
    var fakeResponses =
    {
      "file1": "The first text",
      "file2": "The middle text",
      "file3": "The last text",
    }
    var randomDelay = (Math.round(Math.random() *1E4) % 8000 + 1000)
    console.log("Requesting: " + url);

    setTimeout(function()
    {
      cb(fakeResponses[url]);
    }, randomDelay);
}
function getFile(file)
{
    return new Promise(function(resolve) {fakeAjax(file,resolve);});
} 
const file1 = getFile('file1');
const file2 = getFile('file2');
const file3 = getFile('file3');

file1
.then((data) => {
    console.log(file1);
    return file2;
})
.then(() => {
   console.log(file2);
   return file3;
})
.then(() => {
   console.log(file3);
   console.log("complete");
})
.catch(() => {
    console.log("Error!!");
});