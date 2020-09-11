
function remove(arr, num) {
    var newVal;

    newVal = arr[num];
    
    for (i = num; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    
    console.log(arr);
    return newVal;
}

index = 3;
array = [6, 7, 8, 9, 5];
console.log(remove(array, index));


function minFront (arr) {
    var minVal = arr[0];
    var minPos;
    var tempArr = [];

    for (var i in arr) {
        if (arr [i] < minVal ) {
            arr[i] = minVal;
            minPos = i;
        }
    }

    for (i = minPos; i < arr.length-1; i++) {
        tempArr[i] = arr[i+1];
    }
    tempArr.length = arr.length-1;
    console.log(tempArr);




}

