const express = require('express');

const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/usersMiddleware')

const router = express.Router();

router.get('/users', userController.getAll);

router.get('/users/:id', userController.getUser);

router.post('/users', 
    userMiddleware.validateName,
    userMiddleware.validateEmail,
    userMiddleware.validateCellphone,
    userMiddleware.validateDate,
    userController.createUser);

router.put('/users/:id', 
    userMiddleware.validateName,
    userMiddleware.validateEmail,
    userMiddleware.validateCellphone,
    userMiddleware.validateDate,
    userController.updateUser);
    
router.delete('/users/:id', userController.deleteUser);

module.exports = router;