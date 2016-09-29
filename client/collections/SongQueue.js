// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //this.on('enqueue', function (t) { console.log('songqueue enqueue'); this.add(t); } );
  }

});
