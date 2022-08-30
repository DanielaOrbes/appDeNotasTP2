const fs = require ('fs');
const tareas = require ('./tareas.json');

function listarTareas  (listar) {
    
    for ( let i = 0; i < tareas.length; i++){
      console.log(`${i + 1} - Título: ${tareas[i].titulo} - Estado: ${tareas[i].estado}`);
    }
   return null
} 

module.exports = listarTareas; 