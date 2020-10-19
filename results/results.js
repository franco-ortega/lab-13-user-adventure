import { getUser, renderUserData } from '../utils.js';

const totalDaysSpan = document.getElementById('total-days-span');
const gemsSpan = document.getElementById('gems-span');
const successSpan = document.getElementById('success-span');
const survivalSpan = document.getElementById('survival-span');

renderUserData();

const user = getUser();

const gemTotal = user.blue + user.red + user.yellow;
    console.log(gemTotal + ' gems');

let survived
let success

if (user.hp <= 0) {;
    survived = `Tragically, ${user.name} died in the fairy lands and never returned to the farm.`;
} else if  (user.hp === 20) {
    survived = `${user.name} made it through the fairy lands without a scratch!!`;
} else if  (user.hp >= 10) {
    survived = `${user.name} got pretty banged up but will recover.`;
} else {
    survived = `${user.name} barely survived...and some scars never heal.`;
}

if (gemTotal < 5 || user.hp <= 0 || user.days <= 0) {
    success = `The farm was lost.`;
} else if  (gemTotal >= 9) {
    success = `The farm has been saved! ${user.name} found enough gems to save other farms too!! And there was enough leftover for ${user.name} to live comfortably for the rest of their life.`;
} else if  (gemTotal >= 7) {
    success = `The farm was saved, and ${user.name} found enough gems to save other farms too!!.`;    
} else {
    success = `The farm was saved. Unfortunately, other families lost their farms to the moneylenders.`;
}

totalDaysSpan.textContent = -(user.days - 5) + " days have passed.";
gemsSpan.textContent = `${user.name} found ${gemTotal} gems.`;
survivalSpan.textContent = survived;
successSpan.textContent = success;

const button = document.getElementById('play-again-button')
button.textContent = 'Play Again!'

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../'
})