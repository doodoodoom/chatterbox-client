var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  
  messages: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch( () => {
      RoomsView.initialize();
      MessagesView.initialize();
      FormView.initialize();
      App.stopSpinner();
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      App.messages = data;
      console.log(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
