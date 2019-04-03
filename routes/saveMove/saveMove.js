import db from '../../firebaseConfig';

const saveMove = (mesure) => {
    console.log("bla");
}

module.exports = (req, res) => {
    let { mesure } = req.params
    res.send(saveMove(mesure))
 };