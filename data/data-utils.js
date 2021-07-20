export const USER = 'USER';

export function getUser(){
    const string = localStorage.getItem(USER);
    return JSON.parse(string);
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}


export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

