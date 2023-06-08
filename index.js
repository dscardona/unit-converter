// To add event listener to button
let convertBtn = document.getElementById("convert-btn")

// To retrieve base value from input for calculations
let inputEl = document.getElementById("input")

// To populate results
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

// Conversion numbers
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters` 

    volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liter` 

    massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilo` 
})