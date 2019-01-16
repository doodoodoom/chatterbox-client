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
    //console.log(RoomsView.$select.val());
    // this.$select
    //   .change(function() {
    //     this.selected = $( "select option:checked" ).text();
    //     console.log(this.selected);
    //   })
    //   .trigger( "change" );
    
  },

  renderRoom: function(room) {
    var html = '';
    html += Rooms.render(room);
    this.$select.append(new Option(room.roomname, html));
  }

};

//   $( "select" )
//   .change(function() {
//     console.log($( "select option:selected" ))
//   })
//   .trigger( "change" );
