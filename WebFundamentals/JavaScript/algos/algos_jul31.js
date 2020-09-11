//7/31/20
/* 
Given an arr and a separator, output a string of every item in the array separated 
by the separator.
The separator should only be between two elements.

join([1, 2, 3], ", ") => "1, 2, 3"
join([4, 5, 6, 7], "* ") => "4*5*6*7"
*/

function separator(arr, S) {
    var newString = "";

    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length - 1) {
            newString += arr[i] + S;
        }

        else {
            newString += arr[i];
        }
    }
    return newString
}
var array = [1, 2, 3];
var S = ", ";
console.log(separator(array, S));



/* 
Array: Second-Largest
Return the second-largest element of an array. Given [42,1,4,8,7] , return 8 . 
If the array is too short or all values are the same, return null .
*/

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (max == arr[0]){
        return null;
    }
    else {
        var pen = arr[0];
    for (var j = 1; j < arr.length; j++) {
        if (pen < arr[j] && arr[j] < max) {
            pen = arr[j];
        }
    }
    return pen;
}      
}
secondLargest([5, 5, 5, 5, 5]);
// secondLargest([5, 3, 4, -1, 8]);

//it works now guys. You can try it


