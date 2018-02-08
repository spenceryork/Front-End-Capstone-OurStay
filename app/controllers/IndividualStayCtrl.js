"use strict";

angular.module("OurStayApp").controller("IndividualStayCtrl", function($scope, FbFactory, FilterFactory, $route, $routeParams){

    FbFactory.getStayDetails($routeParams.stayId)
    .then( (stay) => {
        console.log("stay that should be edited", stay);
        stay.stayId = $routeParams.stayId;
        $scope.stay = stay;
    });
});