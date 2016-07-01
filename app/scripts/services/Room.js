(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-onur.firebaseio.com/");
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        var firebaseRef2 = new Firebase("https://bloc-chat-onur.firebaseio.com/messages"); 
        
        return {
            all: rooms,
            currentRoomId: '',
            getMessages: function(room){
                this.currentRoomId = room.$id;
                return $firebaseArray(firebaseRef2.orderByChild('roomId').equalTo(room.$id));
                
            },
            
        }
    }

    angular.module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();