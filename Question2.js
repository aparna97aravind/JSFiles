function pascalTrio(rowNum){
    let result=[]; // array for storing result
    let output = "";
    if (rowNum === 0) 
    {
        console.log("Enter a POSITIVE number");
    }
    
    for(let row=0; row<rowNum; row++)//outerloop for n lines
    {
        let array=[];
        let str = "";
        for(let col=0; col<=row; col++) 
        {
            if(col===0 || col===row) //for ones at both ends
            array.push(1);
            else
            {
                array.push(result[row-1][col-1]+result[row-1][col]); //addition
            }
        }
        result.push(array);
        for(let i=1; i<=rowNum-row;i++) // for spaces
        {   
          output+=" ";
        }
        for(let j=0;j<array.length;j++) 
        {
          str= "  "+ array[j] +str;
        }
        console.log(`${output} ${str}`);
        output="";
    }
}
pascalTrio(4);