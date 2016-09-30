// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template(
    `<td class="table-buttons">
       <i class="fa fa-times-circle remove-song" aria-hidden="true"></i>
     </td>
     <td>
       (<%= artist %>)
     </td>
     <td class="table-buttons">
       <i class="fa fa-chevron-circle-down move-song-down" aria-hidden="true"></i>
       <i class="fa fa-chevron-circle-up move-song-up" aria-hidden="true"></i>
     </td>
     <td>
       <%= title %>
     </td>
     <td>
       <%= album %>
     </td>`),

  events: {
    'click .remove-song': function () {
      this.model.dequeue();
    },
    'click .move-song-down': function () {
      let collection = this.model.collection;
      if (collection.length > 1) {
        let index = collection.indexOf(this.model);
        let newIndex = (index + 1) % collection.length;
        this.model.dequeue();
        collection.add(this.model, { at: newIndex });
      }
    },
    'click .move-song-up': function () {
      let collection = this.model.collection;
      if (collection.length > 1) {
        let index = collection.indexOf(this.model);
        let newIndex = (index - 1 + collection.length) % collection.length;
        this.model.dequeue();
        collection.add(this.model, { at: newIndex });
      }
    }
  },

  initialize: function () {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
