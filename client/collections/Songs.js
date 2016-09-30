// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // server url
  url: 'https://api.parse.com/1/classes/songs/',

  // default sort
  comparator: function (model) {
    // concat title/artist to sort by title and then artist
    return model.get('title') + model.get('artist');
  },

  // first sort order (matches sort icon starting state)
  sortOrder: 'asc',

  initialize: function () {
    // do not sort on fetch
    this.fetch({ sort: false });
  },

  parse: function (response) {
    // get response results array
    return response.results;
  },

  sortDefault: function () {
    // do a silent sort in case we need to reverse the order
    this.sort({ silent: true });

    if (this.sortOrder === 'desc') {
      // reverse collection sort if order is descending
      this.set(this.models.reverse(), { sort: false });
    }

    // trigger sort event
    this.trigger('sort', this);
  },

  sortOrderFlip: function () {
    // flip sort order
    this.sortOrder = (this.sortOrder === 'asc') ? 'desc' : 'asc';
  }

});
