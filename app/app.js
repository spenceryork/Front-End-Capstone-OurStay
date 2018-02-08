"use strict";

angular.module("OurStayApp", ["ngRoute", "ngMap"])
    .config($routeProvider => {
        $routeProvider
        .when("/", {
            templateUrl: "partials/landing.html",
            controller: "LandingCtrl"
        })
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: "AuthCtrl"
        })
        .when("/home", {
            templateUrl: "/partials/addStay.html",
            controller: "AddStayCtrl"
        })
        .when("/list", {
            templateUrl: "/partials/stayList.html",
            controller: "StayListCtrl"
        })
        .when("/map", {
            templateUrl: "/partials/stayMap.html",
            controller: "StayMapCtrl"
        })
        .when("/stay/:stayId", {
            templateUrl: "/partials/individualStay.html",
            controller: "IndividualStayCtrl"
        })
        .when("/edit/:stayId", {
            templateUrl: "/partials/editStay.html",
            controller: "EditStayCtrl"
        })
        .otherwise("/");
    })
.run(FBcreds => {
    let creds = FBcreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});