angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $state, Envato, localStorageService) {
  $scope.account = localStorageService.get('account');

  $scope.openCodePage = function () {
      $state.go('code');
  };

  $scope.refresh = function () {
    Envato.account()
      .then(function (response) {
        if (response.data.status == 'success') {
          $scope.account = response.data.data.account;
          localStorageService.set('account', $scope.account);
        }
      });
  };
})

.controller('StatementCtrl', function($scope, Envato, localStorageService) {
  $scope.statements = localStorageService.get('statements');

  $scope.refresh = function () {
    Envato.statement()
      .then(function (response) {
        if (response.data.status == 'success') {
          $scope.statements = response.data.data;
          console.log($scope.statements);
          localStorageService.set('statements', $scope.statements);
        }
      });
  };
})

.controller('StatementDetailCtrl', function($scope, $stateParams) {
})

.controller('CodeCtrl', function($scope, $state, localStorageService) {
  $scope.form = {
    code: ''
  };

  $scope.submit = function () {
    localStorageService.set('code', $scope.form.code);
    $state.go('tab.dash');
  };

  $scope.close = function () {
    $state.go('tab.dash');
  };
});
