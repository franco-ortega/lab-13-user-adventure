import { quests } from '../quest/data.js';
import { getUser } from '../utils.js';

console.log(quests);

console.log('is this working?')

getUser();

const section = document.querySelector('section');
const ul = document.querySelector('ul');



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