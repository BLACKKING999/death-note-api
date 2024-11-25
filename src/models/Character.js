// src/models/Character.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  alias: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  },
  deathNoteOwner: {
    type: Boolean,
    default: false
  },
  shinigami: {
    type: Boolean,
    default: false
  },
  intelligence: {
    type: Number,
    min: 1,
    max: 10
  },
  image: {
    type: String
  },
  abilities: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['Vivo', 'Fallecido', 'Desconocido'],
    default: 'Desconocido'
  },
  relationships: [{
    character: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Character'
    },
    relationshipType: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);
