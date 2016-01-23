Template.chat.helpers({
  'myLocation': function () {
  },
  'otherLocation': function () {
  }
});

Template.chat.events({
  'click .video-call': function (e) {
    e.preventDefault();
  },
  'click .in-person': function (e) {
    e.preventDefault();
  },
  'submit .msg-text': function (e) {
    e.preventDefault();
    var text = e.target.text.value;
    var message = {
      user_id: 'foo',
      msg: text,
      ts: new Date()
    };
    History.update(this._id, {
      $push: {messages: message}
    });
    e.target.text.value = '';
  }
});
