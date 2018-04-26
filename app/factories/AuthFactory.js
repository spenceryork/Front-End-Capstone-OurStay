"use strict";

angular.module("OurStayApp").factory("AuthFactory", (FBcreds ,$q, $location) => {
    
    let authObj = {};
    let currentUser = null;
    const provider = new firebase.auth.GoogleAuthProvider();

    // GOOGLE LOGIN
    authObj.login = () => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result){
            var token = result.credential.accessToken;
            var user = result.user.G;
            return user;
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    };

    authObj.logout = () => {
        firebase.auth().signOut().then(function() {
            console.log("User has been logged out:");
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
        };

        

    // EMAIL AND PASSWORD LOGIN

    authObj.createUser = ({email, password}) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    };

    authObj.loginUser = ({email, password}) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    };
    
    authObj.logoutUser = () => {
        return firebase
        .auth()
        .signOut();
    };

    authObj.isAuthenticated = () => {
        return $q((resolve, reject) => {
          firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
              currentUser = user.uid;
              resolve(true);
            } else {
              resolve(false);
            }
          });
        });
      };

    authObj.getCurrentUser = () => {
        return currentUser;
    };

    return authObj;
});