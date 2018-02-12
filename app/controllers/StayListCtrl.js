"use strict";

angular.module("OurStayApp").controller("StayListCtrl", function($scope, FbFactory, FilterFactory, $route, $location){

    $scope.searchTerm = FilterFactory;

    let user = firebase.auth().currentUser.uid;

    FbFactory.getPastStays(user)
    .then( (stays) => {
        $scope.stays = stays;
    });

    $scope.deleteStay = function(stayId) {
        FbFactory.deleteStay(stayId)
        .then( (data) => {
            console.log("data has been deleted");
            $route.reload("/list");
        });
    };

});