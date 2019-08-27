const router = require('express').Router();

const Users = require('./users-model')
const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json({ loggedInUser: req.user.username, users})
    })
    .catch(error => res.send(error))
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await Users.deleteuser(id);
  
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find user with the given id' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete user' });
    }
  });

module.exports = router