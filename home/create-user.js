//create user and tdd function
export function createUser(formData){
    const newUser = {
        name: formData.get('name'),
        race: formData.get('race'),
        gold: 35,
        hp: 0,
        completed: {}
    };
    return newUser;
} 