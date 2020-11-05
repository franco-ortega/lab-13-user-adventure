import { quests } from '../quest/data.js';
import { getUser, renderUserData } from '../utils.js';

const user = getUser();

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

renderUserData();

const section = document.querySelector('section');
const ul = document.querySelector('ul');

section.style.backgroundImage = `url('./assets/map.jpg')`;

quests.forEach((quest) => {

    const li = document.createElement('li');
    const link = document.createElement('a');
    const addId = quest.id;

    link.id = `${addId}`;
    
    li.appendChild(link);
 
if (user.completed[quest.id]) {
    link.textContent = quest.title;
} else {
    link.textContent = quest.title;
    link.href = `../quest/?id=${quest.id}`;
}

    ul.append(li);

})

section.appendChild(ul);