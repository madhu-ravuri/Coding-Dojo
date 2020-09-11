class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        }
        else {
            throw new Error("Target must be a unit!")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if (stat == power) {
                target.power += this.magnitude;
            }
            else {
                target.resilience += this.magnitude;
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}
// make Hard Algorithm, Unhandled Promise Rejection, Pair Programming
const hardAlg = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3); 
const UPR = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);


// Player 1 (turn 1)
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
hardAlg.play(redBeltNinja);

// Player 2 (turn 2)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
UPR.play(redBeltNinja);

// Player 1 (turn 3)
pairProg.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);