//let
//let is used to  declare a variable in the scope of the block, statement or expression where it is used.
//Let keyword allows you to create variables that are local to the function and not accessible outside of it.
// This means that if we try to access a variable declared with let from outside the block,it shows an array at console

{
    let username = "yogesh";
    console.log(username);
}//here the user name is let and it is  only available inside this block.
console.log(username); //undefined- because the value is not accessible outside of the block


//var
//var is used to declare a variable  globally ,or locally (inside a function).
// It's also used to update the value of a global variable from within a function.
// It is used when we want to make a variable globally accessible within the function.
{ var age = 25; }//here age is declared in scope of block but it is declared by the var keyword so that it can be access out side the block
console.log(age);

//const 
//const keyword is use to make constant variable 
//so that we can't change/or redeclared the value of the this kind variables
const PI=3.14;
PI=2.56; //this will give an error as we cannot change the value of const variable