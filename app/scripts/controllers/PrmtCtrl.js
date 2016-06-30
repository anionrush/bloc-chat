(function() {

    function PrmtCtrl($scope, $uibModalInstance, $firebaseArray, $cookies, $uibModal) {

        
        this.setUser = function(){
            $cookies.put('blocChatCurrentUser', this.currUser);
            if (!this.currUser || this.currUser === '') {
                $uibModal.open({
                    animation: false,
                    templateUrl: '/templates/prompt.html',
                    controller: 'PrmtCtrl as prmt',
                    size: 'sm',
                    backdrop: 'static'
                })
            }
            $uibModalInstance.close();
            
        };
        
    }

    angular.module('blocChat')
        .controller('PrmtCtrl', ['$scope', '$uibModalInstance', '$firebaseArray','$cookies','$uibModal', PrmtCtrl])
})(); 
