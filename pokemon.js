/*
alert("Je fonctionne bien")

class Pokemon{
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky(lucky) {
        return this.luck > Math.random()
    }

    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attaqué ' + pokemon.name + ' pour ' + damage + ' de dégâts. Il lui reste ' + pokemon.hp + ' points de vie.')
        } else {
            console.log(this.name  + ' a raté son attaque.')
        }
    }
}

let sylveon = new Pokemon("Dracofeu", 170, 120, 150, 0.4)
let tortank = new Pokemon("Tortank", 140, 150, 160, 0.4)

while (tortank.hp > 0 && sylveon.hp > 0) {

    sylveon.attackPokemon(tortank)

    if (tortank.hp < 0){
        console.log("Tortank est mort")
        break
    }

    tortank.attackPokemon(dracofeu)

    if (sylveon.hp < 0){
        console.log("Dracofeau est mort")
        break
    }
}
*/