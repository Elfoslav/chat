if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.chat.helpers({
    counter: function () {
      return Session.get("counter");
    },
    doubleNumber: function(num) {
      return num * 2;
    }
  });

  Template.chat.events({
    'click .clickable': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}