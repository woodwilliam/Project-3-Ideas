const Lead = require('../../cards/lead');
const Musician = require('../../cards/musician')
const Engineer = require('../../cards/engineer');
const Vocalist = require('../../cards/vocalist');
const Producer = require('../../cards/producer');
const FinalDeets = require('../../cards/finalDeets')
const qs = require('./prompts');
const generateHtml = require('./generateHtml');
let newLead = [];
let newMusician = [];
let newEngineer = [];
let newVocalist = [];
let newProducer = [];
let epilogue = [];
function createLead(fileName, data) {
    window
        .prompt(qs.leadQs)
        .then((response) => {
            let leader = new Lead(response.leadName, response.leadEmail, response.telly,)
            newLead.push(leader);
            console.log("new lead has arrived!");
            window
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        });
        
}

function createMusician(fileName, data) {
    window
        .prompt(qs.musicanQs)
        .then((response) => {
            let player = new Musician(response.mName, response.mEmail, response.mInstrument,)
            newMusician.push(player);
            console.log("musican added!");
            window
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        });
        
}

function createVocalist(fileName, data) {
    window
        .prompt(qs.leadQs)
        .then((response) => {
            let voxbox = new Vocalist(response.vName, response.vmail, response.range,)
            newVocalist.push(voxbox);
            console.log("vocalist added!");
            window
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        });
        
}

function createEng(fileName, data) {
    window
        .prompt(qs.engineerQs)
        .then((response) => {
            let engineer = new Engineer(response.eName, response.eEmail, response.eDAW, response.eXP) 
            newEngineer.push(engineer);
            console.log("new engineer joining the team!");
            window
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        })

}

function createProducer(fileName, data) {
    window
        .prompt(qs.internQs)
        .then((response) => {
            let weTheBest = new Producer(response.pName, response.pmail, response.role,) 
            newProducer.push(weTheBest);
            console.log("DEEEEEEEEEE JAAAAYYYYYY KAHLID");
            window
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        })
}

function optionsResponse(response) {
    console.log(response.options);
    let fleeerp = response.options
    if (fleeerp == 'ADD AN MUSICIAN!') {
        createMusician();
    } else if (fleeerp == 'ADD A VOCALIST!') {
        createVocalist();
    } else if (fleeerp == 'ADD AN ENGINEER!') {
        createEng();
    } else if (fleeerp == 'ADD A PRODUCER!') {
        createProducer();
    } else if (fleeerp == 'FINISH BUILDING MY TEAM') {
        lastButNotLeast();
        window.prompt(qs.finalSteps).then(respawns => smashOrPass(respawns))
    } else {console.log('hmmmmm...something is wrong')
    }
}

function smashOrPass(response) {
    let framk = response.choicer;
    if(framk == 'Save Build') {
        generateHtml(newLead, newMusician, newVocalist, newEngineer, newProducer, epilogue);
        let newLead = [];
        let newMusician = [];
        let newEngineer = [];
        let newVocalist = [];
        let newProducer = [];
        let epilogue = [];
    } else if(framk == 'Trash Build') {
        let newLead = [];
        let newMusician = [];
        let newEngineer = [];
        let newVocalist = [];
        let newProducer = [];
        let epilogue = [];
    }
}

function lastButNotLeast (fileName, data) {
    window
    .prompt(qs.finalDeets)
    .then((response) => {
        let sessionDeetz = new FinalDeets(response.start, response.end, response.location, response.address) 
        epilogue.push(sessionDeetz);
        console.log("Session Built");
        window
            .prompt(qs.nextSteps)
            .then((response) =>
            optionsResponse(response)
    );
    }).catch(error =>{
        console.log(error);
    })
}

function init() {
    createLead();
}

module.exports = {init, createLead};