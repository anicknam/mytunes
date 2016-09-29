// SongNameView.js - Defines a backbone view class for the song name.
var SongNameView = Backbone.View.extend({

  el: '<div class="song-name-view"><div class="now-playing"></div><div class="song-name"></div></div>',

  initialize: function () {
  },

  setSongName: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    this.$el.find('.now-playing').text(this.model ? 'Now playing...' : '');
    this.$el.find('.song-name').text(this.model ? this.model.get('title') : '');
    return this.$el;
  }

});
