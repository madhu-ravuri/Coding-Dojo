//4
function secondLast(arr) {

    for (var i in arr) {
        if (arr.length > 2) {
            return arr[arr.length - 2];
        }

        else {
            return null;
        }
    }
}
array = [42, true, 4, "Liam", 7];
console.log(secondLast(array));

//5
function returnNth(arr, N) {

    for (var i in arr) {
        if (arr.length > N) {
            return arr[arr.length - N];
        }

        else {
            return null;
        }
    }
}

array = [5,2,3,6,4,9,7];
num = 3
console.log(returnNth(array, num));

//6
function secLarge(arr) {
    var max;
    var second;

    if (arr.length < 2) {
        return null;
    }
    else {
        if (arr[0] > arr[i]) {
            max = arr[0];
            second = arr[i];
        }
        else {
            max = arr[i];
            second = arr[0];
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            else if (arr[i] < max && arr[i] > second) {
                second = arr[i];
            }
        }
    }
  return second;  
}

function doubleTrouble(arr) {
    var doubleArr = [];

    for (var i in arr) {
        doubleArr.push(arr[i]);
        doubleArr.push(arr[i]);
    }

    for (var i in doubleArr) {
        arr[i] = doubleArr[i];
    }
}