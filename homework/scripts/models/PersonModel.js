var ListModel = Backbone.Model.extend({
	defaults: {
		lastName: '',
		
	},
	getFullName: function() {

		return this.get('lastName');
	}
});