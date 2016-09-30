// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    artist: '',
    title: '',
    album: '',
    url: ''
  },

  // Triggering an event here will also trigger the event on the collection

  play: function() {
    this.trigger('play', this);
  },

  enqueue: function () {
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    this.trigger('dequeue', this);
  },

  ended: function () {
    this.trigger('ended', this);
  }

});
