var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    // fetch messages with the renderMessage method as callback
    //debugger;
    console.log(MessagesView.$chats);
    var test = [{username: 'bob', text: 'something'}, {username: 'dylan', text: 'something else'}];
    // debugger;
    App.fetch(MessagesView.renderMessage(test));
  },

  renderMessage: function(arrMessages) {
    //should be able to add messages to the DOM
    //pass in array of messages as parameter
    var html = '';
    for (var i = 0; i < arrMessages.length; i ++) {
      html += MessageView.render(arrMessages[i]);
    }
    this.$chats.append(html);
    
  }
};
  
  