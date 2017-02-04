var oauthApp = angular.module('oauthApp.services', [])


.factory('Chats', function() {
  $scope.result = "";
  $http.get('https://apifyp.herokuapp.com/ListProfissionais')
    .success(function(data){
      console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
});
