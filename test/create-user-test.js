import { createUser } from '../home/create-user.js';

const test = QUnit.test;

test('createUser Function ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        hp:0,
        dogecoin: 35,
        name: 'carlos',
        race: 'wizard',
        completed: {}
    };
    
    const userData = new FormData();
    userData.set('name', 'carlos');
    userData.set('race', 'wizard');
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createUser(userData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
