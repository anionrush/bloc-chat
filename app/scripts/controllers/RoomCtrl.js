 (function() {
    function RoomCtrl(Room) {
        
        this.messages = [];
        this.rooms = Room.all;
        this.getMessages = Room.getMessages;
    
    }

    angular.module('blocChat')
        .controller('RoomCtrl',  ['Room', RoomCtrl]);
})(); 
        