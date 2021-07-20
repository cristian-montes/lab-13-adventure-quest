import quests from '../data/data-info.js';
import { findById } from '../data/data-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImg = document.getElementById('quest-image');
const questDesc = document.getElementById('quest-description');
const choices = document.getElementById('choices');

const questFindItem = findById(quests, searchParams.get('questId'));

questTitle.textContent = questFindItem.title;
questImg.src = `../assets/quests/${questFindItem.image}`;
questDesc.textContent = questFindItem.description;

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
