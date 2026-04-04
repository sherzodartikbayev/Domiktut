const adminController = require('../controllers/admin.controller')

const router = require('express').Router()

router.get('/get-cottages', adminController.getAllCottages)

router.get('/get-cottage/:id', adminController.getCottage)

router.post('/add-cottage', adminController.addCottage)

router.put('/edit-cottage/:id', adminController.editCottage)

router.delete('/delete-cottage/:id', adminController.deleteCottage)

module.exports = router
