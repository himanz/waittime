'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
  	// Connect $scope.parties to live Firebase data.
    var partiesRef = new Firebase('https://waitandeat-jonos.firebaseio.com/parties')
    
    $scope.parties = $firebase(partiesRef);

    // Object to store data from the waitlist form.
    $scope.newParty = {name: '', phone: '', size: ''};

    // Function to save a new party to the waitlist.
    $scope.saveParty = function() {
    	$scope.parties.$add($scope.newParty);
      $scope.newParty = {name: '', phone: '', size: ''};    	
    };

    // Function to send text message to a party
    $scope.sendTextMessage = function(phoneNumber) {
      var textMessageRef = new Firebase('http://waitandeat-jonos.firebaseio.com/textMessages');
      var textMessages = $firebase(textMessageRef);
      textMessages.$add({phonenumber: phoneNumber});
    };
  }])