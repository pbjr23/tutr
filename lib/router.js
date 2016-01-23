Router.configure({
  layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/signup');
Router.route('/addclass');
Router.route('/dashboard');
Router.route('/chat/:_id', function () {
  var chat = History.findOne({_id: this.params._id});
  this.render('chat', {data: chat});
});
