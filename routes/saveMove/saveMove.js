const db = require('../../firebaseConfig');

const saveMove = (move, id) => {
    console.log("bla");
}

module.exports = (req, res) => {
    let { move, id } = req.params
    res.send(saveMove(move, id))
 };