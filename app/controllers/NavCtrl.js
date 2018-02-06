"use strict";

angular.module("OurStayApp").controller("NavCtrl", function($scope, AuthFactory, $location, $window, FilterFactory) {
   
    $scope.logo = "";

    $scope.navBar = [
        {
            name: "Add New"
        },
        {
            name: "View Past Stays"
        },
        {
            name: "Login",
            bang: "!"
        },
        {
            name: "Logout"
        }
    ];

    // $scope.navAuth = (item) => {
    //     if (item === "Login") {
    //         AuthFactory.login()
    //         .then(user => {
    //             console.log('User: ', user);
    //             $window.location = "/#!/boards";
    //         });
    //     } else {
    //         AuthFactory.logout();
    //     }
    // }; 

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         $scope.$apply($scope.loggedIn = true);
    //     } else {
    //         $scope.loggedIn = false;
    //         $scope.$apply();
    //     }
    // });

});