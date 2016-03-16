var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterModel = require('./bitterModel');
var FormView = require('./formView');
var templates = require('./templates');
var BitterListView = require('./bitterListView');
var BitterView = require('./bitterView');

module.exports = Backbone.Router.extend({
  activeView: undefined,
  routes: {
    '': 'homepage',
    'home': 'homepage',
    'detail': 'detail',
  },
  homepage: function(){
    var bitterCollection = new BitterCollection();
    var addFormContent = new FormView({collection: bitterCollection});
    bitterCollection.fetch().then((function(data){
      this.setActiveView(new BitterListView({collection: bitterCollection}));
    }).bind(this));
  },
  setActiveView: function(view){
    this.activeView && this.activeView.remove();
    this.activeView = view;
  },
});
