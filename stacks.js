function stack(size)                                               // function stack with size argument passed.
{
    this.size = size;
    this.array = [];
    this.top = 0;

    this.push = function(element)                                  //push function
    {
        if(this.top  ===this.size || this.size < 0 )           //isFull condition
        {
            console.log("stack full!!! Cannot Insert elements. Your array is");
            for(let i=0;i<this.size;i++)
            {
                console.log(this.array[i]);               //display array
            }
        }
        else
        {
            this.array[this.top] =element;                    //element added to the top
            console.log(`${element} is added to ${this.top}th index`);
            this.top++;                                       //top++
            return (`top of stack =  ${this.top-1}`);
        }
    }

    this.pop = function()                                     //pop function
    {
        if(this.top === 0)                                  //isEmpty condition
        {
            console.log("stack empty!!! Cannot Remove elements");            
        }
        else
        {
            let removeElement= this.array[this.top-1];        // item removed stored in a variable and returned       
            console.log(`${removeElement} is removed from the stack`);
            this.top--;                                       //decrement top
            return (`removed Element ${removeElement} from position ${this.top}`);
        }
    }
}