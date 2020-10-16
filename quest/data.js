export const quests = [
    {
        id: 'monsters',
        title: 'A Den of Monsters',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'monsters.jpg',
        description: `
            You enter a deep forest with glowing lights that dance as you wander by.
        `,
        choices: [{
            id: 'negotiate',
            description: 'Negotiate with them',
            result: `
                Knowing the monsters are not too bright, you offer to go buy them all
                turkey dinners from the village pub. They give you 35 gold for meals
                that will never be delivered. I hope you can live with yourself. 
            `,
            hp: 0,
            gold: 35
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
                Brandishing your sword you let out a warrior's cry and charge into the monsters
                hacking and slashing. Before long you stand panting gazing across the bodies of
                your vanquished foes. The bad news is you take 30 hp damage. The good news is you
                find 50 gold.
            `,
            hp: -30,
            gold: 50
        }, {
            id: 'run',
            description: 'Run away like good Sir Robin',
            result: `
                As you make a dash for the door a giant spider descends and take a bite of flesh,
                causing 50 hp damage.
            `,
            hp: -50,
            gold: 0
        }]
},

{
    id: 'dragon',
    title: 'A Problem Dragon',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
}
]