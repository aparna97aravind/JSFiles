function numberPyramid(linenum) //function definition
{ 
    let output = "";
    for (let line = 1; line <= linenum; line++) //outerloop
    {   
        let printnum = line; //copying to a temp variable to print the number
        for (let space = 1; space <= linenum -line ; space++) //spaceloop
        {
            output = output + " ";
        }


        for (let i = 1; i <= line ; i++) //innerloop1 
        {
           output = output + printnum ;
            printnum++;
        }
          printnum= printnum-2;
          
        for (let i = 1; i < line; i++) //innerloop2
        {
            output =output + printnum ;
            printnum--;
        }
          output = output + "\n" // for newline
    }
     console.log(output); //to print
}
numberPyramid(5); //functioncall