function push(arr, num) {
    arr[arr.length] = num;
}

function pushFront(arr, num) {

    for (var i = 0; i < arr.length; i++) {
        arr[i + 1] = arr[i];
    }
    arr[0] = num;
    return arr;
}

array = [4, 7, 3, 6];
num = 2;
pushFront(array, num);
console.log(array[0]);
