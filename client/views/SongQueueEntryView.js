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
      // dequeue song when remove button is clicked
      this.model.dequeue();
    },

    'click .move-song-down': function () {
      // move song down (loop around) when move down button is clicked
      this.moveSong('down', this.model);
    },

    'click .move-song-up': function () {
      // move song up (loop around) when move up button is clicked
      this.moveSong('up', this.model);
    }
  },

  moveSong: function (direction, song) {
    // move the song up/down the queue (and loop around)
    //   do not move the song if it's the only one
    //   dequeue the song and insert it back in the right place
    //   dequeueing the song makes sure that the song at the top of the queue starts playing

    let collection = song.collection; // store collection because we will remove the song from the collection
    if (collection.length > 1) {
      let index = collection.indexOf(song);
      let newIndex = (direction === 'up' ?
                       index - 1 + collection.length : index + 1) % collection.length;
      song.dequeue();
      collection.add(song, { at: newIndex });
    }
  },

  render: function() {
    let $element = this.$el.html(this.template(this.model.attributes));
    return $element;
  }
});
