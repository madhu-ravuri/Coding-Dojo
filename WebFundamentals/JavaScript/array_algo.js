var testArr = [6,3,5,1,2,4];

function Print(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        console.log(arr[i]);
        console.log(sum);
    }
}
Print(testArr);

function Multiply (arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = i * arr[i];
    }
    return arr;
}

console.log(Multiply(testArr));