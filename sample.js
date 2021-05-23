function onePyramid(rows)
{ 
    let output = " ";
    for (let rowCount = 1; rowCount <= rows; rowCount++) //outerloop
    {
        for (let space = 1; space <= rows - rowCount; space++) //spaceloop
        {
            output = output + " ";
        }
        for (let count = 0; count < 2 * rowCount - 1; count++) //innerloop
        {
            output = output + "1";
        }
            output = output + "\n" // for newline
     }
     console.log(output); //to print
}
onePyramid(5); //functioncall