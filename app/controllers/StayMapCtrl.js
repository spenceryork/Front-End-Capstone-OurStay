"use strict";

angular.module("OurStayApp").controller("StayMapCtrl", function($scope, FbFactory, FilterFactory, $route, NgMap){

    $scope.searchTerm = FilterFactory;

    let user = firebase.auth().currentUser.uid;

    FbFactory.getPastStays(user)
    .then( (stays) => {
        $scope.stays = stays;

        $scope.getCorrectStays = function() {
            if ($scope.value === "Hotel") {
                $scope.CorrectStays = stays.filter( stay =>
                    stay.type == "Hotel");
            } else if ($scope.value === "AirBnb") {
                $scope.CorrectStays = stays.filter( stay =>
                    stay.type == "AirBnb");
            } else if ($scope.value === "Campsite") {
                $scope.CorrectStays = stays.filter( stay =>
                    stay.type == "Campsite");
            } else {
                $scope.CorrectStays = stays;
            }
        };

        // console.log("HotelStaysArr", $scope.hotelStaysArr);
        console.log("data received by stayMap controller", stays);
    });

    $scope.getHotels = function() {

    };




    $scope.showDetail = function(e, selectedStay) {
        $scope.selectedStay = selectedStay;
        $scope.map.showInfoWindow("stayInfoWindow", selectedStay.stayId);
      };
    
    $scope.hideDetail = function() {
        $scope.map.hideInfoWindow("stayInfoWindow");
    };
});