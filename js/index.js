document.getElementById('calculation-one').addEventListener('click', function () {
    const inputName = 'Triangle';
    const inputOne = document.getElementById('input-one').value;
    const inputTwo = document.getElementById('input-two').value;
    const firstCalculation = 0.5 * parseInt(inputOne) * parseInt(inputTwo);
    // console.log(firstCalculation , typeof firstCalculation);
    displayCalculation(inputName, firstCalculation)
});

document.getElementById('calculation-two').addEventListener('click', function () {
    const inputName = 'Rectangle';
    const inputThree = document.getElementById('input-three').value;
    const inputFour = document.getElementById('input-four').value;
    const secondCalculation = parseInt(inputThree) * parseInt(inputFour);
    // console.log(firstCalculation , typeof firstCalculation);
    displayCalculation(inputName, secondCalculation)
});

document.getElementById('calculation-three').addEventListener('click', function () {
    // console.log('clicked')
    const inputName = 'Parallelogram';
    const inputFive = document.getElementById('input-five').value;
    const inputSix = document.getElementById('input-six').value;
    const thirdCalculation = parseInt(inputFive) * parseInt(inputSix);
    // console.log(thirdCalculation, typeof thirdCalculation);
    displayCalculation(inputName, thirdCalculation)


});

document.getElementById('calculation-four').addEventListener('click', function () {
    console.log('clicked')
    const inputName = 'Rhombus';
    const inputSeven = document.getElementById('input-seven').value;
    const inputEight = document.getElementById('input-eight').value;
    const fourthCalculation = 0.5 * parseInt(inputSeven) * parseInt(inputEight);
    // console.log(thirdCalculation, typeof thirdCalculation);
    displayCalculation(inputName, fourthCalculation)


});

document.getElementById('calculation-five').addEventListener('click', function () {
    console.log('clicked')
    const inputName = 'Pentagon';
    const inputNine = document.getElementById('input-nine').value;
    const inputTen = document.getElementById('input-ten').value;
    const fifthCalculation = 0.5 * parseInt(inputNine) * parseInt(inputTen);
    // console.log(thirdCalculation, typeof thirdCalculation);
    displayCalculation(inputName, fifthCalculation)


});

document.getElementById('calculation-six').addEventListener('click', function () {
    console.log('clicked')
    const inputName = 'Ellipse';
    const inputEleven = document.getElementById('input-eleven').value;
    const inputTwelve = document.getElementById('input-twelve').value;
    const sixthCalculation = 3.14159265359 * parseInt(inputEleven) * parseInt(inputTwelve);

    sixthCalculation.parseInt;
    // console.log(sixthCalculation, typeof thirdCalculation);
    displayCalculation(inputName, sixthCalculation)


});
function displayCalculation(inputName, firstCalculation, secondCalculation, thirdCalculation, fourthCalculation, fifthCalculation, sixthCalculation) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${inputName}</td>
    <td>${firstCalculation}</td>
    
    `;
    container.appendChild(tr);
}
