const fs = require('fs')
const faker = require('faker')
const Promise = require("bluebird");
const Property = require("./database/index.js")

function SingleTopic() {
  let random = Math.floor(Math.random()*4);
  if (random === 0) {
    random = 'Community';
  } else if (random === 1) {
    random = 'Dog Owners';
  } else if (random === 2) {
    random = 'Parents';
  } else {
    random = 'Commute'
  }
 return random;
}

//function that creates reviews
function SingleReview(id) {
  let review = {}
  review.id = id;
  review.topic = SingleTopic();
  review.username = faker.name.firstName();
  review.text = faker.lorem.word(); //change to sentences later
  review.likes = Math.floor(Math.random()*11);
  review.date = faker.date.past();
  review.resident = faker.random.boolean();


  return review;
}


function seedReview(entries) {
  let created = 1;
  let filetext = [];

  while (created <= entries) {
    var data = SingleReview(created);
    filetext.push(JSON.stringify(data));
    created++;
  }

  return new Promise ((resolve, reject) => {
    fs.writeFile('./review10.js', filetext, (err, success) => {
      if (err) {
        reject(err)
      } else {
        resolve(success)
      }
    })
  })

}

seedReview(15)
.then(()=>{console.log('it worked')})
.catch(()=>{console.log('read error message')})