import { completedOrWut } from '../map/map-utils.js';

const test = QUnit.test;

test('completedOrWut should return the quested completed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const data = {
        completed:{
            tacos: true,
            unicorn:true,
            happyEnding:true
        }
    };
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = completedOrWut(data);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('completedOrWut should return false if all the quest are not completed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const data = {
        completed:{
            tacos: true,
        }
    };
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = completedOrWut(data);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

