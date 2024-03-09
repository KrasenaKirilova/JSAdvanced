// function generateReport() {
//     let checked = Array.from(document.querySelectorAll('input[type=checkbox]'));
//     let rows = Array.from(document.querySelectorAll('tbody tr'));

//     function createReport(row, checkedCheckboxes) {
//         let obj = {};
//         checkedCheckboxes.forEach((checkbox, index) => {
//             if (checkbox.checked) {
//                 obj[checkbox.name] = row.children[index].textContent;
//             }
//         });
//         return obj;
//     }

//     function processRows(rows, checkedCheckboxes) {
//         return rows.map(row => createReport(row, checkedCheckboxes));
//     }

//     let result = processRows(rows, checked);
//     document.getElementById('output').value = JSON.stringify(result);
// }

function generateReport() {
    const checkedCheckboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    function createReport(row, checkedCheckboxes) {
        const obj = {};
        checkedCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                obj[checkbox.name] = row.children[index].textContent;
            }
        });
        return obj;
    }

    function processRows(rows, checkedCheckboxes) {
        return rows.map(row => createReport(row, checkedCheckboxes));
    }

    const result = processRows(rows, checkedCheckboxes);
    document.getElementById('output').value = JSON.stringify(result);
}
