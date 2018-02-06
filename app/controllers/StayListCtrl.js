"use strict";

angular.module("OurStayApp").controller("StayListCtrl", function($scope, FbFactory, FilterFactory, $route){

    $scope.searchTerm = FilterFactory;

    FbFactory.getPastStays()
    .then( (stays) => {
        $scope.stays = stays;
        console.log("data received by staylist controller", stays);
    });

});