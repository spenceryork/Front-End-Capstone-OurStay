"use strict";

angular.module("OurStayApp").controller("StayMapCtrl", function($scope, FbFactory, FilterFactory, $route, NgMap){

    $scope.searchTerm = FilterFactory;

    let user = firebase.auth().currentUser.uid;

    FbFactory.getPastStays(user)
    .then( (stays) => {
        $scope.stays = stays;
        console.log("data received by stayMap controller", stays);
    });


    $scope.showDetail = function(e, selectedStay) {
        $scope.selectedStay = selectedStay;
        $scope.map.showInfoWindow("stayInfoWindow", selectedStay.stayId);
      };
    
    $scope.hideDetail = function() {
        $scope.map.hideInfoWindow("stayInfoWindow");
    };
});