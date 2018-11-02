const mongoose = require('mongoose');

const ParticipanteSchema = new mongoose.Schema({
  cpf: { type: String, unique: true },
  nome: String,
  idade: Number,
  tipoDocumento: { type: String, default: 'participante' },
}, { timestamps: true, collection: 'bbb2018' });

module.exports = mongoose.model('Participante', ParticipanteSchema);