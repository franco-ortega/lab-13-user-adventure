// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

/*const formDiv = document.querySelector('.form-div');
const form = document.createElement('form');
const input = document.createElement('input');
const button = document.createElement('button');

console.log(formDiv);
console.log(form);
console.log(input);
console.log(button);

const enterName = input;
console.log(enterName);

const toolChoice = input;
console.log(toolChoice);
toolChoice.type = 'radio';
 
button.textContent = 'Begin Adventure';

formDiv.append(form, enterName, toolChoice, button);
*/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

console.log(data.get('user-name'), data.get('species'), data.get('tool'));

    const user = {
        name: data.get('user-name'), 
        species: data.get('species'),
        tool: data.get('tool'),
        hp: 10,
        days: 5,
        gemblue: 0,
        gemgreen: 0,
        gemred: 0 
    }

console.log(user);



})