var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    // fetch messages with the renderMessage method as callback
    var messages = App.messages;
  
    RoomsView.$select.change(function() {
      RoomsView.selected = $('select option:checked').text();
      MessagesView.$chats.empty();
      for (var i = 0; i < messages.results.length; i ++) {
        if (messages.results[i].text && messages.results[i].roomname === RoomsView.selected) {
          MessagesView.renderMessage(messages.results[i]);
        }
      }
    }).trigger('change');
  },

  renderMessage: function(message) {
    //should be able to add messages to the DOM
    //pass in array of messages as parameter
    var html = '';
    html += MessageView.render(message);
    this.$chats.append(html);
  }
};
  
