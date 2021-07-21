// IMPORT NEEDED FUNCTIONS
import quests from '../data/data-info.js';
import { completedOrWut } from './map-utils.js';
import { getUser } from '../data/data-utils.js';

//IMPORT DOM ELEMENTS
const divOptions = document.getElementById('quest-options');


// SEND USER TO RESULTS IF ALL QUEST COMPLETED OR HP IS LOWER THAN ZERO
const user = getUser();

if (user.hp <= 0 || completedOrWut(user)) {
    window.location.replace('../results');
}


//LOOP TO MAKE AN SPAN IF QUEST COMPLETED OR A LINK IF STILL PENDING
for (let questt of quests){
    // createLinkQuest(questt);
    if (user.completed[questt.id]){
        createSpanQuest(questt);
    } else {
        createLinkQuest(questt);
    }
}


// FUNCTION THAT MAKES THE SPAN
function createSpanQuest(questItem){
    const spanQuest = document.createElement('span');
    spanQuest.classList.add('aligment');
    spanQuest.classList.add('completed');

    spanQuest.innerText = questItem.title;
    spanQuest.style.top = questItem.map.top;
    spanQuest.style.left = questItem.map.left;

    divOptions.appendChild(spanQuest);
}

//FUNCTION THAT MAKES THE LINK
function createLinkQuest(questItem){
    const questHref = `../quest/?questId=${questItem.id}`;
    const questLink = document.createElement('a');
    questLink.classList.add('aligment');

    questLink.href = questHref;
    questLink.textContent = questItem.title;
    questLink.style.top = questItem.map.top;
    questLink.style.left = questItem.map.left;

    divOptions.appendChild(questLink);

    return questLink;
}

