export const quests = [
    {
        id: 'forest',
        title: 'The Deep Forest',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'forest.jpg',
        description: `
            You enter a deep forest with glowing lights that dance as you search for blue gems.
        `,
        choices: [{
            id: 'climb',
            description: 'Climb up the trees to search for gems in the branches.',
            result: `
                Your tree search found 2 blue gems, but you fell down and got some nasty bruises, but you got a good lay of the land while you were up there, so you didn't get lost.
            `,
            hp: -5,
            days: -1,
            blue: 2,
            red: 0,
            yellow: 0
        }, {
            id: 'undergrowth',
            description: 'Search for gems through the undergrowth.',
            result: `
                You search through the underbrush and find 1 blue gem! However, you got lost while keeping your head down.
            `,
            hp: 0,
            days: -2,
            blue: 1,
            red: 0,
            yellow: 0
        }, {
            id: 'dig',
            description: 'You dig into the dirt for gems',
            result: `
                You don't find any gems, but you disturb a nest of underground sprites who bite and scratch at you as you flee.
            `,
            hp: -10,
            days: -1,
            blue: 0,
            red: 0,
            yellow: 0
        }]
},

{
    id: 'volcano',
    title: 'Fire Mountain',
    map: {
        top: '39%',
        left: '74%'
    },
    image: 'volcano.jpg',
    description: `
        You venture to the volcano in search of red gems.
    `,
    choices: [{
        id: 'lava',
        description: 'Reach into the lava.',
        result: `
            Oooooouuuuccch!!! You burn yourself badly but find 2 gems!
        `,
        hp: -10,
        days: -1,
        blue: 0,
        red: 2,
        yellow: 0
    }, {
        id: 'tunnels',
        description: 'You search through the scorching hot tunnels.',
        result: `
            You get lost and burned but find 1 gem.
        `,
        hp: -5,
        days: -2,
        blue: 0,
        red: 1,
        yellow: 0
    }, {
        id: 'top',
        description: 'You climb to the top of the volcano to see if any gems have been spurt out the opening.',
        result: `
            No luck! Dang!! No pain, though.
        `,
        hp: 0,
        days: -1,
        blue: 0,
        red: 0,
        yellow: 0
    }]
},

{
    id: 'swamp',
    title: 'Bogmire Swamp',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'swamp.jpg',
    description: `
        You enter a deep forest with glowing lights that dance as you wander by.
    `,
    choices: [{
        id: 'negotiate',
        description: 'Swamp Choice #1',
        result: `
            Swamp Results #1: You got lost. 
        `,
        hp: 0,
        days: -2,
        blue: 0,
        red: 0,
        yellow: 0
    }, {
        id: 'fight',
        description: 'Swamp Choice #2',
        result: `
            Swamp Results #2: You found one gem and got hurt badly.
        `,
        hp: -10,
        days: -1,
        blue: 0,
        red: 0,
        yellow: 1
    }, {
        id: 'run',
        description: 'Swamp Choice #3',
        result: `
            Swamp Results #3: You found 2 gems and only got hurt a little.
        `,
        hp: -5,
        days: -1,
        blue: 0,
        red: 0,
        yellow: 2
    }]
},

]