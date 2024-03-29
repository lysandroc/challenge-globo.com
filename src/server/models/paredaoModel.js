import mongoose, { Types } from 'mongoose';

const { ObjectId } = Types;

// Overwrite method that return BJSON
ObjectId.prototype.valueOf = function bjsonToString() {
  return this.toString();
};

const ParedaoSchema = new mongoose.Schema({
  tempoInicio: { type: Date, required: true },
  tempoFim: { type: Date, required: true },
  tipoDocumento: { type: String, default: 'paredao' },
  participantes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Participante',
    }
  ],
}, { timestamps: true, collection: 'bbb2018' });

module.exports = mongoose.model('ParedaoSchema', ParedaoSchema);
