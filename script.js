let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  numberContainer = document.getElementById('number-container');

numbersArray.forEach((item, index) => {
  numberContainer.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})
shuffleArray = () => {
  numbersArray = numbersArray.sort(() => { return .5 - Math.random() });
  numberContainer.innerHTML = ''
  for (let index = 0; index < numbersArray.length; index++) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index];
    cubeItem.setAttribute('data-item', numbersArray[index]);
    numberContainer.appendChild(cubeItem);
  }
}
sortArray = () => {
  numbersArray = numbersArray.sort((a, b) => { return a - b });
  numberContainer.innerHTML = ''
  for (let index = 0; index < numbersArray.length; index++) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbersArray[index]
    cubeItem.setAttribute('data-item', numbersArray[index])
    numberContainer.appendChild(cubeItem);
  }
}
