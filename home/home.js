// import functions and grab DOM elements
import { createUser } from './create-user.js';
import { setUser } from '../data/data-utils.js';

const userInfoform = document.getElementById('form-userInfo');


//event listener for form and
userInfoform.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userInfoform);
    const newUser = createUser(formData);
    setUser(newUser);
    window.location.replace('./map');

});

