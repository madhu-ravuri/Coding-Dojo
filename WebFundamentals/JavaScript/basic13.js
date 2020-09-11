basic13.js

function PrintOdds1to255() {
    
    for (var i=1; i <= 255; i = i+2) {
        console.log(i);
    }
}
PrintOdds1to255();

// 3
function PrintIntsAndSum0To255() {
    var sum = 0;

    for (var i=0; i <=255; i++) {
        console.log(i);

        sum = sum + i;
        console.log(sum);
    }
}
PrintIntsAndSum0To255();

// 4
function PrintArrayVals(arr) {

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// 5
function PrintMaxOfArray(arr) {

    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
}

// 6
function PrintAverageOfArray(arr) {

    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    var avg = sum / arr.length;
    return avg;
}
array = [1, 2, 3, 4, 5];
console.log(PrintAverageOfArray(array));

// 7
function ReturnOddsArray1To255() {
    var arr;

    for (var i = 0; i <= 255; i++) {
        if (i % 2 != 0){
        arr.push(i);
        }
    }
    return arr;
}

// 8
function SquareArrayVals(arr) {
    var sum;

    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] * arr[i];
        arr[i] = sum;
    }
    return(arr);
}

// 9
function ReturnArrayCountGreaterThanY(arr, y) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            console.log([arr[i]);
        }
    }
}