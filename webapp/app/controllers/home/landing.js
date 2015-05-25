import Ember from 'ember';

export default Ember.Controller.extend({

	creations : [
		{ value: "code",   url : "https://github.com/nbdevries" },
		{ value: "videos", url : "https://www.youtube.com/channel/UC26EHXk4od2pSHh9VJU5R8Q/videos"},
		{ value: "photos", url : "https://www.flickr.com/gp/129093149@N04/5856s4"}
	],

	currCreation : "",
	nextCreation : "",
	prevCreation : "",

	init : function () {
		if (this.currCreation === "") {
			this.set("prevCreation", this.creations[this.creations.length - 1]);
			this.set("currCreation", this.creations[0]);
			this.set("nextCreation", this.creations[1]);
		}
	},

	actions : {
		setCreation : function (creation) {
			var creations = this.get("creations");
			var currIndex = creations.indexOf(creation);

			this.set("currCreation", creation);

			if (currIndex === 0) {
				this.set("prevCreation", creations[creations.length - 1]);
			} else {
				this.set("prevCreation", creations[currIndex-1]);
			}

			if (currIndex === creations.length - 1) {
				this.set("nextCreation", creations[0]);
			} else {
				this.set("nextCreation", creations[++currIndex]);
			}	
		},

		openCreation : function (creationURL) {
			var win = window.open(creationURL, '_blank');
  			win.focus();
		}
	}
});
