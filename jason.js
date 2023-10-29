/*
let arrayNames = ['Iris', 'Fleur', 'Lisa', 'Jennie', 'Zara', 'Cristina', 'Lia', 'Annie'];
let arrayCharacteristics = [" la petite ", " la maladroite ", " la sportive ", " la nerd ", " la vieille "];

class Tueur {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    attackSurvivant(survivant) {
        const random = Math.random();
        if (random < survivant.deathluck) {
            console.log(this.name + " a tue " + survivant.name);
        }
    }
}

let jason = new Tueur("Jason", 100);

class Survivant {
    constructor(deathluck, attackluck, dieattackluck) {
        this.name = getRandomName(arrayNames);
        this.characteristic = getRandomName(arrayCharacteristics);
        this.deathluck = deathluck;
        this.attackluck = attackluck;
        this.dieattackluck = dieattackluck;
        this.death = false;
    }

    attackTueur(tueur) {
        if (this.death) {
            return;
        }

        const random = Math.random();
        if (random < this.deathluck) {
            console.log("Jason attaque " + this.name + this.characteristic);
            this.death = true;

        } 

        if (random < this.deathluck + this.attackluck) {
            console.log(this.name + this.characteristic + "a esquive l'attaque de " + tueur.name + " et lui a inflige 10 points de degats.");
            tueur.hp -= 10;

        } else {
            console.log(this.name + this.characteristic + "est morte mais a inflige 15 points de degats a " + tueur.name);
            tueur.hp -= 15;
            this.death = true;
        }
    }
}        

function getRandomName(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

let survivants = [];

for (let i = 0; i < 10; i++) {
    survivants.push(new Survivant(0.3, 0.5, 0.2));
}

let victimes = [];

while (jason.hp > 0 && survivants.length > 0) {
    let randomSurvivantIndex = Math.floor(Math.random() * survivants.length);
    let randomSurvivant = survivants[randomSurvivantIndex];

    if (!randomSurvivant.death) {
        randomSurvivant.attackTueur(jason);
        
        if (randomSurvivant.death) {
            victimes.push(randomSurvivant.name);
        }

        if (jason.hp === 0) {
            console.log("Les survivants ont gagne, mais RIP a : " + victimes.join(', '));
            break;

        }
        if (jason.hp > 0 && survivants.length === 0) {
            console.log("Jason a tue tous les survivants. ");
        }
    }
}
*/