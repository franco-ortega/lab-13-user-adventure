export const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);    
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    return JSON.parse(stringyUser);
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}

export function renderUserData() {
    const user = getUser();

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
    
    };    