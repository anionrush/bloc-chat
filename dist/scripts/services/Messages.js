(function() {
    function Message($firebaseArray, $cookies, Room) {
        var firebaseRef = new Firebase("https://bloc-chat-onur.firebaseio.com/");
        var messages = $firebaseArray(firebaseRef.child('messages'));
        
        var room = Room;

        return {
            send: function(newMessage, roomId) {
                messages.$add({
                    user: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: "",
                    roomId: roomId

                }) 

            }
        };
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray','$cookies','Room', Message]);
})();