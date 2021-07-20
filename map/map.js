// import the quest data
import quests from '../data/data-info.js';
//import DOM Elements
const divOptions = document.getElementById('quest-options');

//create for loop to loop quest data
for (let item of quests){
    const questHref = `../quest/?questId=${item.id}`;
    const questLink = document.createElement('a');

    questLink.href = questHref;
    questLink.textContent = item.title;

    divOptions.appendChild(questLink);
}
//create links to the quest hmtls using quest id info
// crete dom elements
//append dom elemnts to the DOM ele in import
