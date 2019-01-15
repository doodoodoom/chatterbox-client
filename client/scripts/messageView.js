var MessageView = {

  render: _.template(`
      <div class="chats">
        <div class="username"></div>
          <%= username %>
          <%= text %>
        <div></div>
      </div>
    `)

};
/*
MessageView.render: function(object) {

} => string
turn html string into node for the dom
jQuery.append

*/
//use chat and messages to show message