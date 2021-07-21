// IMPORT FUNCTIONS AND DOM ELEMENTS
import { createUser } from './create-user.js';
import { setUser, USER } from '../data/data-utils.js';

const userInfoform = document.getElementById('form-userInfo');

//REMOVE ITEMS IN LS TO BEGIN A NEW GAME
localStorage.removeItem(USER);

//EVENT LISTENER TO GET USERS INPUT/INFO
userInfoform.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userInfoform);
    const newUser = createUser(formData);
    setUser(newUser);
    window.location.replace('./map');

});


