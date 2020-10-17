import { getUser, renderUserData } from '../utils.js';

const user = getUser();

renderUserData();

const button = document.getElementById('play-again-button')

button.addEventListener('click', () => {
console.log('button clicked!!')
    localStorage.clear();
    window.location.href = '../'
})