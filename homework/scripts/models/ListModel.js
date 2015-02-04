var ListModel = Backbone.Model.extend({
	defaults: {
		todolist: '',
		
	},
	getTodoList: function() {

		return this.get('todolist');
	}
});