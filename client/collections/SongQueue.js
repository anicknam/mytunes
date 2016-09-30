// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add remove', (song) => {
      // start playing first song in the queue song
      //   if it's the first one in the queue
      //   or if we remove it from the queue and the queue is not empty
      if (this.indexOf(song) === 0 ||
          (this.indexOf(song) === -1 && this.length)) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', (song) => {
      // remove song from queue
      this.remove(song);
    }, this);
  },

  // play first song in queue
  playFirst: function () { // only called from above
    this.at(0).play();
  }

});
