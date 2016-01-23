Template.chat.helpers({
  'nickname': function (isTutor) {
    var id;
    if (isTutor) {
      id = this.tutor_id;
    } else {
      id = this.user_id;
    }
    return Meteor.users.findOne({_id: id}).nickname;
  },
  'isTutor': function () {
    return Meteor.user() == this.tutor_id;
  },
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
    var isTutor = Meteor.user() == this.tutor_id;
    var message = {
      isTutor,
      msg: text,
      ts: new Date()
    };
    History.update(this._id, {
      $push: {messages: message}
    });
    e.target.text.value = '';
  }
});
