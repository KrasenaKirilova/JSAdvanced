function heroicInventory(data) {

    let result = [];

    for (const tokens of data) {
        let [name, level, items] = tokens.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items})
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);