function queue(size) // function queue with size argument passed.
{
    this.size = size;
    this.array = [];
    this.rear = 0;
    this.front = 0;



    this.add = function(item)     //enqueue
    {
        if(this.rear ===  this.size || this.size < 0 )       //isFull condition
        {
            console.log("QUEUE full!!! Cannot Insert elements");
        }
        else
        {
            if(this.front === 0 && this.rear === 0) // first insertion
            {
                this.array[this.rear] = item;        //element added 
                this.rear++;
                this.front++;  //increment rear and front
            }
            else
            {
                this.array[this.rear] = item;        //element added 
                this.rear++;  // increment rear
            }
        }
    }


    this.remove = function()     //dequeue
    {
        if(this.front-1 === this.rear) //isEmpty condition
        {
            console.log("QUEUE empty!!! Cannot Remove elements");
        }
        else
        {
            let removeElement = this.array[this.front];        // item removed stored in a variable and returned
            this.array.splice(0,1);
            this.front++;                        //Increment front to get next data
        }
    }
}