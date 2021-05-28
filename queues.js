function queue(size) // function queue with size argument passed.
{ 
    this.size = size;
    this.array = []; 
    this.rear=0;
    this.front=0;



    this.add = function(item)     //enqueue
    {
            if(this.rear ===  this.size || this.size < 0 )       //isFull condition
            {
                console.log("QUEUE full!!! Cannot Insert elements. Your array is");
                for(let i=0;i<this.size;i++)
                {
                    console.log(this.array[i]);          //display array
                }
                
            }
            else
            {
                if(this.front === 0 && this.rear === 0) // first insertion
                { 
                    console.log("first Insertion !!");
    
                    this.array[this.rear] =item;        //element added 
                    console.log(`${item} is added to ${this.rear}th index`);
                    this.rear++;
                    this.front++;  //increment rear and front
                    return (`Rear =  ${this.rear-1}`);
    
                }
                else{
                    this.array[this.rear] =item;        //element added 
                    console.log(`${item} is added to ${this.rear}th index`);
                    this.rear++;  // increment rear
                    return (`Rear=  ${this.rear-1}`);
                }
             }
    }  
                     
   this.remove= function()     //dequeue
    {
            if(this.front-1 === this.rear) //isEmpty condition
            {
                console.log("QUEUE empty!!! Cannot Remove elements");            
            }
            else
            {
                let removeQItem= this.array[this.front-1];        // item removed stored in a variable and returned       
                console.log(`${removeQItem} is removed from the Queue`);
                this.front++;                        //Increment front to get next data
    
                return (` removed element ${removeQItem} at position ${this.front-1}`);
             }
    
    }    
}

