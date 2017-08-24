'use strict'; 

angular.module('contactsApp', [
  'contactList', 'profile'
  ]).service('sharedProfileData', function() {
    var profile = {};
    var allContacts = {};
    
    return {
      getProfile: function() { 
        return profile; 
      }, 
      setProfile: function(newProfile) {
        profile = newProfile;
        console.log(profile);
      }, 
      getAllProfiles: function() {
        return allContacts;
      }, 
      setAllProfiles: function(contacts) {
        allContacts = contacts;
      }
    }
  });