import { setUser } from './utils.js';

const body = document.querySelector('body')
const form = document.querySelector('form');

body.style.backgroundImage = `url('./assets/farm.jpg')`;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

console.log(data.get('user-name'), data.get('species'), data.get('tool'));


if(data.get('species') === 'Elf') {

     setUser({
        name: data.get('user-name'), 
        species: data.get('species'),
        tool: data.get('tool'),
        hp: 25,
        days: 14,
        blue: 0,
        red: 0,
        yellow: 0,
        completed: {}
    });
} else if (data.get('species') === 'Dwarf') {
     setUser({
        name: data.get('user-name'), 
        species: data.get('species'),
        tool: data.get('tool'),
        hp: 35,
        days: 14,
        blue: 0,
        red: 0,
        yellow: 0,
        completed: {}
    });
} else if (data.get('species') === 'Halfling') {
     setUser({
        name: data.get('user-name'), 
        species: data.get('species'),
        tool: data.get('tool'),
        hp: 20,
        days: 14,
        blue: 0,
        red: 0,
        yellow: 0,
        completed: {}
    });
} else {
     setUser({
        name: data.get('user-name'), 
        species: data.get('species'),
        tool: data.get('tool'),
        hp: 30,
        days: 14,
        blue: 0,
        red: 0,
        yellow: 0,
        completed: {}
}

)

}


window.location.href = './map';



})