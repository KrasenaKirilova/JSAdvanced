function addItem() {
    let selectMenuRef = document.getElementById("menu");
    let textInputRef = document.getElementById("newItemText");
    let valueInputRef = document.getElementById("newItemValue")
    let currentText = textInputRef.value;
    let currentValue = valueInputRef.value;
    let option = document.createElement("option");

    option.value = currentValue;
    option.text = currentText;
    
    selectMenuRef.appendChild(option);
    textInputRef.value = "";
    valueInputRef.value = "";
}