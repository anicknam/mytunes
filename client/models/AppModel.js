// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // on song queue play, set current song
    this.get('songQueue').on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    // on song queue dequeue/reset, set current song to null to stop the player, if there are no songs let
    this.get('songQueue').on('dequeue reset', function(song) {
      if (this.get('songQueue').length === 0) {
        this.set('currentSong', null);
      }
    }, this);

    // on library enqueue, add copy of song to song queue
    this.get('library').on('enqueue', function(song) {
      // create a copy of the song so that we can add a song multiple times to the queue
      let newSong = song.clone();
      this.get('songQueue').add(newSong);
    }, this);
  }

});
