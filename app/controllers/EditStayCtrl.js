"use strict";

angular.module("OurStayApp").controller("EditStayCtrl", function($scope, FbFactory, FilterFactory, $route, $routeParams, $location){

    $scope.title = "Edit Past Stay";

    FbFactory.getStayDetails($routeParams.stayId)
    .then( (stay) => {
        $scope.stay = stay;
    });

    console.log("routParams.stayId:", $routeParams.stayId);
    console.log();

    $scope.updateStay = function() {
        FbFactory.updateStayDetails($routeParams.stayId, $scope.stay)
        .then( () => {
            console.log("routeParams.stayId");
            $location.url(`/stay/${$routeParams.stayId}`);
        });
    };

});