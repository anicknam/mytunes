// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    // render on server sync and sort
    this.collection.on('sync sort', this.render, this);
  },

  events: {
    'click .library-sort': function () {
      // on sort icon click, sort library and flip sort order
      this.collection.sortDefault();
      this.collection.sortOrderFlip();
    }
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // get sort icon type from sort order var
    let sortOrder = this.collection.sortOrder;
    let sortButton = `<i class="fa fa-sort-alpha-${sortOrder} library-sort" aria-hidden="true"></i>`;

    this.$el.addClass('library-table');
    this.$el.html(`<th colspan="3">Library${sortButton}</th>`).append(
      this.collection.map(function(song) {
        // FIXME: why do we re-create this every time we render?
        return new LibraryEntryView({ model: song }).render();
      })
    );
  }

});
