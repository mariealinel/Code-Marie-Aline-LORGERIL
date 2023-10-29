/*
let musiques = ["On my love-Zara Larsson", "Anissa-Wejdene", "Typa Girl-Blackpink", "Bejeweled-Taylor Swift", "Bewitched-Laufey"];
let santeMentale = 10;
const nbFeuxRouges = 30;
let changementsTaxi = 0;
 
class Perso {
    constructor(name, santeMentale){
    this.name = name
    this.santeMentale = santeMentale
}
}

let john = new Perso("John", 10)

for (let feuRouge = 1; feuRouge <= nbFeuxRouges; feuRouge++) {
    let musique = musiques[Math.floor(Math.random() * musiques.length)];
    console.log("Musique - " + musique + " Nombre de feux restants : " + (nbFeuxRouges - feuRouge));

    
    if (musique == "Anissa-Wejdene") {
        john.santeMentale--;
        changementsTaxi++;
        console.log("John a perdu 1 de sante mentale et change de taxi.");
        
}
}

if (john.santeMentale > 0) {
    console.log("John est arrive à destination et il lui a fallut" + changementsTaxi + "changements de taxi pour y arriver.") 
} else {
    console.log("Explosion.")
}
*/
