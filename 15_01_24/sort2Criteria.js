function sort2Criteria(arr) {

    let sorted = arr.sort((a, b) => {
        let lengthCompare = a.length - b.length;

        if (lengthCompare === 0) {
            return a.localeCompare(b, { sensitivity: 'base' });
        }
        return lengthCompare;
    });

    console.log(sorted.join('\n'));
}





sort2Criteria(['alpha',
    'beta',
    'gamma']);
console.log('----------------');
sort2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
console.log('----------------');
sort2Criteria(['test',
    'Deny',
    'omen',
    'Default']);
console.log('----------------');