export const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
console.log(stringyUser);
    localStorage.setItem(USER, stringyUser);    
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
console.log(stringyUser);    
    return JSON.pasre(stringyUser);
}