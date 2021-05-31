function stack(size)                                               // function stack with size argument passed.
{
    this.size = size;
    this.array = [];
    this.top = 0;

    this.push = function(element)                                  //push function
    {
        if(this.top  === this.size || this.size < 0 )           //isFull condition
        {
            console.log("Stack full!!! Cannot Insert elements");
        }
        else
        {
            this.array[this.top] = element;                    //element added to the top
            this.top++;                                       //top++
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
            let removeElement = this.array[this.top-1];        // item removed stored in a variable and returned 
            this.top--;
            this.array.slice(0,top);                                       //decrement top
        }
    }
}