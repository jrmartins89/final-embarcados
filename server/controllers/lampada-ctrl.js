const Lampada = require('../models/lampada-model')

createLampada = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Voce deve fornecer uma lampada',
        })
    }

    const lampada = new Lampada(body)

    if (!lampada) {
        return res.status(400).json({ success: false, error: err })
    }

    lampada
    .save()
    .then(() => {
            return res.status(201).json({
                success: true,
                id: lampada._id,
                message: 'Lampada criada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Lampada nao criada!',
            })
        })
}

updateLampada = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Voce deve fornecer um body para atualizar',
        })
    }

    Lampada.findOne({ _id: req.params.id }, (err, lampada) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Lampada nao encontrada!',
            })
        }
        lampada.nomeLampada = body.nomeLampada
        lampada.voltagemLampada = body.voltagemLampada
        lampada.comodoLampada = body.comodoLampada
        lampada.statusLampada = body.statusLampada
        lampada
        .save()
        .then(() => {
                return res.status(200).json({
                    success: true,
                    id: lampada._id,
                    message: 'Lampada Atualizada!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Lampada nao Atualizada!',
                })
            })
    })
}

deleteLampada = async (req, res) => {
    await Lampada.findOneAndDelete({ _id: req.params.id }, (err, lampada) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!lampada) {
            return res
                .status(404)
                .json({ success: false, error: `Lampada nao encontrada` })
        }

        return res.status(200).json({ success: true, data: lampada })
    }).catch(err => console.log(err))
}

getLampadaById = async (req, res) => {
    await Lampada.findOne({ _id: req.params.id }, (err, lampada) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: lampada })
    }).catch(err => console.log(err))
}

getLampadas = async (req, res) => {
    await Lampada.find({}, (err, lampadas) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!lampadas.length) {
            return res
                .status(404)
                .json({ success: false, error: `Lampada nao encontrada` })
        }
        return res.status(200).json({ success: true, data: lampadas })
    }).catch(err => console.log(err))
}

module.exports = {
    createLampada,
    updateLampada,
    deleteLampada,
    getLampadas,
    getLampadaById,
}
