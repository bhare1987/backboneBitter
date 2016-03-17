var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates');
var $ = require('jquery');
var moment = require('moment');
var BitterModel = require('./bitterModel');

module.exports = Backbone.View.extend({
  model: null,
  collection: null,
  el: '.addFormContainer',
  template: _.template(templates.addForm),
  events: {
    'click .fa-plus-circle': 'showAdd',
    'click button[name="submitAdd"]': 'submitAdd'
  },
  showAdd: function(){
    this.$el.find('.addForm').toggleClass('hide');
  },
  submitAdd: function(event){
    event.preventDefault();
    this.model.set({
      content: this.$el.find('textarea[name="content"]').val(),
      img: this.$el.find('input[name="img"]').val(),
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    });
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    $('.addForm').addClass('hide');
    this.model.save();
    this.collection.add(this.model);
    this.model = new BitterModel({});
  },
  initialize: function(){
    this.model = new BitterModel({});
    this.$el.append(this.render().el);
  },
  render: function(){
    var output = this.template();
    this.$el.html(output);
    return this;
  },

});
