/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			if(this.get('completed')) {
				var newCompleted = false;
				var i = this.get('title').indexOf(' --done');
				var newTitle = this.get('title').substring(0, i);
			} else {
				var newCompleted = true;
				var newTitle = this.get('title') + ' --done';
			}
			this.save({
				title: newTitle,
				completed: newCompleted
				//completed: !this.get('completed')
			});
		},

		// Toggle the `priority` state of this todo item.
		togglePriority: function () {
			priority: !this.get('priority')
		}
	});
})();
