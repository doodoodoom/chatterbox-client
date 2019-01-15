var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    // fetch messages with the renderMessage method as callback
    var messages = App.messages;
    for (var i = 0; i < messages.results.length; i ++) {
      MessagesView.renderMessage(messages.results[i]);
    }
  },

  renderMessage: function(message) {
    //should be able to add messages to the DOM
    //pass in array of messages as parameter
    var html = '';
    html += MessageView.render(message);
    this.$chats.append(html);
  }
};
  
  