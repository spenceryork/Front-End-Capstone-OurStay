"use strict";

angular.module("OurStayApp").controller("NavCtrl", function($scope, AuthFactory, $location, $window, FilterFactory) {
   
    $scope.logo = "";

    $scope.navBar = [
        {
            name: "Add New",
            url: "#!/home"
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
            url: "#!/logout"
        }
    ];

    $scope.go = navUrl => {
        console.log("navUrl", navUrl);
        if (navUrl === "#!/logout") {
          AuthFactory.logout();
        } else {
          $window.location.href = navUrl;
        }
    };

});