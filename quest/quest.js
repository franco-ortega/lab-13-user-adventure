import { quests } from '../quest/data.js';
import { findById, getUser, setUser, renderUserData } from '../utils.js';

renderUserData();

const section = document.querySelector('section');
const choicesDiv = document.querySelector('#choices-div')
console.log(choicesDiv);
const resultsDiv = document.querySelector('#results-div');

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('id'));

const id = searchParams.get('id')

const quest = findById(quests, id)
console.log(quest);

section.style.backgroundImage = `url('../assets/${quest.image}')`;
console.log(quest.image);

const h2 = document.createElement('h2')
const pTag = document.createElement('p')


h2.textContent = quest.title;
pTag.textContent = quest.description;
pTag.classList.add("transparent");

choicesDiv.append(h2, pTag);

console.log(quest.choices);

const form = document.createElement('form');

choicesDiv.appendChild(form);


quest.choices.forEach(choice => {
    const ul =document.createElement('ul');
    const li = document.createElement('li');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(radio, span);

    li.append(label);

    ul.append(li);

    form.appendChild(ul);
});


const button = document.createElement('button');

button.textContent = 'Make Your Choice';




form.addEventListener('submit', (e) => {
    e.preventDefault();

console.log('form submitted');

    const checked = document.querySelector(':checked')
    const selection = checked.value;
console.log(selection);

    const choice = findById(quest.choices, selection);

    const user = getUser();
    
    user.hp += choice.hp;
    user.days += choice.days;
    user.blue += choice.blue;
    user.red += choice.red;
    user.yellow += choice.yellow;
    user.completed[quest.id] = true;

console.log(user);

    setUser(user);

//Has to show RESULT of CHOICE on the quest page
//choice.result

    resultsDiv.textContent = choice.result;

    const returnButton = document.createElement('button')

    returnButton.textContent = 'Return to Map'

    returnButton.addEventListener('click', () => {
        console.log('return button was clicked!')
        window.location.href = '../map';
    })

    resultsDiv.append(returnButton);

console.log(resultsDiv);

});

form.appendChild(button);