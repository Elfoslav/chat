Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
  Meteor.subscribe('messages');

  Template.chat.helpers({
    messages: function () {
      return Messages.find({}, {
        limit: 2
      });
    }
  });

  Template.chat.events({
    'click .clickable': function () {
      var message = $('textarea').val();
      $('textarea').val('');

      console.log('inserting message: ', message);

      Meteor.call('addMessage', message, function(err, result) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish('messages', function() {
    return Messages.find({}, {
      limit: 5
    });
  });

  Meteor.methods({
    addMessage: function(text) {
      Messages.insert({
        text: text
      });
    }
  });
}