import quests from '../data/data-info.js';

export function completedOrWut(user){
    for (let quest of quests){
        if (!user.completed[quest.id]){
            return false;
        }
    }
    return true;
}