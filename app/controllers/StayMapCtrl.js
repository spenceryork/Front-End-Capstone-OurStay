"use strict";

angular.module("OurStayApp").controller("StayMapCtrl", function($scope, FbFactory, FilterFactory, $route, NgMap){

    $scope.searchTerm = FilterFactory;

    FbFactory.getPastStays()
    .then( (stays) => {
        $scope.stays = stays;
        console.log("data received by stayMap controller", stays);
    });


    $scope.showDetail = function(e, selectedStay) {
        $scope.selectedStay = selectedStay;
        // console.log("What is selectedStay", $scope.selectedStay.stayId);
        $scope.map.showInfoWindow("stayInfoWindow", selectedStay.stayId);
      };
    
    $scope.hideDetail = function() {
        $scope.map.hideInfoWindow("stayInfoWindow");
    };
});