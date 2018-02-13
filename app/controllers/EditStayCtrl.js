"use strict";

angular.module("OurStayApp").controller("EditStayCtrl", function($scope, FbFactory, FilterFactory, $route, $routeParams, $location){

    $scope.title = "Edit Past Stay";

    FbFactory.getStayDetails($routeParams.stayId)
    .then( (stay) => {
        $scope.stay = stay;
    });

    $scope.updateStay = function() {
        // let price = $scope.stay.price.replace(/[!@#$%^&*]/g, "");
        // $scope.stay.price = parseFloat(price).toFixed(2);
        FbFactory.updateStayDetails($routeParams.stayId, $scope.stay)
        .then( () => {
            $location.url(`/stay/${$routeParams.stayId}`);
        });
    };

});