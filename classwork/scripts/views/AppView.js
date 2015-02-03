var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		
		// _.bindAll(
		// 	this, 
		// 	'onButtonClick'
		// 	);

		var newPerson = new PersonModel();

		console.log(newPerson.get('age'));

		newPerson.set({
			firsName: 'Jacob',
			lastName: 'Burkhart'
		});
		console.log(newPerson);

	}
});
