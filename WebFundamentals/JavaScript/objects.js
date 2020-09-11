grades = {"Kermit" : "A", "Miss Piggy" : "B", "Gonzo" : "B+"}

grades.Kermit = "A+";

grades.Gonzo = "B-";

grades.Fozzie = "C";

// grades["Miss Piggy"] = "F+";  how to change as a ["string"]

console.log(grades);




heroes = [
    {first: "Clark", last: "Kent", world: "DC"  },
    {first: "Peter", last: "Parker", world: "Marvel"  },
    {first: "Bruce", last: "Wayne", world: "DC" }
]


console.log(heroes[0] ["world"])

console.log(heroes[0].first, heroes[1].first, heroes[2].first);  
//for loop

for (i = 0; i < heroes.length; i++) {
    console.log(heroes[i].first)
}

for (i = 0; i < heroes.length; i++) {
    if (heroes[i].world == "DC") {
        console.log(heroes[i].first)
    }
}  



// conditional(==) vs assignment  (=)

// Predict the output:
for (var i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

/*[object Object] {
  first: "Clark",
  last: "Kent",
  world: "DC"
}
[object Object] {
  first: "Peter",
  last: "Parker",
  world: "Marvel"
}
[object Object] {
  first: "Bruce",
  last: "Wayne",
  world: "DC"
} */