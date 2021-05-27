//1. function that takes an argument and returns that argument.


function identity(value)
{
    return(value);
}
identity(3);

//2.two binary functions, add and mul, that take two numbers and return their sum and product
 
function add(num1,num2)
{
    return num1+num2;
}
add(3,4);

function mul(num1,num2)
{
    return num1*num2;
}
mul(4,3);


//3.function that takes an argument and returns a function that returns that argument.
function identifyf(val)
            {
         return function() { return val; } ;
            }
const idf=identifyf(val);
idf(); //gives the val

//4.a function that adds from two invocations
function addf(x){
    return function(y){
        return x+y;
    }
}
addf(3)(4);

//5.a function that takes a binary function and makes it callable with two invocations
function applyf(biFunc) {
    return function(x) {
      return function(y) {
        return biFunc(x, y);
      };
    };
  }
  
  addf = applyf(add); // add is binary function
  addf(3)(4); // x is 3 and y is 4
  applyf(mul)(5)(6); 




//6. function that takes a function and an argument, and returns a function that cans supply a second argument


function curry(func, x) {
    return function(y) {
      return func(x, y);
    };
  }
const add3=curry(add,3); // x is 3
add3(4); // y gets value 4 add function is called so 3+4 =7

//curry(mul,3) // func is mul and x is 3
curry(mul,3)(4); // y is 4. gives 3 *4 =12

//7.without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function
//1.
const inc =curry(add,1);
inc(5); // add 1 (x value) + 5(y value)
inc(inc(5)); // 1(x value) + 6 (inc(5) is y)

//2.
const inc =applyf(add)(1); // x arg is 1 
inc(5); // y arg is 5
inc(inc(5)); // x is 1 and y is inc(5)

//3
const inc=addf(1);
inc(5); // x arg is 1 and y arg is 1
inc(inc(5)); // 7.

//8.Write  methodize, a function that converts a binary function to a method.

function methodize(func)
{
    return function(x){

    }
}




//9.write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.
 
function twice(func)
{
    return function(val){
        return func(val,val);
    
}
var double = twice(add); // function is add and twice is stored in double.
double(11); //22

var square = twice(mul); // twice of func mul stores in square
square(11); // 121


//10.write a function composeu that takes two unary functions  and returns a unary function that can ball them both
function composeu(func1,func2)
{
    return function(x){
        return func2(func1(x));
    }
}
composeu(double, square)(3); // 36