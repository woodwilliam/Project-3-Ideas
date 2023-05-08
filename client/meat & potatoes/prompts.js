const qs = {
    leadQs: [
        {
            type: 'input',
            message: 'Who is in charge of this session',
            name: 'leadName'
        },
        {
            type: 'input',
            message: `What is the leads email?`,
            name: 'leadEmail'
        },
        {
            type: 'input',
            message: `What is the lead's phone number?`,
            name: 'telly'
        }
    ],
    musicanQs: [
        {
            type: 'input',
            message: `What is the musican's name?`,
            name: 'mName'
        },
        {
            type: 'input',
            message: 'What instrument(s) the musican play for this session?',
            name: 'mInstrument'
        },
        {
            type: 'input',
            message: `What is the musicians email?`,
            name: 'mEmail'
        }
    ],
    vocalistQs: [
        {
            type: 'input',
            message: `What is the vocalist name?`,
            name: 'vName'
        },
        {
            type: 'input',
            message: `What is the vocalist's email?`,
            name: 'vmail'
        },
        {
            type: 'input',
            message: `What is Vocalist's range? (low to high)`,
            name: 'range'
        }
    ],
    engineerQs: [
        {
            type: 'input',
            message: 'What is the name of your engieer?',
            name: 'eName'
        },
        {
            type: 'input',
            message: 'What DAW do they use?',
            name: 'eDAW'
        },
        {
            type: 'input',
            message: `What is the engineer's email?`,
            name: 'eEmail'
        },
        {
            type: 'input',
            message: 'How many years experiance do they have?',
            name: 'eXP'
        }
    ],
    producerQs: [
        {
            type: 'input',
            message: 'What is the name of your producer?',
            name: 'pName'
        },
        {
            type: 'input',
            message: 'What DAW do they use?',
            name: 'pDAW'
        },
        {
            type: 'input',
            message: `What is the producer's email?`,
            name: 'pmail'
        },
        {
            type: 'input',
            message: 'What is their specific producer role? (ie: vox, production, ect.)',
            name: 'role'
        }
    ],
    nextSteps: [
            {
            type: 'list',
            message: 'Whatcha wanna do next?',
            choices: ['ADD A MUSICIAN!', 'ADD A VOCALIST', 'ADD AN ENGINEER', 'ADD A PRODUCER', 'FINISH BUILDING MY SESSION'],
            name: 'options'
        }
    ],
    finalDeets: [
        {
            type: 'input',
            message: `When is the start time?`,
            name: 'start'
        },
        {
            type: 'input',
            message: `When is the hard out?`,
            name: 'end'
        },
        {
            type: 'input',
            message: 'Where is session taking place?',
            name: 'location'
        },
        {
            type: 'input',
            message: 'What is the address of location?',
            name: 'address'
        }

    ],
    finalSteps: [
        {
            type: 'list',
            message: 'Save or Trash Session Build',
            choices: ['Save Build', 'Trash Build'],
            name: 'choicer'
        }
    ]
};

module.exports = qs;