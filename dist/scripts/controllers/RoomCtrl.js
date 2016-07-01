 (function() {
    function RoomCtrl(Room, Message) {
        
        this.messages = [];
        this.rooms = Room.all;
        this.getMessages = Room.getMessages;
        this.currentRoomId = Room.currentRoomId;
        this.send = function(newMessage, roomId){
            Message.send(newMessage, roomId);
            this.newMessage = '';
        }
    }

    angular.module('blocChat')
        .controller('RoomCtrl',  ['Room','Message', RoomCtrl]);
})(); 
        