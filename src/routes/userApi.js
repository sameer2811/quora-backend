const {
    UserController
} = require('./../controller/')
const express = require('express');

const userRouter = express.Router();

userRouter.get('/ping', function (req, res) {
    return res.json({
        "sucess": true,
        "msg": "msg details"
    })
})
userRouter.get('/:id', UserController.getUserDetails);

userRouter.post('/', UserController.createNewUserId);

userRouter.put('/:id', UserController.updateUser);

module.exports = userRouter;