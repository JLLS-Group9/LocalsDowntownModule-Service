
const faker = require('faker')
const Promise = require("bluebird");
const db = require("./db/models/property.js")
const fs = Promise.promisifyAll(require("fs"));


//things to reeseed add a color property
//fix dates
//cahnge resident from boolean to actual string
//add the profile image

const topics = ['Community', 'Dog Owners', 'Parents', 'Commute']

const dates = ['1 year ago', '3 months ago', '2 months ago', '1 month ago', '2 weeks ago', '2 years ago', '6 months ago', '7 months ago']

function SingleTopic() {
  let random = Math.floor(Math.random()*4);
  let topic = topics[random]
 return topic;
}

const randomNumber = () => Math.floor(Math.random() * (100 - 70 + 1)) + 70;

const colours = [
  '#00adbb', '#fa8c68', '#ceb6ff',
  '#740631', '#f2c430', '#052286', '#ff5e3f'
];
const getColour = () => colours[Math.floor(Math.random() * colours.length)];

const resident = ['resident', 'vistor']

function SingleReview(id) {
  let review = {}
  review.id = id;
  review.topic = SingleTopic();
  review.user = faker.name.firstName();
  review.text = faker.lorem.sentences(); //change to sentences later
  review.likes = Math.floor(Math.random()*11);
  review.date = dates[Math.floor(Math.random()*8)];
  review.resident = resident[Math.floor(Math.random()*2)];
  review.flag = false;
  review.color = getColour();
  return review;
}


function AllNeighborhoods() {
  var neighborhoods = [];

  for (var i = 0; i < 10; i ++) {
    var neighbor = {}
    neighbor.id = i;
    neighbor.name = communities[i];
    neighbor.car = randomNumber();
    neighbor.dog = randomNumber();
    neighbor.parking = randomNumber();
    neighbor.quiet = randomNumber();
    neighbor.alone = randomNumber();
    neighbor.sidewalks = randomNumber();
    neighbor.wildlife = randomNumber();
    neighbor.holiday = randomNumber();
    neighbor.yards = randomNumber();
    neighbor.plan = randomNumber();
    neighbor.streets = randomNumber();
    neighbor.restaurants = randomNumber();
    neighbor.grocery = randomNumber();
    neighbor.kids = randomNumber();
    neighbor.friendly = randomNumber();
    neighbor.community = randomNumber();
    neighbor.reviews = []
    var j = 0
    while (j < 24) {
      neighbor.reviews.push(SingleReview(j))
      j++
    }

    neighborhoods.push(neighbor)
  }

  console.log(neighborhoods[0].reviews[0])
  return neighborhoods;
}


const communities = ['sunset', 'mission', 'castro','sea cliff', 'chinatown', 'richmond', 'ocean', 'excelisior', 'downtown', 'monteray']

var allcom = AllNeighborhoods();

function SingleRecord(id) {
  let record = {};
  record.id = id
  record.name = `${faker.address.streetAddress()} ${faker.address.streetName()}`
  let ran = Math.floor(Math.random() * 10)
  record.neighborhood = allcom[ran];

  return record
}


function seedData(entries) {
  let created = 1;

  console.log(SingleRecord(created))
  while (created <= entries) {
    db.insertOne(SingleRecord(created), (err, success) => {
      if (err) {
        console.log(err)
      } else {
        console.log('inserted porp')
      }
    });
    created++;
  }
}

seedData(100)














