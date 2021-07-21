const tacos = {
    id: 'tacos',
    title: 'La Taqueria',
    map: {
        top: '77%',
        left: '70%'
    },
    image: 'tacos.jpeg',
    description: `
        You enter La Taqueria to find out they have any kind of tacos you want.BUT you Broke! What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            The Taqueria owner is known for being a great, exellent human being. He understands your situation and instead of getting mad at you for not having any money. Instead he offers you a job washing dishes. He feeds you  and also gives you 25 dogecoins every day you help him.
        `,
        hp: 0,
        dogecoin: 25
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You migh be broke,but you are a good fighter and kicked the taqueria's owner butt. You leave happy because of the free meal. However, the taqueria's owner gave you some good pushes as well. This gave you -15 hp damge, BUT were able to steal 20 dogecoins from him.
        `,
        hp: -15,
        dogecoin: 20
    }, {
        id: 'run',
        description: 'Run away like a chicken',
        result: `
            As you make your way down the street and far enough away from la Taqueria, you start feeling dizzy, weak and confused. But after sitting down for a couple of minutes you feel like a champ. Because you didnt pull the trigger, plus you got better conditining for running.This gives you 30 hp.         
        `,
        hp: 15,
        dogecoin: 0
    }]
};

const unicorn = {
    id: 'unicorn',
    title: 'The MAGIC Unicorn',
    map: {
        top: '57%',
        left: '37%'
    },
    image: 'unicorn.jpeg',
    // audio: 'dragon.wav',
    // action: 'dragon-growl.aiff',
    description: `
        Your little sibling facetimes you crying to let you know that some bad people stole her the magic unicorn. As you walk down the ally, you see the bad inviduals with the stolen magic unicorn. what's your next move?
    `,
    choices: [{
        id: 'pictures',
        description: 'Take pictures to show the police',
        result: `
            Because of you were a coward and not brave at all to go kick some bootie, the bad dudes got away and took the unicorn to Africa. This caused your little sibling being sad for a very long time causing -1000 hp and -1200 dogecoins because you had to buy another magic unicorn from far far away.
        `,
        hp: -1000,
        dogecoin: -1200
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Your braveness and precession made the bad people surrondered. Because of this you were able to get the magic unicorn back and obtained extra 50 dogecoins the bad invduals possed, and gained extra muscles for using your moves... 50 hp.
        `,
        hp: 50,
        dogecoin: 50
    }, {
        id: 'scream',
        description: 'Scream for help for others to assist you',
        result: `
            Thanks to you screaming for help others run to assit you, but in the mean time the bad people ran away since they were riding the magic unicorn. You were silly and not brave at all. But some people felt bad for you and gave you  15 dogecoins to buy a new unicorn.
        `,
        hp: 0,
        dogecoin: 15,
    }]
};

const happyEnding = {
    id: 'happyEnding',
    title: 'A Happy Ending',
    map: {
        top: '105%',
        left: '45%'
    },
    prerequisites: ['tacos', 'unicorn'],
    image: 'happyEnding.jpeg',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
        Finally you get to a great bar where you meet a very interesting, well dressed, but super humble invidual. As the night goes on the invidual gets really confortable with you, he wants to give you 3 options to pick from to see if you are a good person.
    `,
    choices: [{
        id: 'fight',
        description: 'Find someone at the bar you would like to fight',
        result: 'He does not like fighting and he is not interested on helping you anymore',
        hp: 0,
        dogecoin: -10
    }, {
        id: 'negotiate',
        description: 'Talk to someone at the bar and sell them you car at a higher market value',
        result: 'He is super inpressed with your people and negotiating skills and decides to take you to work for him at ESPACIO EQUIS',
        hp: 35,
        dogecoin:1000
    }, {
        id: 'drinks',
        description: 'Drink as much as you want',
        result: 'You drink too much and you get funnier and funnier the more you drink. The invidual is very impressed with how much you can drink and with your clown skill. Unfortunally, that is not good since he wants someone who has selfcontrol',
        hp: 10,
        dogecoin: 0
    }]
};

const quests = [
    tacos, 
    unicorn,
    happyEnding,
];

export default quests;