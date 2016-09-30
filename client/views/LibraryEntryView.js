// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template(`
    <td class="table-buttons">
      <i class="fa fa-plus-circle enqueue-song" aria-hidden="true"></i>
    </td>
    <td>
      (<%= artist %>)
    </td>
    <td>
      <%= title %>
    </td>
    <td>
      <%= album %>
    </td>`),

  events: {
    // enqueue song when add button is clicked
    'click .enqueue-song': 'enqueueSong'
  },

  enqueueSong: function () {
    this.model.enqueue();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
