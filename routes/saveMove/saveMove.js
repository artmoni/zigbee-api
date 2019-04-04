const firebase = require('firebase');
const db = require('../../firebaseConfig');


const saveMove = (id) => {
    //console.log("bla");
    let myTable = db.database().ref('mesure');
    myTable.push({ 'mouvement': Date.now(), 'sensorId': id  })
    myTable.on('value', function(snapshot) {
        console.log(snapshot.val())
    });
}

module.exports = (req, res) => {
	 console.log('sensor id =>', req.params.id);	
         let { id } = req.params
   	 res.send(saveMove(id))
 };
