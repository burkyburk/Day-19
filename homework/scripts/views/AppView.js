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

    
    this.$lastName = $('#last-name');
    this.$submitButton = $('#submit-button');
    this.$listbox = $('#list-box');
    this.people = new TodoListCollection();

    this.$submitButton.on('click', this.onSubmitButtonClick);

    this.people.on('add', this.onListAdded);


  },

  render: function() {
    
   
  },

  onSubmitButtonClick: function() {
    console.log('onSubmitButtonClick');

    this.people.add({
      
      lastName: this.$lastName.val(),
      
    });
    console.log(this.people);

  },

  onListAdded: function(ListModel) {
    console.log(ListModel.attributes);
    console.log(ListModel.getTodoList());
    var newPersonView = new PersonView({model: ListModel});
    this.$listbox.append(newPersonView.$el);
  }
});