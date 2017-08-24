//'use strict';

angular.module('contactList').
  component('contactList', {
    templateUrl: 'contact-list.template.html',
    controller: function ContactListController($scope, $http, sharedProfileData) {
      $http.get('people.json').then(function(response) {
        sharedProfileData.setAllProfiles(response.data.People);
        $scope.contacts = sharedProfileData.getAllProfiles();
        sharedProfileData.setProfile($scope.contacts[0]);
      });
      
      
      $scope.updateProfile = function() {
        //console.log(this.person);
        sharedProfileData.setProfile(this.person);
      }
      
    }
  });
  
     