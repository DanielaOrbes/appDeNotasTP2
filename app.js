const process = require('process');
const listarTareas = require('./funciones');

const accion =process.argv[2]

switch (accion) {
    case 'listar':
       listarTareas()
        break;

    case undefined: 
      console.log ("Atención - Tienes que pasar una acción.");
    break;
    
    default :
      console.log ("No entiendo qué quieres hacer.");
    break;
};