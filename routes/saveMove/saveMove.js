const firebase = require('firebase');
const config = require('../../firebaseConfig');
const db = firebase.initializeApp(config);

const saveMove = (move, id) => {
    //console.log("bla");
    let myTable = db.database().ref('mesure');
    myTable.push({ 'mouvement': move, 'sensorId': id  })
    myTable.on('value', function(snapshot) {
        console.log(snapshot.val())
    });
}

module.exports = (req, res) => {
    let { move, id } = req.params
    res.send(saveMove(move, id))
 };