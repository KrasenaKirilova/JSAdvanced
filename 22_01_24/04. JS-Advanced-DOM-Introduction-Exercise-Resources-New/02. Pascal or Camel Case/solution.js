function solve(text, type) {
  let input = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let buff = '';

  inputArr = input.split(' ');
  if (convention == 'Camel Case') {

    buff = inputArr.shift().toLowerCase();

    inputArr.forEach(word => {
      buff += word[0].toUpperCase() + word.substring(1).toLowerCase();
    });

  } else if (convention == 'Pascal Case') {

    inputArr.forEach(word => {
      buff += word[0].toUpperCase() + word.substring(1).toLowerCase();
    });
  } else {
    buff = "Error!"
  }
  result.textContent = buff;
}

//solve("this is an example", "Camel Case");