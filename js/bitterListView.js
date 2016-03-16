var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates');
var $ = require('jquery');
var BitterView = require('./bitterView');

module.exports = Backbone.View.extend({
  collection: null,
  el: '.listView',
  events: function(){},
  initialize: function(){
    this.addBittersToDom();
    this.listenTo(this.collection, 'update', this.addBittersToDom);
    this.listenTo(this.collection, 'change', this.addBittersToDom);
  },
  buildBitter: function(data){
    var modelView = new BitterView({model: data});
    this.$el.append(modelView.render().el);
  },
  addBittersToDom: function(){
    $('.listView').html('');
    this.collection.models.forEach((function(el){
      this.buildBitter(el);
    }).bind(this));
  }

});
