"use strict";

angular.module("OurStayApp").controller("AddStayCtrl", function($scope, FbFactory, FilterFactory, $route, NgMap){
   
    $scope.stay = {
        name: "",
        address: "",
        website: "",
        rating: "",
        bookedThrough: "",
        note: ""
    };
    
    
    $scope.placeChanged = function() {
        let place = this.getPlace();
        console.log("what are you?", this.getPlace);

        // These variables will automatically be placed in the input fields
        $scope.stay.name = place.name;
        $scope.stay.address = place.formatted_address;
        $scope.stay.website = place.website;
        $scope.stay.longitude = place.geometry.location.lng();
        $scope.stay.latitude = place.geometry.location.lat();

        console.log("photo", place.photos[0].html_attributions[0]);

        // Entire data object received from Google
        console.log('Place Data', place);
    };


    $scope.trackStay = function() {
        FbFactory.addStay($scope.stay);
    };


});