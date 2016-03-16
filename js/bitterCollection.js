var Backbone = require('backbone');
var bitterModel = require('./bitterModel');

module.exports = Backbone.Collection.extend({
  model: bitterModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/brandon-bitter',
  initialize: function(){}
});
