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

//user.days <= 0 || 

if ( user.hp <= 0 || hasCompletedAllQuests(user)) {
    window.location.href = '../results';
}

const section = document.querySelector('section');
const ul = document.querySelector('ul');

section.style.backgroundImage = `url('../assets/map.jpg')`;

quests.forEach((quest) => {
    console.log(quest);

    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);
    link.textContent = quest.title;
    link.href = `/quest/?id=${quest.id}`;
    

    ul.append(li);

})

section.appendChild(ul);