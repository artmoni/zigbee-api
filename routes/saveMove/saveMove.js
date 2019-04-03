import db from '../../firebaseConfig';

const saveMove = (move) => {
    console.log("bla");
}

module.exports = (req, res) => {
    let { move } = req.params
    res.send(saveMove(move))
 };