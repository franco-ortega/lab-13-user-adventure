import { setUser } from './utils.js';

const body = document.querySelector('body')
const form = document.querySelector('form');

body.style.backgroundImage = `url('../assets/farm.jpg')`;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

console.log(data.get('user-name'), data.get('species'), data.get('tool'));

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

    window.location.href = './map';
})