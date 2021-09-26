const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lampada = new Schema(
    {
        nomeLampada: { type: String, required: false },
        voltagemLampada: { type: String, required: false },
        comodoLampada: { type: String, required: false },
        statusLampada: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('lampadas', Lampada)
