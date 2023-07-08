const input = document.querySelector("input");
const log = document.getElementById("log");
const textBox = document.getElementById("text");

input.addEventListener("change", updateValue);


function uniqueLetter(text) {
  let arrWithFirstSymbols = [];

  const findUniqueSymbols = (data) => {
    for (let i = 0; i < data.length; i++) {
      let checkedLetter = data[i];
      let checkedWord = data.slice(i + 1);
      if (!checkedWord.includes(checkedLetter)) {
        return checkedLetter;
      }
    }
  }

  text.split(' ').forEach(word => {
    arrWithFirstSymbols.push(findUniqueSymbols(word));
  });

  return findUniqueSymbols(arrWithFirstSymbols) || "не знайдено";
}

function updateValue(e) {
  let text = e.target.value;

  textBox.textContent = '" ' + text + ' "';
  log.textContent = `Унікальний символ:   ${uniqueLetter(text)} `;
  input.value = '';
}
