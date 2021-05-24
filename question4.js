let array =[10,3,5,1,2,5,3,9,1];
let outputArr= []; //array storing distinct elements
let count =0; //to calculate uniqueness
let flag =false; // to find value is repeating

    for(let i=0 ;i<array.length; i++)
    {
      
        for(let j=0 ; j<outputArr.length; j++)
        {
            if (array[i] === outputArr[j])
            {
                flag= true; //duplication
            }
            
        }
        count ++;
        if(count===1 && flag ===false) //distinct element
        {
            outputArr.push(array[i]);
        }
        flag =false;
        count =0;
        
        
    }
    for( let index=0;index<outputArr.length ;index++) // to calcute the repeating count
    {
      let val=0;
      for(let index2=0; index2<array.length; index2++)
      {
        if(outputArr[index] === array[index2])
        {   val++;
           
        }
      }
      
      console.log(`${outputArr[index]}- ${val}`);
      
    }
    
    