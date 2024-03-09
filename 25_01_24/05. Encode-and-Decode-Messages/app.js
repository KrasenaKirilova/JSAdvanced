function encodeAndDecodeMessages() {
    const inputArea = document.getElementsByTagName("textarea")[0];

    const outputArea = document.getElementsByTagName("textarea")[1];


    const encodeBtn = document.getElementsByTagName("button")[0];
    const decodeBtn = document.getElementsByTagName("button")[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);


    function encode() {
        let inputText = inputArea.value;
        let buff = "";
        for (let i = 0; i < inputText.length; i++) {
            buff += String.fromCharCode(inputText.charCodeAt(i) + 1);
        }
        inputArea.value = "";
        outputArea.value = buff;
    }

    function decode() {
        let outputText = outputArea.value;
        let decodeBuff = "";
        for (let i = 0; i < outputText.length; i++) {
            decodeBuff += String.fromCharCode(outputText.charCodeAt(i) - 1);
        }
        outputArea.value = decodeBuff;
    }
}




