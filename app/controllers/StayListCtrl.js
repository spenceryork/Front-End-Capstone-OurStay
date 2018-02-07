"use strict";

angular.module("OurStayApp").controller("StayListCtrl", function($scope, FbFactory, FilterFactory, $route, $location){

    $scope.searchTerm = FilterFactory;

    FbFactory.getPastStays()
    .then( (stays) => {
        $scope.stays = stays;
        console.log("data received by staylist controller", stays);
    });

    $scope.deleteStay = function(stayId) {
        FbFactory.deleteStay(stayId)
        .then( (data) => {
            console.log("data has been deleted");
            $location.path("/list");
        });
    };

});