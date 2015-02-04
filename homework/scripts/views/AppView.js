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
    this.list = new TodoListCollection();

    this.$submitButton.on('click', this.onSubmitButtonClick);

    this.list.on('add', this.onListAdded);


  },

  render: function() {
    
   
  },

  onSubmitButtonClick: function() {
    console.log('onSubmitButtonClick');

    this.list.add({
      
      lastName: this.$lastName.val(),
      
    });
    console.log(this.list);

  },

  onListAdded: function(ListModel) {
    console.log(ListModel.attributes);
    console.log(ListModel.getTodoList());
    var newListView = new ListView({model: ListModel});
    this.$listbox.append(newListView.$el);
  }
 
});
