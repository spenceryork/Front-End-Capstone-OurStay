"use strict";

angular.module("OurStayApp").controller("NavCtrl", function($scope, AuthFactory, $location, $window, FilterFactory) {
   
    $scope.logo = "";

    $scope.navBar = [
        {
            name: "Add New",
            url: "#!/add"
        },
        {
            name: "View Past Stays",
            url: "#!/list"
        },
        {
            name: "Login",
            bang: "!",
            url: "#!/login"
        },
        {
            name: "Logout",
            url: "#!/home"
        }
    ];

    $scope.go = (navUrl) => {
        console.log("navUrl", navUrl);
        if (navUrl === "#!/home") {
          AuthFactory.logout();
        } else {
          $window.location.href = navUrl;
        }
    };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.$apply($scope.loggedIn = true);
        } else {
            $scope.loggedIn = false;
            $scope.$apply();
        }
    });

});