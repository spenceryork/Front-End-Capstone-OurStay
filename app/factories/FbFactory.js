"use strict";

angular.module("OurStayApp").factory("FbFactory", ($http, $q) => {

   function addStay(stay) {
       return $q( (resolve, reject) => {
           $http
           .post(`https://our-stay.firebaseio.com/stays.json`, JSON.stringify(stay))
           .then( (data) => {
              resolve(data);
           })
           .catch( (error) => {
               reject(error);
           });
       });
   }

   function getPastStays(uid) {
        return $q( (resolve, reject) => {
            $http
            .get(`https://our-stay.firebaseio.com/stays.json?orderBy="uid"&equalTo="${uid}"`)
            .then( (data) => {
                console.log("getPastStays Data", data.data); 
                resolve(data.data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function getStayDetails(stayId) {
        return $q( (resolve, reject) => {
            $http
            .get(`https://our-stay.firebaseio.com/stays/"${stayId}".json`)
            .then( (data) => {
                console.log("getStayDetails", data); 
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function updateStayDetails(stayId, stay) {
        return $q( (resolve, reject) => {
            $http
            .put(`https://our-stay.firebaseio.com/stays/"${stayId}".json`, JSON.stringify(stay) )
            .then( (data) => {
                console.log("getStayDetails", data); 
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function deleteStay(stayId) {
        return $q( (resolve, reject) => {
            $http
            .delete(`https://our-stay.firebaseio.com/stays/"${stayId}".json`)
            .then( (data) => {
                console.log("stay has been deleted"); 
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    return { addStay, getPastStays, getStayDetails, deleteStay, updateStayDetails };

});