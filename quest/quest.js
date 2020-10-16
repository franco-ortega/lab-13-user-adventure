import { quests } from '../quest/data.js';
import { findById, getUser, setUser } from '../utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('id'));

const id = searchParams.get('id')

const quest = findById(quests, id)
console.log(quest);


const h2 = document.createElement('h2')

h2.textContent = quest.title;

section.appendChild(h2);


console.log(quest.choices);


const form = document.createElement('form');

section.appendChild(form);


quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.appendChild(label);

});


const button = document.createElement('button');

button.textContent = 'Make Your Choice';


form.addEventListener('submit', (e) => {
    e.preventDefault();

console.log('form submitted');

    const checked = document.querySelector(':checked')
    const selection = checked.value;

    const choice = findById(quest.choices, selection);

    const user = getUser();
    
    user.hp += choice.hp;
    user.gold += choice.gold;

    console.log(user);

    setUser(user);

});

form.appendChild(button);


/*
            <br>
            Description of Quest
            <br>
            User Choices
            <br>
            Submit Button
*/

//create div in section for description
//create li with choices (radio buttons) to put in ul
//append div in section
//append li in ul
//append ul in section



//ul.textContent = 'Ul test content'
//const li = document.createElement('li');
//li.textContent = 'Li test content'
//ul.append(li);
