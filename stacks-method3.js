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






























/* Defining Queue operations*/

var queue = (function(array) {
    array = [];
    var reversearray;
    //--Define the max size of the stack
    var MAX_SIZE = 5;

    function isEmpty() {
        if (array.length < 1) console.log("Queue is empty");
    };
    isEmpty();

    return {
        insert: function(ele) {
            if (array.length < MAX_SIZE) {
                array.push(ele)
                reversearray = array.reverse();
                return reversearray;
            } else {
                console.log("Queue Overflow")
            }
        },
        delete: function() {
            if (array.length > 1) {
                //reversearray = array.reverse();
                array.pop();
                return array;
            } else {
                console.log("Queue Underflow");
            }
        }
    }



})()

console.log(queue.insert(5))
console.log(queue.insert(3))
console.log(queue.delete(3))