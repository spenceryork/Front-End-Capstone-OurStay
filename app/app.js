"use strict";

let isAuth = (AuthFactory) => {
    return new Promise ( (resolve, reject) => {
        AuthFactory.isAuthenticated()
        .then( (ifUser) => {
            console.log("is user logged in", ifUser);
            if (ifUser) {
                resolve();
            } else {
                reject();
            }
        });
    });
};

angular.module("OurStayApp", ["ngRoute", "ngMap"])
    .config($routeProvider => {
        $routeProvider
        .when("/", {
            templateUrl: "partials/addStay.html",
            controller: "AddStayCtrl",
            resolve: { isAuth }
        })
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: "AuthCtrl"
        })
        .when("/landing", {
            templateUrl: "partials/landing.html",
            controller: "LandingCtrl"
        })
        .when("/home", {
            templateUrl: "/partials/addStay.html",
            controller: "AddStayCtrl",
            resolve: { isAuth }
        })
        .when("/list", {
            templateUrl: "/partials/stayList.html",
            controller: "StayListCtrl",
            resolve: { isAuth }
        })
        .when("/map", {
            templateUrl: "/partials/stayMap.html",
            controller: "StayMapCtrl",
            resolve: { isAuth }
        })
        .when("/stay/:stayId", {
            templateUrl: "/partials/individualStay.html",
            controller: "IndividualStayCtrl",
            resolve: { isAuth }
        })
        .when("/edit/:stayId", {
            templateUrl: "/partials/editStay.html",
            controller: "EditStayCtrl",
            resolve: { isAuth }
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