let characters = [
    {
        id: '1',
        nombre: 'Light Yagami',
        alias: 'Kira',
        descripcion: 'El protagonista principal que encuentra la Death Note',
        dueñoDeDeathNote: true,
        shinigami: false,
        inteligencia: 10,
        estado: 'Fallecido',
        habilidades: ['Pensamiento estratégico', 'Manipulación'],
        relaciones: [],
        imagen: '/data/img/light_yagami.jpg'
      },
      {
        id: '2',
        nombre: 'L Lawliet',
        alias: 'L',
        descripcion: 'El mejor detective del mundo',
        dueñoDeDeathNote: false,
        shinigami: false,
        inteligencia: 10,
        estado: 'Fallecido',
        habilidades: ['Razonamiento deductivo', 'Investigación'],
        relaciones: [],
        imagen: '/data/img/l_lawliet.jpg'
      },
      {
        id: '3',
        nombre: 'Misa Amane',
        alias: 'Misa-Misa',
        descripcion: 'Una famosa modelo y actriz, segunda dueña de la Death Note',
        dueñoDeDeathNote: true,
        shinigami: true,
        inteligencia: 7,
        estado: 'Viva',
        habilidades: ['Manipulación emocional', 'Actuación'],
        relaciones: ['Light Yagami'],
        imagen: '/data/img/misa_amane.jpg'
      },
      {
        id: '4',
        nombre: 'Near',
        alias: 'N',
        descripcion: 'El sucesor de L, un detective extremadamente inteligente',
        dueñoDeDeathNote: false,
        shinigami: false,
        inteligencia: 9,
        estado: 'Vivo',
        habilidades: ['Análisis lógico', 'Estrategia'],
        relaciones: ['L Lawliet'],
        imagen: '/data/img/near.jpg'
      },
      {
        id: '5',
        nombre: 'Mello',
        alias: 'M',
        descripcion: 'Uno de los sucesores de L con un enfoque más arriesgado',
        dueñoDeDeathNote: false,
        shinigami: false,
        inteligencia: 8,
        estado: 'Fallecido',
        habilidades: ['Liderazgo', 'Pensamiento rápido'],
        relaciones: ['Near'],
        imagen: '/data/img/mello.jpg'
      }
  ];
  
  module.exports = { characters };
  