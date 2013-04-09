VanillaRailsEmber.ApplicationView = Ember.View.extend({

});





VanillaRailsEmber.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});