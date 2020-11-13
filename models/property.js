const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Houses');

const Property = new mongoose.Schema({
  id: {type: Number},
  name: {type:String},
  neighborhoodId: {type: Number},
  neighborhood: {
    name: String,
    reviews: [{
        _id: {type: Number},
        topic: {type: String},
        user: {type: String},
        text: {type: String},
        likes: {type: Number},
        date: {type: Date},
        resident: {type:Boolean},
        flag: {type:Boolean}
    }]
  },

})

var PropertyModel = mongoose.model('Property', Property);

function findAll(callback) {
  PropertyModel.find({}, callback);
}


function findOne(id, callback) {
  PropertyModel.find({id: id}, callback);
}

function insertOne(Property, callback) {
  PropertyModel.create(Property, callback);
}

module.exports.findOne = findOne;
module.exports.findAll = findAll;
module.exports.insertOne = insertOne;
