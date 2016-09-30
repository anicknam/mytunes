// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  // default sort and sort order
  comparator: (model) => {
    return model.get('title') + model.get('artist');
  },
  sortOrder: 'asc',

  initialize: function () {
    this.fetch({ sort: false });
  },

  parse: function (response) {
    return response.results;
  },

  sortDefault: function () {
    this.sort({ silent: true });
    if (this.sortOrder === 'desc') {
      // reverse collection sort
      this.set(this.models.reverse(), { sort: false });
    }

    this.trigger('sort', this);
    this.sortOrder = (this.sortOrder === 'asc') ? 'desc' : 'asc';
  }

});
