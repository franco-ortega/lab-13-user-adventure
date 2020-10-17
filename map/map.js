import { quests } from '../quest/data.js';
import { getUser, USER } from '../utils.js';

console.log(quests);

console.log('is this working?')

const user = getUser();

//if the user has died or run out of days or completed all quests, the games moves to the results page
function hasCompletedAllQuests(_user) {
    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];

        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

if ( user.hp <= 0 || user.days <= 0 || hasCompletedAllQuests(user)) {
    window.location.href = '../results';
}

/*
    setUser({
        name: data.get('user-name'), 
        species: data.get('species'),
        tool: data.get('tool'),
        hp: 20,
        days: 5,
        blue: 0,
        red: 0,
        yellow: 0,
        completed: {}
    });

*/

const userSpan = document.getElementById('user-span');
const toolSpan = document.getElementById('tool-span');
const hpSpan = document.getElementById('hp-span');
const daysSpan = document.getElementById('days-span');
const blueSpan = document.getElementById('blue-gem-span');
const redSpan = document.getElementById('red-gem-span');
const yellowSpan = document.getElementById('yellow-gem-span');


userSpan.textContent = `${user.name} the ${user.species}`;
toolSpan.textContent = user.tool;
hpSpan.textContent = user.hp;
daysSpan.textContent = user.days;
blueSpan.textContent = `${user.blue} blue, `;
redSpan.textContent = `${user.red} red, `;
yellowSpan.textContent = `${user.yellow} yellow`;


const section = document.querySelector('section');
const ul = document.querySelector('ul');

section.style.backgroundImage = `url('../assets/map.jpg')`;

quests.forEach((quest) => {
    console.log(quest);

    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);
    link.textContent = quest.title;
    link.href = `../quest/?id=${quest.id}`;
    

    ul.append(li);

})

section.appendChild(ul);