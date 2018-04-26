"use strict";

angular.module("OurStayApp").controller("AuthCtrl", function($scope, FbFactory, FilterFactory, $route, AuthFactory, $window){


    $scope.googleLoginAuth = () => {
        AuthFactory.login()
        .then(user => {
            $window.location = "/#!/add";
        });
    }; 

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.$apply($scope.loggedIn = true);
        } else {
            $scope.loggedIn = false;
            $scope.$apply();
        }
    });

    $scope.registerNewUser = () => {

        AuthFactory.createUser($scope.user)
        .then( (user) => {
            $scope.loginWithEmail();
        })
        .catch( function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("Oops", errorCode, errorMessage);
        });
    };

    $scope.loginWithEmail = () => {
        AuthFactory.loginUser($scope.user)
        .then(user => {
            $window.location.href = "#!/add";
        })
        .catch( (err) => {
            console.log(err);
        });
    };

});

