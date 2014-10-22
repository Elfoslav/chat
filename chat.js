Messages = new Mongo.Collection('messages');
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.chat.helpers({
    messages: function () {
      return Messages.find();
    }
  });

  Template.chat.events({
    'click .clickable': function () {
      var message = $('textarea').val();
      $('textarea').val('');

      console.log('inserting message: ', message);

      Messages.insert({
        text: message
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}