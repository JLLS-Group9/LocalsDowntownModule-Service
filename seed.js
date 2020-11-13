
const faker = require('faker')
const Promise = require("bluebird");
const Property = require("./db/models/property.js")
const fs = Promise.promisifyAll(require("fs"));


const topics = ['Community', 'Dog Owners', 'Parents', 'Commute']

function SingleTopic() {
  let random = Math.floor(Math.random()*4);
  let topic = topics[random]
 return topic;
}


function SingleReview(id) {
  let review = {}
  review.id = id;
  review.topic = SingleTopic();
  review.user = faker.name.firstName();
  review.text = faker.lorem.words(); //change to sentences later
  review.likes = Math.floor(Math.random()*11);
  review.date = faker.date.past();
  review.resident = faker.random.boolean();
  review.flag = false;

  return review;
}


function AllNeighborhoods() {
  var neighborhoods = [];

  for (var i = 0; i < 10; i ++) {
    var neighbor = {}
    neighbor.id = i;
    neighbor.name = communities[i];
    neighbor.reviews = []
    var j = 0
    while (j < 10) {
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
  let ran = Math.floor(Math.random() * 10)
  record.neighborhood = allcom[ran];

  return record
}


function seedData(entries) {
  let created = 1;

  console.log(SingleRecord(created))
  while (created <= entries) {
    Property.insertOne(SingleRecord(created), (err, success) => {
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














