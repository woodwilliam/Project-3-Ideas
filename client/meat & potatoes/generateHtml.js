const fs = require("fs");
function generateHtml(lead, musician, vocalist, engineer, producer, session) {
  const topOfHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <Link rel="stylesheet" href="./public/style.css">
        <title>Current Session Build!</title>
    </head>
    <body>
        <div class = "card-container">`;
  const bottomOfHtml = `
        </div>
    </body>
    </html>`;
  let leadCard = `
                <div class = "card">
            <div class = "card-header"><h3>${lead[0].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Manager</h4></div>
                <p>Email: ${lead[0].email}</p>
                <p>Phone: ${lead[0].phone}</p>
            </div> 
        </div>`;
  let sessionCard = `
                <div class = "card">
            <div class = "card-header"><h3>${session[0].location}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Manager</h4></div>
                <p>Address: ${session[0].address}</p>
                <p>Start Time: ${session[0].start}</p>
                <p>Hard Out: ${session[0].end}</p>
            </div> 
        </div>`;
  let engineerCard = ``;
  let musicianCard = ``;
  let producerCard = ``;
  let vocalistCard = ``;
  for (let i = 0; i < engineer.length; i++) {
    ehotel = `
                <div class = "card">
            <div class = "card-header"><h3>${engineer[i].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Engineer</h4></div>
                <p>DAW Prefrence: ${engineer[i].daw}</p>
                <p>${engineer[i].xp} years of experiance</p>
                <p>Email: ${engineer[i].email}</p>
            </div> 
        </div>`;
    engineerCard = engineerCard.concat(ehotel);
  }

  for (let i = 0; i < musician.length; i++) {
    mhotel = `
                <div class = "card">
            <div class = "card-header"><h3>${musician[i].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Intern</h4></div>
                <p>ID: ${musician[i].instrument}</p>
                <p>Email: ${musician[i].email}</p>
            </div> 
        </div>`;
    musicianCard = musicianCard.concat(mhotel);
  }

  for (let i = 0; i < vocalist.length; i++) {
    mhotel = `
                <div class = "card">
            <div class = "card-header"><h3>${vocalist[i].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Intern</h4></div>
                <p>Vocal Range: ${vocalist[i].range}</p>
                <p>Email: ${vocalist[i].email}</p>
            </div> 
        </div>`;
    vocalistCard = vocalistCard.concat(vhotel);
  }

  for (let i = 0; i < producer.length; i++) {
    photel = `
                <div class = "card">
            <div class = "card-header"><h3>${producer[i].name}</h3></div>
            <div class = "card-body">
                <div class = "position"><h4>Intern</h4></div>
                <p>Vocal Range: ${producer[i].range}</p>
                <p>Email: ${producer[i].email}</p>
            </div> 
        </div>`;
    producerCard = producerCard.concat(photel);
  }

  let finalForm = ``.concat(
    topOfHtml,
    leadCard,
    engineerCard,
    producerCard,
    vocalistCard,
    musicianCard,
    sessionCard,
    bottomOfHtml
  );
//instead of writing html file we could just database the finalForm html
// it would be saved to the users' model in an array
// at that point you can go to see users' saved builds
//when you access saved builds you get an option to post build. 
  fs.writeFile(`index.html`, finalForm, (err) =>
    err ? console.error(err) : console.log("Success")
  );
}

module.exports = generateHtml;
