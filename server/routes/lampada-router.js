const express = require('express')

const LampadaCtrl = require('../controllers/lampada-ctrl')

const router = express.Router()

router.post('/lampada', LampadaCtrl.createLampada)
router.put('/lampada/:id', LampadaCtrl.updateLampada)
router.delete('/lampada/:id', LampadaCtrl.deleteLampada)
router.get('/lampada/:id', LampadaCtrl.getLampadaById)
router.get('/lampadas', LampadaCtrl.getLampadas)

module.exports = router
