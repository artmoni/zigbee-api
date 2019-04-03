const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyDn6IbNe7uA9J-Pib6iOI389SeVhkXv6rE",
    authDomain: "zigbee-88378.firebaseapp.com",
    databaseURL: "https://zigbee-88378.firebaseio.com",
    projectId: "zigbee-88378",
    storageBucket: "zigbee-88378.appspot.com",
    messagingSenderId: "1080511125053"
};


module.exports =  firebase.initializeApp(config);



