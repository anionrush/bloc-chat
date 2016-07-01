(function() {

    function ModalCtrl($scope, $uibModal) {

        this.open = function () {

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as mic',
                size: 'sm'
                });
        }

        };
    angular.module('blocChat')
        .controller('ModalCtrl', ['$scope','$uibModal', ModalCtrl]);
})();


(function() {

    function ModalInstanceCtrl($scope, $uibModalInstance, $firebaseArray) {
        
        var ref = new Firebase("https://bloc-chat-onur.firebaseio.com/rooms");
        var ref_msg = new Firebase("https://bloc-chat-onur.firebaseio.com/messages");
        
        this.roomArray = $firebaseArray(ref);
        this.messageArray = $firebaseArray(ref_msg);
        
        this.addRoom = function(){
            
            this.roomArray.$add({
                text: this.addText,
            })
             
            $uibModalInstance.close();
            
        };
        
        this.cancel = function () {
            $uibModalInstance.close();
        };
    };

    angular.module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', '$firebaseArray', ModalInstanceCtrl])
})(); 
