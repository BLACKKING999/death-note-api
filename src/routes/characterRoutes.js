const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
const upload = require('../middleware/upload');
const { body } = require('express-validator');

const validateCharacter = [
  body('name').notEmpty().trim().escape(),
  body('description').notEmpty().trim(),
  body('intelligence').optional().isInt({ min: 1, max: 10 }),
  body('status').optional().isIn(['Alive', 'Deceased', 'Unknown']),
  body('deathNoteOwner').optional().isBoolean(),
  body('shinigami').optional().isBoolean()
];

// Rutas existentes
router.post('/', 
  upload.single('image'),
  validateCharacter,
  characterController.createCharacter
);

router.get('/', characterController.getAllCharacters);

// Nueva ruta para obtener un personaje por nombre usando /name/:name
router.get('/name/:name', characterController.getCharacterByName);

// Ruta para obtener un personaje por nombre directamente en /characters/:name
router.get('/search/:name', characterController.getCharacterByName);

// Ruta para obtener un personaje por ID
router.get('/:id', characterController.getCharacterById);

router.put('/:id',
  upload.single('image'),
  validateCharacter,
  characterController.updateCharacter
);

router.delete('/:id', characterController.deleteCharacter);

module.exports = router;
