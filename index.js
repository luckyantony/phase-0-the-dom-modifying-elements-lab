// Write your code here!

// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the <h1> element
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the <h1> element to the body (or any other desired location)
document.body.appendChild(newHeader);