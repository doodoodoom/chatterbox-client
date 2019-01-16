var FormView = {

  $form: $('form'),
  $inputField: $('input #message'),
  
  textInput: '',
  username: '',
  roomname: '',

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    
    // FormView.$inputField.change(function () {
    //   FormView.textInput = $inputField.val();
    //   console.log(FormView.textInput);
    // });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      roomname: 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };
    
    Parse.create(message, () => {
      Messages.add(message, MessagesView.render);
    });
    // FormView.$inputField.change(function () {
    //   FormView.textInput = $inputField.text();
    //   // console.log(FormView.textInput);
    // });
    // console.log(FormView.textInput);
    //FormView.textInput = FormView.$inputField.val();
    // Parse.create(message, () => {
    //   FormView.textInput = message;
    //   console.log(message);
    //   callback();
    // });

    console.log('click! the input is ' + FormView.textInput);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};