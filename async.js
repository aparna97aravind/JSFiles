function fakeAjax(url,cb)
{
    var fake_responses =
    {
      "file1": "The first text",
      "file2": "The middle text",
      "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;
    console.log("Requesting: " + url);
    setTimeout(function()
    {
        cb(fake_responses[url]);
    },randomDelay);
}

function getFile(file)
{
    fakeAjax(file, function(text)
    {
        fileHandling(file,text); 
    }); 
}

function fileHandling(file,fileval) 
{
    var filearr = ["file1","file2","file3"];
    store[file] = fileval;                   //copying content to file
    for (let i = 0; i < filearr.length; i++) //Display the contents
    {   
        if (filearr[i] in store)
        {
            if(typeof(store[filearr[i]]) === "string" )
            {
                console.log(`${store[filearr[i]]}`);
                store[filearr[i]] = 4;       // setting the typeof the file content to number
            }
        }
        else
        {
            return;
        }
    }
    console.log("Complete!");
}
var store = {}; // an empty object created to store the values
getFile("file1");
getFile("file2");
getFile("file3"); 