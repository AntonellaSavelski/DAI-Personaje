import 'dotenv/config'
import dbHelper from '../../Utils/helpers.js';

const personajeTabla = process.env.DB_TABLA_PERSONAJE;
const PeliculaTabla = process.env.DB_TABLA_PELICULA;
const IntermediaTabla = process.env.DB_TABLA_INTERMEDIA;

export class personajeService {
    getCharacter = async (nombre, edad, peso, idPeli) => {
        console.log('Función de traer personaje por buscador');
        let query= `SELECT ${personajeTabla}.id, ${personajeTabla}.imagen, ${personajeTabla}.nombre FROM ${personajeTabla}, ${IntermediaTabla} WHERE ${personajeTabla}.id = ${IntermediaTabla}.idPersonaje `;
    
        if (nombre){
            query += `AND nombre = @nombre `;
        }
        if (edad){
            query += `AND edad = @edad `;
        }
        if (peso){
            query += `AND peso = @peso `;
        } 
        if (idPeli){
            query += `AND ${personajeTabla}.id = @idPeli`;
        } 
        console.log(query)
        const response = await dbHelper(undefined, {nombre, edad, peso, idPeli}, query)
        
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
        const personajes= await dbHelper(id, {}, query)

        query = `SELECT ${PeliculaTabla}.* FROM ${PeliculaTabla}, ${personajeTabla}, ${IntermediaTabla} WHERE ${PeliculaTabla}.idPeli = ${IntermediaTabla}.idPelicula AND ${personajeTabla}.id = ${IntermediaTabla}.idPersonaje AND ${personajeTabla}.id = @id`;
        const peliculas = await dbHelper(id, {}, query)
        personajes.recordset[0].peliculas = peliculas.recordset

        return personajes.recordset[0];
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