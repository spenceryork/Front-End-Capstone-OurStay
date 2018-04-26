"use strict";

angular.module("OurStayApp").controller("IndividualStayCtrl", function($scope, FbFactory, FilterFactory, $route, $routeParams, $window, $location){

    FbFactory.getStayDetails($routeParams.stayId)
    .then( (stay) => {
        stay.stayId = $routeParams.stayId;
        $scope.stay = stay;
    });


    $scope.title = "Edit Past Stay";

    FbFactory.getStayDetails($routeParams.stayId)
    .then( (stay) => {
        $scope.stay = stay;
    });

    $scope.updateStay = function() {
        let price = $scope.stay.price.replace(/[!@#$%^&*]/g, "");
        $scope.stay.price = parseFloat(price).toFixed(2);
        FbFactory.updateStayDetails($routeParams.stayId, $scope.stay)
        .then( () => {
            $location.url(`/stay/${$routeParams.stayId}`);
        });
    };

    $scope.reloadStay = function() {
        $window.setTimeout (function() {
            $route.reload(`/stay/${$routeParams.stayId}`);
        },500);
    };

    $scope.redirectToSite = function(stayWebsite) {
        $window.open(stayWebsite, "_blank");
        $location.url(`/stay/${$routeParams.stayId}`);
    };
});