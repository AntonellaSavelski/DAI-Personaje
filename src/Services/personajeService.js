import 'dotenv/config'
import dbHelper from '../../Utils/helpers.js';

const personajeTabla = process.env.DB_TABLA_PERSONAJE;
const PeliculaTabla = process.env.DB_TABLA_PELICULA;

export class personajeService {
    getCharacter = async (nombre, edad, peso, idPeli) => {
        console.log('Función de traer personaje por buscador');
        let query;

        if (!edad && !nombre ){
            query = `SELECT * FROM ${personajeTabla}`;
        }      
        else if (!nombre){
            query = `SELECT id, imagen, nombre FROM ${personajeTabla} WHERE edad = @edad`;
        }
        else if (!edad){
            query = `SELECT id, imagen, nombre FROM ${personajeTabla} WHERE nombre = @nombre`;
        }
        else if ((nombre)&&(edad)){
            query = `SELECT id, imagen, nombre FROM ${personajeTabla} WHERE nombre = @nombre AND edad = @edad`;
        } 
        const response = await dbHelper(undefined, {nombre, edad}, query)

        if (response.recordset.length==0){
            console.log('No hay ningun personaje que coincida con esos valores')
        }
        console.log(response)

        return response.recordset;
    }
    getCharacterById = async (id) => {
        console.log('Funcion de traer personaje por id');
        let query;

        query = `SELECT * FROM ${personajeTabla} WHERE id = @id`;
        const personajes= await dbHelper(id, personaje, query)

        query = `SELECT * FROM ${PeliculaTabla}`;
        const peliculas = await dbHelper(id, pelicula, query)
        personajes.peliculas = peliculas

        console.log(response)

        return response.recordset;
    }
    createCharacter = async (personaje) => {
        console.log('Función de crear personaje');

        const query = `INSERT INTO ${personajeTabla}(imagen, nombre, edad, peso, historia) VALUES (@imagen, @nombre, @edad, @peso, @historia)`;
        const response = await dbHelper(undefined, personaje, query)

        console.log(response)

        return response.recordset;
    }
    updateCharacterById = async (id, personaje) => {
        console.log('Función de actualizar personajes');

        const query = `UPDATE ${personajeTabla} SET imagen = @imagen, nombre = @nombre, edad = @edad, peso = @peso, historia = @historia WHERE id = @Id`;
        const response = await dbHelper(id, personaje, query)
        
        console.log(response)

        return response.recordset;
    }
    deleteCharacterById = async (id) => {
        console.log('Esta es la funcion de eliminar');

        const query = `DELETE FROM ${personajeTabla} WHERE id = @id`;
        const response = await dbHelper(id, undefined, query)
            
        console.log(response)

        return response.recordset;
    }
}