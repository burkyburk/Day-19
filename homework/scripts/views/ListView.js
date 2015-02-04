
var ListView = Backbone.View.extend({
	initialize: function(options) {
		var innerHtml = $('#list-view').html();
		var listTemplate = _.template(innerHtml);
		this.el = listTemplate(this.model.attributes);
		this.$el = $(this.el);
	}
})