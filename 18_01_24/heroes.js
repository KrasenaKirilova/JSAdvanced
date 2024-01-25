function solve() {

    function mage(name) {
        let hero = {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                if (this.mana > 0) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                    // } else {
                    //     console.log(`${this.name}`);
                    // }
                };
            };

        };

        function fighter(name) {
            let hero = {
                name,
                health: 100,
                stamina: 100,
                figth() {
                    if (this.stamina > 0) {
                        this.stamina--;
                        console.log(`{this.name} slashes at the foe!`);
                    }
                }

            };
            return hero;
        };
        return { mage, fighter };
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);