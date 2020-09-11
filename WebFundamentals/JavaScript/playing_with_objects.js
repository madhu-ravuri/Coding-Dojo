var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//john's age
console.log(users[1].age)

//name of first object
console.log(users[0].name)

//name and age using for loop
for (var i in users) {
    console.log(users[i].name + " - " + users[i].age)
}