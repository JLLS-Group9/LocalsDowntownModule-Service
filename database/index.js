var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Properties');

var PropertySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  neighborhood: Object


});

var PropertyModel = mongoose.model('Property', PropertySchema);

// findAll retrieves all stories
function findAll(callback) {
  PropertyModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  PropertyModel.find({id: id}, callback);
}

// insertOne inserts a story into the db
function insertOne(Property, callback) {
  PropertyModel.create(Property, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;