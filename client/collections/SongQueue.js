// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', (song) => {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended dequeue', (song) => {
      this.remove(song);
      if (this.length) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function () {
    this.at(0).play();
  }

});
