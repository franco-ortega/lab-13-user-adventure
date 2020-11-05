export const quests = [
    {
        id: 'forest',
        title: 'The Deep Forest',
        image: 'forest.jpg',
        description: `
            You enter a deep forest with glowing lights that dance in the air as you search for blue gems.
        `,
        choices: [{
            id: 'climb',
            description: 'Climb up the trees to search for gems in the branches.',
            result: `
                Success! You found 2 blue gems in the trees!! However, you also came across a hive of pixie wasps that stung you several times. Althoug, you got a good lay of the land while you were up there. [-10hp, -3 days, 2 blue gems before type and tool adjustments]
            `,
            hp: -10,
            days: -3,
            blue: 2,
            red: 0,
            yellow: 0
        }, {
            id: 'undergrowth',
            description: 'Search for gems in the undergrowth.',
            result: `
                Success! You found 1 blue gem! However, you got lost due to keeping your head down so much. [-0hp, -5 days, 1 blue gem before type and tool adjustments]
            `,
            hp: 0,
            days: -5,
            blue: 1,
            red: 0,
            yellow: 0
        }, {
            id: 'dig',
            description: 'You dig into the dirt for gems',
            result: `
                You don't find any gems, and you disturb a nest of underground sprites who tear at your terribly with their fangs and claws as you flee. [-15hp, -4 days, 0 gems before type and tool adjustments]
            `,
            hp: -15,
            days: -4,
            blue: 0,
            red: 0,
            yellow: 0
        }]
    },

    {
        id: 'volcano',
        title: 'Fire Mountain',
        image: 'volcano.jpg',
        description: `
            You venture to the volcano in search of red gems. There is a large tunnel that seems to lead into the heart of the volcano as well as many smaller tunnels along the periphery.
        `,
        choices: [{
            id: 'lava',
            description: 'Go into the heart of the volcano.',
            result: `
                You encounter an angry fire elemental at the heart of the volcano. It burns you badly, but you manage to pick up 2 red gems as you flee! [-15hp, -4 days, 2 red gems before type and tool adjustments]
            `,
            hp: -15,
            days: -4,
            blue: 0,
            red: 2,
            yellow: 0
        }, {
            id: 'tunnels',
            description: 'You search through the tunnels near the exterior of the volcano.',
            result: `
                You get lost in the tunnels and are attacked by a flame worm but your effort does earn you 1 red gem. [-10hp, -5 days, 1 red gem before type and tool adjustments]
            `,
            hp: -10,
            days: -5,
            blue: 0,
            red: 1,
            yellow: 0
        }, {
            id: 'top',
            description: 'You climb to the top of the volcano to see if any gems have been spurt out the opening.',
            result: `
                No luck! Dang!! Although, you do manage to avoid the lava raining down around you. Phew!! [-0hp, -3 days, 0 gems before type and tool adjustments]
            `,
            hp: 0,
            days: -3,
            blue: 0,
            red: 0,
            yellow: 0
        }]
    },

    {
        id: 'swamp',
        title: 'Bogmire Swamp',
        image: 'swamp.jpg',
        description: `
            You wade into an eerie swamp filled with misty, foul air in search of yellow gems.
        `,
        choices: [{
            id: 'wander',
            description: 'You charge deep into the swamp.',
            result: `
                You get lost and find no gems, but at least no foul beasts find you either. [-0hp, -5 days, 0 gems before type and tool adjustments]
            `,
            hp: 0,
            days: -5,
            blue: 0,
            red: 0,
            yellow: 0
        }, {
            id: 'ouch',
            description: 'You sink into the muck and feel around for gems at the bottom of bogs.',
            result: `
                You find a gem! You also find water sprites with sharp teeth. Ouch!! [-10hp, -4 days, 1 yellow gem before type and tool adjustments]
            `,
            hp: -10,
            days: -4,
            blue: 0,
            red: 0,
            yellow: 1
        }, {
            id: 'run',
            description: 'You stick to dry land and search patches of mushrooms and other fungus.',
            result: `
                Success!! You find 2 yellow gems! You also inhale some spores that make you queasy. [-5hp, -4 days, 2 yellow gems before type and tool adjustments]
            `,
            hp: -5,
            days: -3,
            blue: 0,
            red: 0,
            yellow: 2
        }]
    },

]