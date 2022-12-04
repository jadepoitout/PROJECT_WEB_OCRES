/*Objectif: faire une API RESTful pour les users:
->Create un user (à voir)
->Read user 
->Update user
->Delete user
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Créer RAW data array
let users = [{
  user:"Marine",
  id: "0"
}];

/*GET users listing*/
router.get('/',(req,res) => {
  //On obtient la liste des users et on le retourne au json
  res.status(200).json({users});
});

/*On récupère l'id demandé
le trouver dans DB avec lodash
Puis renvoie de la donnée*/

/*GET one user*/
router.get('/:id', (req, res) =>  {
  //Get id in params
  const {id} = req.params;
  //Find user in DB
  const user = _.find(users, ["id", id]);
  //Return user
  res.status(200).json({
    message: 'User trouvé',
    user
  });
});

//module.exports = router;
