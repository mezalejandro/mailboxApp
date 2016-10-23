angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Test mensaje',
    lastText: 'Este es un mensaje de prueba. Este es un mensaje de prueba',
  }, {
    id: 1,
    name: 'Test Message',
    lastText: 'Este es un mensaje de prueba. Este es un mensaje de prueba',
  }, {
    id: 2,
    name: 'Test Message',
    lastText: 'Este es un mensaje de prueba. Este es un mensaje de prueba',
  }, {
    id: 3,
    name: 'Test mensaje',
    lastText: 'Este es un mensaje de prueba. Este es un mensaje de prueba',
  }, {
    id: 4,
    name: 'Test mensaje',
    lastText: 'Este es un mensaje de prueba. Este es un mensaje de prueba',
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
