angular.module('starter.services', ['LocalStorageModule'])

  .factory('Loader', function ($ionicLoading) {
    return {
      show: function () {
        return $ionicLoading.show({
          template: 'Loading...'
        });
      },
      hide: function () {
        return $ionicLoading.hide();
      }
    };
  })
  .factory('Envato', function ($http, Loader, $q, localStorageService) {
    function API() {
      this.code = localStorageService.get('code');
    }

    API.prototype.setCode = function (code) {
      this.code = code;
      localStorageService.set('code', code);
    };

    API.prototype._call = function (api) {
      var deferred = $q.defer();

      var self = this;

      if (this.code) {
        Loader.show();

        return $http.get('https://nameless-bastion-35871.herokuapp.com/api/'+ api +'.json?code=' + self.code)
          .finally(function () {
            Loader.hide();
          });
      } else {
        deferred.reject();

        return deferred.promise;
      }
    };

    API.prototype.account = function () {
      return this._call('account');
    };

    API.prototype.statement = function () {
      return this._call('statement');
    };

    return new API();
  });