Template.chat.helpers({
  'messages': function () {
    return [];
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
  }
});
