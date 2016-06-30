(function() {
    angular.module('blocChat', ['firebase', 'ui.bootstrap','ngCookies'])
})(); 


(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            animation: false,
            templateUrl: '/templates/prompt.html',
            controller: 'PrmtCtrl as prmt',
            size: 'sm',
            backdrop: 'static'
        })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();