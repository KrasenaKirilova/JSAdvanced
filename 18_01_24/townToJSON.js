function townToJSON(data) {
    let result = [];
    let keys = data.shift().split('|').filter(x => x !== '').map(x => x.trim());
    

    for (const tokens of data) {
        let [town, latitude, longitude] = tokens.split('|').filter(x => x !== '').map(x => x.trim());
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({ [keys[0]]: town, [keys[1]]: Number(latitude), [keys[2]]: Number(longitude) });
    }
    return JSON.stringify(result);
}

console.log(townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));