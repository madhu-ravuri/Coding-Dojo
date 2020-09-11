// (1) GIVEN
console.log(hello);                                   
var hello = 'world';           
// will be read in that order

// predicted output:
    // undefined


// (2) GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// function test()
// test()

// predicted output:
    // magnet

    
// (3) GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan
// function print()
// console.log(brendan);

// predicted output:
    // only okay <-- wrong bc function was never called
    // super cool


// (4) GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// console.log(food);
// eat();

// predicted output:
    // chicken
    // half-chicken


// (5) GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean = function() hoisted to top
// mean();
// console.log(food);
// console.log(food);

// predicted output:
    // error bc function invoked before it was defined


// (6) GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre = "disco"
// console.log(genre)
// function rewind()
// rewind();
// console.log(genre)

// predicted output:
    // disco <-- wrong, it was undefined because hoisted
    // rock
    // r&b
    // disco


// (7) GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose"
// console.log(dojo)
// function learn()
// learn()
// console.log(dojo)

// predicted output:
    // san jose
    // seattle 
    // burbank
    // san jose


// (8) GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65));
// function makeDojo(name, students)
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students)

// predicted output:
    // dojo = { hiring : true, name : Chicago, students : 65 }
    // closed for now <-- returned error because dojo is a constant and cannot be changed to a string