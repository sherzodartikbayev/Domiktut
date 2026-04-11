const userController = require('../controllers/user.controller')

const router = require('express').Router()

router.get('/cottages', userController.getCottages)
router.get('/cottage/:id', userController.getCottage)
router.get('/profile/:id', userController.getProfile)
router.get('/favorites/:id', userController.getFavorites)

router.post('/add-favorite', userController.addFavorite)
router.post('/send-application', userController.sendApplication)

router.put('/update-profile/:id', userController.editProfile)

router.delete('/delete-favorite/:id', userController.deleteFavorite)

module.exports = router
