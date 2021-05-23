function distinctElemCount(array)
{
    for(let i=0 ;i<array.length; i++)
    {
        let count =0;
        for(let j=0 ; j<array.length; j++)
        {
            if (array[i] === array[j])
            {
                count++;
            }
        }
        console.log(`${array[i]} - ${count}`)
        console.log("\n");
    }

}
distinctElemCount([10,3,5,1,2,5,3,9,1]);
