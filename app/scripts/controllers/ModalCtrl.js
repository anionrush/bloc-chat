(function() {

    function ModalCtrl($scope, $uibModal) {

        this.open = function () {

            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm'
                });
        }

        };
    angular.module('blocChat')
        .controller('ModalCtrl', ['$scope','$uibModal', ModalCtrl]);
})();


(function() {

    function ModalInstanceCtrl($scope, $uibModalInstance, $firebaseArray) {
        
        var ref = new Firebase("https://bloc-chat-onur.firebaseio.com/");
        
        $scope.roomArray = $firebaseArray(ref);
        
        $scope.addRoom = function(){
            
            $scope.roomArray.$add({
                text: $scope.addText,
            })
            $uibModalInstance.close();
            
        };
        
        $scope.cancel = function () {
            $uibModalInstance.close();
        };
    };

    angular.module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', '$firebaseArray', ModalInstanceCtrl])
})(); 
