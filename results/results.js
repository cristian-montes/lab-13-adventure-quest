// IMPORT FUNCTIONS AND DOM ELEMENTS
import { getUser } from '../data/data-utils.js';
const resultsDiv = document.getElementById('results-div');

const user = getUser();

// FUNCTION TO MAKE RESULTS APPEAR
function makeResults(users){
    const userImage = document.createElement('img');
    userImage.src = `../assets/quests/${users.race}.jpeg`;

    const nameP = document.createElement('p');
    nameP.textContent = `Username: ${users.name}`;

    const raceP = document.createElement('p');
    raceP.textContent = `Race :${users.race}`;

    const hpP = document.createElement('p');
    hpP.textContent = `hp :${users.hp}`;

    const dogecoinP = document.createElement('p');
    dogecoinP.textContent = `Dogecoin: ${users.dogecoin} ea.`;

    const aTag = document.createElement('a');
    aTag.href = '../index.html';

    const backBtn = document.createElement('button');
    backBtn.textContent = 'Play Again';
    backBtn.id = 'back-btn';


    aTag.append(backBtn);
    resultsDiv.append(userImage, nameP, raceP, hpP, dogecoinP, aTag);
}

makeResults(user);

//DISPLAY WIN OR SURVIVED SETENCE DEPENDING ON THEIR HP POINTS
if (user.hp <= 0){
    const lost = document.createElement('p');
    lost.textContent = 'YOU LOST!!!! WANNA PLAY AGAIN??';
    resultsDiv.append(lost);
} else {
    const survived = document.createElement('p');
    survived.textContent = 'YOU survived!!! WANNA PLAY AGAIN??';
    resultsDiv.append(survived);
}