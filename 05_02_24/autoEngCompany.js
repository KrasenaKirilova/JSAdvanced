function autoEngineeringCompany(input) {
    const cars = input.reduce((acc, line) => {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);
        
        if (!acc[carBrand]) {
            acc[carBrand] = {};
        }
        if (!acc[carBrand][carModel]) {
            acc[carBrand][carModel] = 0;
        }
        acc[carBrand][carModel] += producedCars;
        
        return acc;
    }, {});

    return Object.entries(cars).map(([brand, models]) => {
        let modelData = Object.entries(models)
            .map(([model, count]) => `###${model} -> ${count}`)
            .join('\n');
        return `${brand}\n${modelData}`;
    }).join('\n');
}


console.log(autoEngineeringCompany([
    
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]));