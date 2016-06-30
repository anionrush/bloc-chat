(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-onur.firebaseio.com/");
        var rooms = $firebaseArray(firebaseRef);

        return {all: rooms}

    }

    angular.module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();