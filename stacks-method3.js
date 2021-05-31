function stack(size)
{
    let top = 0;
    let array = [];

    function push(element)                          //push function
    {
        if(top === size || size < 0)                //isFull condition
        {
            return "Stack full!!! Cannot Insert elements";
        }
        else
        {
            array[top] = element;
            top++;
        }
    }
    
    function pop()                                  // pop function 
    {
        if(top <= 0)                                //isEmpty condition
        {
            console.log("stack empty!!! Cannot Remove elements");
        }
        else
        {
            let removeElement = array[top-1];       // item removed stored in a variable and returned
            array.splice(-1,1)
            top--;
            return (removeElement);
        }
    }
    return Object.freeze({ push, pop });
}