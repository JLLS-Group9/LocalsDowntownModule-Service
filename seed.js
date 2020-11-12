const fs = require('fs')
const faker = require('faker')
const Promise = require("bluebird");
const Property = require("./database/index.js")

let review = faker.lorem.sentences();
console.log(review);


//function to determine topic
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
  review.yard = Math.floor(Math.random()*11);
  // review.car = faker.random.number();
  // review.holiday = faker.random.number();
  // review.dogs = faker.random.number();
  // review.parking = faker.random.number();
  // review.kids = faker.random.number();
  // review.atleast5years = faker.random.number();
  // review.streetslit = faker.random.number();
  // review.friendlyneighbor = faker.random.number();
  // review.sidewalks = faker.random.number();
  // review.restraunts = faker.random.number();
  // review.wildlife = faker.random.number();
  // review.walkalone = faker.random.number();
  // review.communityevent = faker.random.number();
  // review.quiet = faker.random.number();
  // review.groccery = faker.random.number();

  return review;
}


//function to determine neighborhood
function Neighborhood(id) {
  if (id === 0) {
    return 'sunset';
  } else if (id === 1) {
    return 'mission';
  } else if (id === 2) {
    return 'castro';
  } else if (id === 3) {
    return 'sea cliff';
  } else if (id === 4) {
    return 'chinatown';
  } else if (id === 5) {
    return 'richmond';
  } else if (id === 6) {
    return 'ocean';
  } else if (id === 7) {
    return 'excelisior';
  } else if (id === 8) {
    return 'downtown';
  } else if (id === 9) {
    return 'monteray';
  } else  {
    return 'silver';
  }
}

//function to create one neighborhood
function SingleNeighborhood() {
  let neighborhood = {};
  neighborhood.id = Math.floor(Math.random()*11);
  neighborhood.name = Neighborhood(neighborhood.id)
  neighborhood.reviews = [];

  var i = 0;
  while (i < 2) { //create more reviews later
    neighborhood.reviews.push(SingleReview(i))
    i++
  }

  return neighborhood;
}

// function that creates one record
function  SingleRecord(id) {
  let record = {};
  record.id = id;
  record.neighborhood = SingleNeighborhood();

  return record;

}

//function to seed multiple records into a file

function seedData(entries) {
  let created = 1;
  let filetext = [];

  while (created <= entries) {
    var data = SingleRecord(created);
    filetext.push(JSON.stringify(data));
    created++;
  }

  return new Promise ((resolve, reject) => {
    fs.writeFile('./data.js', filetext, (err, success) => {
      if (err) {
        reject(err)
      } else {
        resolve(success)
      }
    })
  })

}

seedData(1)
.then(()=>{console.log('it worked')})
.catch(()=>{console.log('read error message')})

//
//support mvp
//if we want write to a db
//test out with small data
//get comfy w inserting data
//csv files
//json files

// fs.readFile('./data.js', 'utf8',(err, data) => {
//   if (err) throw err;
//   var format = JSON.parse(data)
//   Property.insertOne(format, (err, success) => {
//     if (err) {
//       console.log('err')
//     } else {
//       console.log('inserted')
//     }
//   });
// });

Property.findAll((err, success) => {
  if (err) {
    console.log('errr')
  } else {
    console.log(success[0].neighborhood.reviews)
  }
});