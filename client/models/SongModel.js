// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // define fields from objects on server
  defaults: {
    artist: '',
    title: '',
    album: '',
    url: ''
  },

  // Triggering an event here will also trigger the event on the collection

  play: function() { // called from SongQueue
    this.trigger('play', this);
  },

  enqueue: function () { // called from LibraryEntryView
    this.trigger('enqueue', this);
  },

  dequeue: function () { // called from SongQueueEntryView
    this.trigger('dequeue', this);
  }

});
