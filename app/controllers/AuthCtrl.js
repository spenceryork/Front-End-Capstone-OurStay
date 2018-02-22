"use strict";

angular.module("OurStayApp").controller("AuthCtrl", function($scope, FbFactory, FilterFactory, $route, AuthFactory, $window){


    $scope.googleLoginAuth = () => {
        AuthFactory.login()
        .then(user => {
            // console.log('User: ', user);
            $window.location = "/#!/home";
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
        // console.log("is anything happening?", $scope.user);
        // console.log("what is authObj", AuthFactory);

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
            // console.log("logged in user", user);
            $window.location.href = "#!/home";
        })
        .catch( (err) => {
            console.log(err);
        });
    };

});

