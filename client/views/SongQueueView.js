// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add remove reset', this.render, this);
  },

  events: {
    'click .clear-queue': 'clearQueue'
  },

  clearQueue: function () {
    this.collection.reset();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.addClass('song-queue-table');
    this.$el.html('<th colspan="3">Song Queue<span class="clear-queue">Clear all</span></th>').append(
      this.collection.map(function(song) {
        // FIXME: why do we re-create this every time we render?
        return new SongQueueEntryView({ model: song }).render();
      })
    );
  }

});
