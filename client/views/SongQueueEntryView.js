// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><span class="remove-song"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></span>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // FIXME: do something
    },
    'click .remove-song': function () {
      this.model.dequeue();
    }
  },

  initialize: function () {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
