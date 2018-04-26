"use strict";

angular.module("OurStayApp").controller("StayListCtrl", function($scope, FbFactory, FilterFactory, $route, $location){

    $scope.searchTerm = FilterFactory;

    // Sorting variables - followed along with this tutorial https://www.youtube.com/watch?v=hnKSv28dp_w
    $scope.sortColumn = 'name';
    $scope.reverseSort = false;
    $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    };

    $scope.getSortClass = function(column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? "arrow-down" : "arrow-up";
        } 
        return "";
    };

    let user = firebase.auth().currentUser.uid;

    FbFactory.getPastStays(user)
    .then( (stays) => {
        $scope.stays = stays;
    });

    $scope.deleteStay = function(stayId) {
        FbFactory.deleteStay(stayId)
        .then( (data) => {
            $route.reload("/list");
        });
    };

});