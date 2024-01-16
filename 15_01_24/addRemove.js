function addRemove(commands) {
  let resultArray = [];
  let number = 1;

  for (let command of commands) {
    if (command === "add") {
      resultArray.push(number);
    } else if (command === "remove") {
      if (resultArray.length > 0) {
        resultArray.pop();
      }
    }

    number++;
  }

  if (resultArray.length === 0) {
    console.log("Empty");
  } else {
    console.log(resultArray.join("\n"));
  }
}




    addRemove(['add',

        'add',

        'add',

        'add']);
    console.log('==========');
    addRemove(['add', 'add', 'remove', 'add', 'add']);
    console.log('==========');
    addRemove(['remove', 'remove', 'remove']);
