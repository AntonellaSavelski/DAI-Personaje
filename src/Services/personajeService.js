import 'dotenv/config'
import dbHelper from '../../Utils/helpers.js'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class personajeService {
    getPersonaje = async (nombre, edad) => {
        console.log('Función de traer personaje por nombre');

        const query = `SELECT * FROM ${personajeTabla} WHERE nombre = @nombre AND edad = @edad`;
        const response = await dbHelper(undefined, {nombre, edad}, query)

        console.log(response)

        return response.recordset;
    }
    getPersonajeById = async (id) => {
        console.log('Funcion de traer personaje por id');

        const query = `SELECT * FROM ${personajeTabla} where id = @id`;
        const response = await dbHelper(id, undefined, query)

        console.log(response)

        return response.recordset[0];
    }
    createPersonaje = async (personaje) => {
        console.log('Función de crear personaje');

        const query = `INSERT INTO ${personajeTabla}(imagen, nombre, edad, peso, historia) VALUES (@imagen, @nombre, @edad, @peso, @historia)`;
        const response = await dbHelper(undefined, personaje, query)

        console.log(response)

        return response.recordset;
    }
    updatePersonajeById = async (id, personaje) => {
        console.log('Función de actualizar personajes');

        const query = `UPDATE ${personajeTabla} SET imagen = @imagen, nombre = @nombre, edad = @edad, peso = @peso, historia = @historia WHERE id = @Id`;
        const response = await dbHelper(id, personaje, query)
        
        console.log(response)

        return response.recordset;
    }
    deletePersonajeById = async (id) => {
        console.log('Esta es la funcion de eliminar');

        const query = `DELETE FROM ${personajeTabla} WHERE id = @id`;
        const response = await dbHelper(id, undefined, query)
            
        console.log(response)

        return response.recordset;
    }
}