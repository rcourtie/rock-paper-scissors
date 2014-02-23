var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  id: String,
  players: [{
    id: String
  }]
});

mongoose.model('Game', GameSchema);
