import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
	this.route('catchall', { path: '/*wildcard' });

	this.resource('home', { path: '/' }, function() {
		this.route('landing', { path: '/' });
	});
});