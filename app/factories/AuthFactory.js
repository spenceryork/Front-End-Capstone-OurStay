"use strict";

angular.module("OurStayApp").factory("AuthFactory", (FBcreds ,$q) => {
    
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
            console.log("RESULT",result);
            return user;
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log("error",error);
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
        console.log("isAuthenticated called AuthFactory");
        return $q((resolve, reject) => {
          console.log("firing onAuthStateChanged");
          firebase.auth().onAuthStateChanged( (user) => {
            console.log("onAuthStateChanged finished");
            if (user) {
              console.log("user", user);
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