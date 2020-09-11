function reverseArray(arr) {
    var topPossition = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {

        var temp = arr[i];
        arr[i] = arr[topPossition];
        arr[topPossition] = temp;
        topPossition = topPossition - 1;

        if (i > topPossition || i == topPossition) {
            break;
        }
    }
}
var userArray = [1, 2, 3, 4]
reverseArray(userArray);



function concat(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    for (var i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}

var userArray = [1, 2, 3, 4];
var secArray = [5, 6, 7, 8];
concat(userArray, secArray);


function reverseString(string) {
    var reverse = "";
    var temp;

    for (var i=string.length - 1; i >= 0; i--) {
        reverse += string[i]
    }
    console.log(reverse);
}

string = "hello";
reverseString(string);