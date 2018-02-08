"use strict";

angular.module("OurStayApp").controller("IndividualStayCtrl", function($scope, FbFactory, FilterFactory, $route, $routeParams, $window, $location){

    FbFactory.getStayDetails($routeParams.stayId)
    .then( (stay) => {
        console.log("stay that should be edited", stay);
        stay.stayId = $routeParams.stayId;
        $scope.stay = stay;
    });

    $scope.redirectToSite = function(stayWebsite) {
        console.log("what is staywebsite", stayWebsite);
        $window.open(stayWebsite, "_blank");
    };
});