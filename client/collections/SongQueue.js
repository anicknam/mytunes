// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add remove', (song) => {
      // start playing first song in the queue song
      //   if it's the first one in the queue
      //   or if we remove it from the queue
      if (this.indexOf(song) === 0 || this.indexOf(song) === -1) {
        this.playFirst();
      }
    }, this);

    this.on('ended dequeue', (song) => {
      this.remove(song);
    }, this);
  },

  playFirst: function () {
    this.at(0).play();
  }

});
