import { quests } from '../quest/data.js';
import { findById, getUser, setUser, renderUserData } from '../utils.js';

renderUserData();

const body = document.querySelector('body');
const section = document.querySelector('section');
const choicesDiv = document.querySelector('#choices-div')
const resultsDiv = document.querySelector('#results-div');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id')

const quest = findById(quests, id)

body.style.backgroundImage = `url('../assets/${quest.image}')`;
//section.style.backgroundImage = `url('../assets/${quest.image}')`;

const h2 = document.createElement('h2')
const pTag = document.createElement('p')

h2.textContent = quest.title;
pTag.textContent = quest.description;
pTag.classList.add("transparent");

choicesDiv.append(h2, pTag);

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

    const checked = document.querySelector(':checked')
    const selection = checked.value;
console.log(selection);

    const choice = findById(quest.choices, selection);

    const user = getUser();

    if (user.tool === 'Compass') {
console.log('User has the compass');
        if (choice.days < -1) {
            choice.days = choice.days + 1;
            console.log('The compass worked!!')
        }
    } else if (user.tool === 'Shield') {
console.log('User has the shield');
        if (choice.hp < 0) {
            choice.hp = choice.hp + 5;
            console.log('The shield worked!!')
        }
    } else {
console.log('User has the torch');
        if (choice.blue >= 1) {
            choice.blue = choice.blue + 1;
        } else if (choice.red >= 1) {
            choice.red = choice.red + 1;
        } else if (choice.yellow >= 1) {
            choice.yellow = choice.yellow + 1;
        }
    }

    user.hp += choice.hp;
    user.days += choice.days;
    user.blue += choice.blue;
    user.red += choice.red;
    user.yellow += choice.yellow;
    user.completed[quest.id] = true;

    setUser(user);

    button.disabled = true;


    resultsDiv.textContent = choice.result;
    resultsDiv.style.backgroundColor = "rgba(248, 250, 248, 0.5)";

    const returnButton = document.createElement('button')

    returnButton.textContent = 'Return to Map'

    returnButton.addEventListener('click', () => {
        window.location.href = '../map';
    })

    resultsDiv.append(returnButton);

});

form.appendChild(button);