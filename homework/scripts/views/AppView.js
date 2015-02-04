var AppView = Backbone.View.extend({
  el: '#app-view',
  initialize: function() {
    console.log('Initialize AppView');

    _.bindAll(
      this,
      'render',
      'onSubmitButtonClick',
      'onListAdded'
    );

    this.$firstName = $('#first-name');
    this.$lastName = $('#last-name');
    this.$age = $('#age');
    this.$submitButton = $('#submit-button');
    this.$peopleList = $('#people-list');

    this.people = new TodoListCollection();

    this.$submitButton.on('click', this.onSubmitButtonClick);

    this.people.on('add', this.onListAdded);


  },

  render: function() {
    console.log(this);
    console.log(this.newPerson.get('age'));
   
  },

  onSubmitButtonClick: function() {
    console.log('onSubmitButtonClick');

    this.people.add({
      firstName: this.$firstNamee,
      lastName: this.$lastName.val(),
      age: this.$age.val()
    });
    console.log(this.people);

  },

  onListAdded: function(ListModel) {
    console.log(ListModel.attributes);
    console.log(ListModel.getTodoList());
    var newPersonView = new PersonView({model: ListModel});
    this.$peopleList.append(newPersonView.$el);
  }
});