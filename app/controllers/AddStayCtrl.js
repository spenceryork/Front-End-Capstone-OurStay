"use strict";

angular.module("OurStayApp").controller("AddStayCtrl", function($scope, FbFactory, FilterFactory, $route, NgMap, $location, $window){
   
    $scope.stay = {
        name: "",
        address: "",
        website: "",
        type: "",
        review: "",
        note: ""
    };
    
    $scope.placeChanged = function() {
        let place = this.getPlace();

        // These variables will automatically be placed in the input fields
        $scope.stay.name = place.name;
        $scope.stay.address = place.formatted_address;
        $scope.stay.website = place.website;
        $scope.stay.longitude = place.geometry.location.lng();
        $scope.stay.latitude = place.geometry.location.lat();

        // Entire data object received from Google
        console.log('Place Data', place);
    };


    $scope.trackStay = function() {
        console.log($scope.stay);
        FbFactory.addStay($scope.stay)
        .then( () => {
            $location.url("/list");
            // $window.location.href("/list");
        });

    };


});