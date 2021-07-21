import quests from '../data/data-info.js';
import { findById, getUser, setUser } from '../data/data-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImg = document.getElementById('quest-image');
const questDesc = document.getElementById('quest-description');
const choices = document.getElementById('choices');

// FIND QUEST DATA BASED ON YOUR URL
const questFindItem = findById(quests, searchParams.get('questId'));

questTitle.textContent = questFindItem.title;
questImg.src = `../assets/quests/${questFindItem.image}`;
questDesc.textContent = questFindItem.description;

//LOOP TRHOUGH ALL OF THE CHOICES AND GIVE A RADIO TO EACH ON OF THEM
for (let choice of questFindItem.choices){
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;

    label.append(radio, span);

    choices.append(label);
}

//ADD EVENT LISTENER TO THE CHOICE FORM TO SHOW OPTION RESULT AND REDIRECT BACK TO MAP
const choiceForm = document.getElementById('choice-form');
choiceForm.addEventListener('submit', e =>{
    e.preventDefault();

    const newFormData = new FormData(choiceForm);
    const choiceValue = newFormData.get('choice');

    //get the chonsen choice from the choice array
    const choiceData = findById(questFindItem.choices, choiceValue);

    //update userdata to local storage
    const userData = getUser();
    userData.dogecoin += choiceData.dogecoin;
    userData.hp += choiceData.hp;
    userData.completed[questFindItem.id] = true;
    setUser(userData);

    //update UX per users choice
    questDesc.textContent = choiceData.result;
    choiceForm.classList.add('hidden');
    const backBtn = document.createElement('a');
    backBtn.textContent = '-Go Back to Map';
    backBtn.href = '../map';

    questDesc.append(backBtn);
});