const express = require('express');
const router = express.Router();
const controller = require('../Controllers/myControllers')
const loginController = require('../Controllers/Users/loginUser')
const registerController = require('../Controllers/Users/registrationUser')
const usersprofile = require('../Controllers/Users/userProfile')

router.get('/',controller.defaultController);

//singup page 
router.get('/signup',registerController.userRegFormController)
router.post('/signuppost',registerController.userRegFormPostController)

//login page
router.get('/login',loginController.userLoginFormController)
router.post('/login',loginController.userLoginFormPostController)
router.get('/logout' , loginController.userLogoutController)

//profile-page
router.get('/profile-view', usersprofile.userprofileController)

module.exports = router;
