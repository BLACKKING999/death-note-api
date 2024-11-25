// src/controllers/characterController.js
const Character = require('../models/Character');

exports.createCharacter = async (req, res) => {
  try {
    const characterData = req.body;
    if (req.file) {
      characterData.image = req.file.path;
    }

    const character = new Character(characterData);
    await character.save();

    res.status(201).json({
      success: true,
      data: character,
      message: 'Personaje creado exitosamente'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find()
      .populate('relationships.character', 'name');
    
    res.status(200).json({
      success: true,
      count: characters.length,
      data: characters
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id)
      .populate('relationships.character', 'name');

    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Personaje no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: character
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Nueva función para obtener un personaje por nombre
exports.getCharacterByName = async (req, res) => {
  try {
    const name = req.params.name;
    const character = await Character.findOne({ name: name });

    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Personaje no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: character
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.updateCharacter = async (req, res) => {
  try {
    const updateData = req.body;
    if (req.file) {
      updateData.image = req.file.path;
    }

    const character = await Character.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Personaje no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: character,
      message: 'Personaje actualizado exitosamente'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);

    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Personaje no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      data: character,
      message: 'Personaje eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
