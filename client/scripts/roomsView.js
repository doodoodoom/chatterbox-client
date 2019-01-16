var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  selected: null,

  initialize: function() {
    //get messages data
    //iterate through all messages
    //run renderRoom with each message
    
    var rooms = App.messages;
    for (var i = 0; i < rooms.results.length; i ++) {
      if (rooms.results[i].roomname) {
        RoomsView.renderRoom(rooms.results[i]);
      }
    }  
  },

  renderRoom: function(room) {
    var html = '';
    html += Rooms.render(room);
    this.$select.append(new Option(room.roomname, html));
  }
};
