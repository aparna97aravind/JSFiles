function stackQueue (size) {                // size is the parameter passed
    //let stack = Object.create(stack.prototype);
    this.array=[];         
    this.top=0;
    this.rear=0;
    this.front=0;
    this.size= size;

    //return stack;
}
stackQueue.prototype.push= function(item)     //push function
{
        if(this.top  ===  this.size) //isFull condition
        {
            console.log("stack full!!! Cannot Insert elements. Your array is");
            for(let i=0;i<this.size;i++)
            {
                console.log(this.array[i]);          //display array
            }
            
        }
        else
        {
            this.array[this.top] =item;        //element added to the top
            
            console.log(`${item} is added to ${this.top}th index`);
            
            this.top++;  //top++
            return (`top of stack =  ${this.top-1}`);
         }
}  

stackQueue.prototype.pop= function()     //pop function
{
        if(this.top === 0) //isEmpty condition
        {
            console.log("stack empty!!! Cannot Remove elements");            
        }
        else
        {
            let removeItem= this.array[this.top-1];        // item removed stored in a variable and returned       
            console.log(`${removeItem} is removed from the stack`);
            this.top--;                        //decrement top

            return (`Element removed = ${removeItem} top of stack is ${this.top-1}`);
         }
}    
  

const stack1= new stackQueue (20);


////////////////////////////////////QUEUE////////////////////////////////////

stackQueue.prototype.add= function(item)     //enqueue
{
        if(this.rear ===  this.size)                 //isFull condition
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
                return (`Rear value of queue=  ${this.rear-1}`);

            }
            else{
                this.array[this.rear] =item;        //element added 
                console.log(`${item} is added to ${this.rear}th index`);
                this.rear++;  // increment rear
                return (`top of Queue =  ${this.rear-1}`);
            }
         }
}  
                 
stackQueue.prototype.remove= function()     //dequeue
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

            return (`Element removed = ${removeQItem} at position ${this.front-1}`);
         }
}    

const que1 =new stackQueue (20);