var MessageView = {

  render: _.template(`
      <div class="chats">
        <h3 class="username">
          <%- username %>
          <%- text %>
        </h3>
        <div></div>
      </div>
    `),

};
//turn html string into node for the dom
//jQuery.append