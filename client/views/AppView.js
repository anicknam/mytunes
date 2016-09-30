// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    // create all views
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songNameView = new SongNameView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    //   currentSong is defined in the AppModel
    this.model.on('change:currentSong', function(model) {
      // update player and song view with song name
      this.playerView.setSong(model.get('currentSong'));
      this.songNameView.setSongName(model.get('currentSong'));
    }, this);
  },

  // aggregate all views to render
  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.songNameView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
