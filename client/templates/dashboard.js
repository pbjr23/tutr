Template.dashboard.events({
  'click .david': function (e) {
    e.preventDefault();
    console.log("Hello, this is David!");
  }
});

Template.dashboard.helpers({
  'likes': function (exp) {
    return Math.pow(2, parseInt(exp));
  },
  'hearts': function () {
    return 0;
  }
});
