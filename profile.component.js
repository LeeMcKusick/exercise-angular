//'use strict';

angular.module('profile').
  component('profile', {
    templateUrl: 'profile.template.html',
    controller: function ProfileController($scope, sharedProfileData) {
      //$http.get('people.json').then(function(response) {
        //$scope.contacts = response.data.People;
      //});
      
      $scope.person = sharedProfileData.getProfile();
      
      $scope.sharedProfileData = sharedProfileData;
      $scope.$watch('sharedProfileData.getProfile()', function(newProfile) {
        $scope.person = newProfile;
       });  
       
       $scope.message = function(text) {
         alert(text);
       }
    }
  });