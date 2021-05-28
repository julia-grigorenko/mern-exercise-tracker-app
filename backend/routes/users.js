const router = require('express').Router();
const UserCtrl = require('../controllers/user-ctrl.js');

router.get('/', UserCtrl.getUsers);
router.post('/add', UserCtrl.addUser);
router.get('/:id', UserCtrl.getUser);
router.delete('/:id', UserCtrl.deleteUser);
router.post('/update/:id', UserCtrl.updateUser);



module.exports = router;