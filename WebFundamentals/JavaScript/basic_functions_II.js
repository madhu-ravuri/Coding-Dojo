//1
function makeItBig(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

//2
function highLow(arr) {
    var high = arr[0];
    var low = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }

        else if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}

//3
function oddLast(arr) {
    console.log(arr[arr.length - 1]);

    var firstOdd;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i]
            break;
        }
    }
    return firstOdd;
}

//4
function doubleVision(arr) {
    var doubleArr;

    for (var i = 0; i < arr.length; i++) {
        doubleArr[i] = arr[i] * 2;
    }

    return doubleArr;
}

//5
function countPos(arr) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

//6
function rows(arr) {
    var odds = 0;
    var evens = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evens += 1;

            if (evens % 3 == 0) {
                console.log("Even more so!");
            }
        }

        else {
            odds = + 1;

            if (odds % 3 == 0) {
                console.log("That is odd!");
            }
        }
    }
}

//7
function increment(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}


//8
function lengths(arr) {
    var lengthArr = [];

    for (var i = 1; i < arr.length; i++) {
        lengthArr[i] = arr[i - 1].length;
    }

    lengthArr[0] = arr[0];
    return lengthArr;
}

//9
function addSeven(arr) {
    var arrSeven = [];

    for (var i in arr) {
        arrSeven[i] = arr[i] + 7;
    }

    return arrSeven;
}

//10
function reverse(arr) {
    var temp;
    var spot = arr.length - 1;

    for (var i in arr) {
        temp = arr[i];
        arr[i] = arr[spot];
        arr[spot] = temp;

        spot = spot - 1;

        if (i > spot || i == spot) {
            break;
        }
    }
}

//11
function returnNeg(arr) {
    var negArr = [];

    for (var i in arr) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
            negArr.push(arr[i]);
        }

        else {
            negArr.push(arr[i]);
        }
    }

    return negArr;
}

//12
function hungry(arr) {
    var foodCount;
    
    for (var i in arr) {
        if (arr[i].equals("food")) {
            console.log("yummy");
            foodCount += 1;
        }
    }

    if (foodCount == 0) {
        console.log("I'm hungry")
    }
}

//13
function centerSwap(arr) {
    var temp;
    var spot = arr.length - 1;

    for (var 1 = 0; i < arr.length; i+=2) {
        temp = arr[i];
        arr[i] = arr[spot];
        arr[spot] = temp;

        spot = spot - 2;

        if (i > spot || i == spot) {
            break;
        }
    }
}

//14
function changeArr(arr, num) {
    var arrMultiply = [];

    for (var i in arr) {
        arrMultiply[i] = arr[i] * num;
    }

    return arrMultiply;
}