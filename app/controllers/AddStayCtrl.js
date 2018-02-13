"use strict";

angular.module("OurStayApp").controller("AddStayCtrl", function($scope, FbFactory, FilterFactory, $route, NgMap, $location, $window){
   
    
    $scope.stay = {
        name: "",
        address: "",
        website: "",
        type: "",
        price: "",
        review: "",
        note: "",
        uid: "",
        url: ""
    };
    
    $scope.stay.address = "Nashville, TN, USA";
    
    $scope.placeChanged = function() {
        let place = this.getPlace();
        console.log("stay details from api", place);

        
        $scope.stay.name = place.name;
        $scope.stay.address = place.formatted_address;
        $scope.stay.website = place.website;
        $scope.stay.longitude = place.geometry.location.lng();
        $scope.stay.latitude = place.geometry.location.lat();
    };
    
    $scope.trackStay = function() {
        $scope.stay.uid = firebase.auth().currentUser.uid;
        let price = $scope.stay.price.replace(/[!@#$%^&*]/g, "");
        // console.log("stay price", price);
        $scope.stay.price = parseFloat(price).toFixed(2);
        console.log('Place Data', $scope.stay);
        FbFactory.addStay($scope.stay)
        .then( () => {
            $window.setTimeout (function() {
                $window.location.href = '#!/list';
            },500);
        });
    };
        

});