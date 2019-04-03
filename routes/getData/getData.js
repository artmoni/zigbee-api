const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const getData = () => {
    //console.log("bla");
    let myTable = db.database().ref('mesure');
    myTable.on('value', function(snapshot) {
        console.log(snapshot.val())
    });
}

module.exports = (req, res) => {
    res.send(getData())
 };