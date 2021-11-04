const Datastore = require('nedb');

let db = new Datastore({ filename: 'db/personas.db', autoload: true });

exports.agregarPersona = function(nombres, apellidos, correo) {
    let persona = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo
    };

    db.insert(persona, function(error, nuevoObjeto) {

    });
}

exports.obtenerPersonas = function(operacion) {
    db.find({}, function(error, personas) {
        if (personas) {
            operacion(personas);
        }
    });
};

exports.eliminarPersona = function(id) {
    db.remove({ _id: id }, {}, function(error, numeroRegistrosEliminados) {

    });
}