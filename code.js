// Variables
// Memory bucket to remember values for us to use later on
// let age (Declaration step)
// = 10; (Assignment step)

// camelCase
// let myAgeIs = 5;

// === (Value and Type)
// == (value Only)
// = (Assignment)
/* != (Does not equal)
!== (Does not equal) value nor type) 
*/

// Pseduocode

// 1. Click event (smurf)
document.querySelector('#getTemp').addEventListener('click', temp)

function temp() {
    //2. Get the value of the input field 
         const celsius = document.querySelector('#zebra').value
// 3. quick mafs to convert it 
         const fahrenheit = (celsius - 32) * 5/9;
// 4. Display the result in the output field 
         document.querySelector('#placeToPutResult').innerText = fahrenheit;
}
 
