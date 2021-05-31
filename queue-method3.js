function queue(size)                                   // function queue with size argument passed.
{
    let array = [];
    let rear = 0;
    let front = 0;
    
    function add(element)                              //enqueue
    {
        if(rear ===  size || size < 0 )                //isFull condition
        {
            console.log("QUEUE full!!! Cannot Insert elements");
        }
        else
        {
            if(front === 0 && rear === 0)              // first insertion
            {
                array[rear] = element;                 //element added 
                rear++;
                front++;                               //increment rear and front
            }
            else
            {
                array[rear] = element;                 //element added 
                rear++;                                // increment rear
            }
        }
    }
    
    function remove()                                  //dequeue
    {
        if(front-1 === rear)                           //isEmpty condition
        {
            console.log("QUEUE empty!!! Cannot Remove elements");
        }
        else
        {
            let removeElement = array[front-1];        // item removed stored in a variable and returned
            array.splice[0,1];
            front++;                                   //Increment front to get next data
            return (removeElement);                    // returning element 
        }
    }
    return Object.freeze({ add, remove });             //freezing object
}