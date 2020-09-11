// predict 1
function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

/* predict 1 t diagram
console Hello
*/

// predict 2
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

/* predict 2 t diagram
RESULT1:
console Summing Numbers! num1: is 3, num2 is: 5
sum 8
return 8

RESULT2:
console Summing Numbers! num1 is: 4, num2 is: 7
sum 11
return 11

MAIN CONSOLE:
console 8 11
*/

// predict 3
function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

/* predict 3 diagram
no output because num is undefined and the function is not called
*/