// predict 1
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

/* predict 1 t-diagram
arr [8,6,7,5,3,0,9]
i 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
console: 8 6 7 5 3 0 9  */ 

// predict 2
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

/* predict 2 t-diagram
arr [7,3,8,4,2,0,1]
i 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
arr[i] 7 -> 3 -> 8 -> 4 -> 2 -> 0 -> 1
console That is odd! -> That is odd! -> 8 -> 4 -> 2 -> 0 -> That is odd!
*/

// predict 3
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

/* predict 3 t-diagram
arr [1,3,8,-5,0,-2,4,-1] --> [-1, ...] --> [-1, -3, ...] --> [-1, -3, -8, ...] --> [-1, -3, -8, 5, ...] --> [-1, -3, -8, 5, "Zero",...] --> [-1, -3, -8, 5, "Zero", 2,...] --> [-1, -3, -8, 5, "Zero", 2, -4, ...] --> [-1, -3, -8, 5, "Zero", 2, -4, 1]
newArr [] --> [-5, ] --> [-5, -2] --> [-5, -2, -1]
i 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
arr[i] 1 -> 3 -> 8 -> -5 -> 0 -> -2 -> 4 -> -1
console.log(arr) : [-1, -3, -8, 5, "Zero", 2, -4, 1]
console.log(newArr) : [-5, -2, -1]
*/