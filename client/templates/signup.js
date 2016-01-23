Template.signup.events({
  'submit form': function() {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    Accounts.createUser({
      email: email,
      password: password,
      nickname: "temp",
      tutorClasses: [],
      tutor: false,
      requestClasses: []
    }, function(error) {
        if(error){
          console.log(error.reason); // Output error if registration fails
        } else {
          Router.go("home"); // Redirect user if registration succeeds
        }
    });

    Router.go('dashboard');
  }
});
