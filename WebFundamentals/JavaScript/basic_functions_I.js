//1
function Return1to255() {
    var arr
    
    for (var i=0; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}
Return1to255();

//2
function getEven1000() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if  (i  %  2 ==  0) {
            sum = sum + i;
        }
    }
    return sum;
}

getEven1000();

//3
function sumOdds5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if  (i  %  2 !=  0) {
            sum = sum + i;
        }
    }
    return sum;
}

sumOdds5000();

//4
function arrSum (arr) {
    var sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

array = [1, 2, 4, 5];
arrSum(array);

//5 
function findMax(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
}

findMax(array);

//6
function findAvg(arr) {
    var avg;
    var sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    avg = sum / arr.length;
    return avg;
}

array = [1,3,5,7,20];
console.log(findAvg(array));


//7
function arrayOdd(arr) {
    var newArr;

    for (var i = 1; i <= 50; i++) {
        if (arr[i] % 2 != 0) {
            newArr.push(arr[i]);
        }
    return newArr;
    }
}


//8
function greaterY(arr, Y) {
    
    var count= 0;
    for (var i = 0; i , arr.length; i++);{
        if(arr[i] > Y){
            count++;
        }
    }
    console.log(count);
    return count;
}

//9
function square(arr) {
    for (var i = 0; i, arr.length; i++); {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}


//10
function noNegs(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
        return arr;
    }
}

//11
function MaxMinAvg(arr) { 
    var max = arr[0];
    var min = arr[0];
    var avg;
    var sum = 0;
    var maxMinAvg;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

        else if (arr[i] < min) {
            min = arr[i]
        }

        sum = arr[i] + sum;
    }
    avg = sum / arr.length;
    
    maxMinAvg = [max, min, avg];
    return maxMinAvg;
}

//12
function swap(arr) {
    var temp;

    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length-1] = temp;

    return arr;
}

//13
function replaceNegs(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
        return arr;
    }
}