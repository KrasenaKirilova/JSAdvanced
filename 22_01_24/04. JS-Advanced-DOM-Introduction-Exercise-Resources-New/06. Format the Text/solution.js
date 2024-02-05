function solve() {
  const textArea = document.getElementById("input");
  const textareaValue = textArea.value;
  const divResult = document.getElementById("output");
  const sentencesArray = textareaValue
  .split('.')
  .filter((s) => s !== "")
  .map(s => s + ".");

  const paragrafRoof = Math.ceil(sentencesArray.length / 3);

  for (let i = 0; i < paragrafRoof; i++) {
    const joinedSentances = sentencesArray.splice(0, 3).join('');
    divResult.innerHTML += `<p>${joinedSentances}</p>`;
  }
}