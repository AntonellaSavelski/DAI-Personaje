import 'dotenv/config'
import dbHelper from '../../Utils/helpers.js';

const PeliculaTabla = process.env.DB_TABLA_PELICULA;
const personajeTabla = process.env.DB_TABLA_PERSONAJE;
const IntermediaTabla = process.env.DB_TABLA_INTERMEDIA;

export class peliculaService {
    getMovie = async (titulo, orden) => {
        let query;

        if (!titulo && !orden){
            query = `SELECT idPeli, imagenPelicula, titulo, fechaCreacion FROM ${PeliculaTabla}`;
        }      
        else if (!orden){
            query = `SELECT idPeli, imagenPelicula, titulo, fechaCreacion FROM ${PeliculaTabla} WHERE titulo = @titulo`;
        }
        else if (orden === "ASC"){
            query = `SELECT idPeli, imagenPelicula, titulo, fechaCreacion FROM ${PeliculaTabla} order by fechaCreacion ASC`;
        }
        else if (orden === "DESC"){
            query = `SELECT idPeli, imagenPelicula, titulo, fechaCreacion FROM ${PeliculaTabla} order by fechaCreacion DESC`;
        }
       
        const response = await dbHelper(undefined,{titulo, orden}, query)

        if (response.recordset.length==0){
            console.log('No hay ninguna pelicula que tenga ese titulo')
        }
        console.log(response)

        return response.recordset;
    }
    getMovieById = async (idPeli) => {
        let query;

        query = `SELECT * FROM ${PeliculaTabla} WHERE idPeli = @id`;
        const peliculas= await dbHelper(idPeli, {}, query)

        query = `SELECT ${personajeTabla}.* FROM ${personajeTabla}, ${PeliculaTabla}, ${IntermediaTabla} WHERE ${personajeTabla}.id = ${IntermediaTabla}.idPersonaje AND ${PeliculaTabla}.idPeli = ${IntermediaTabla}.idPelicula AND ${PeliculaTabla}.idPeli = @id`;
        const personajes = await dbHelper(idPeli, {}, query)
        peliculas.recordset[0].personajes = personajes.recordset

        return peliculas.recordset[0];
    }
    createMovie = async (pelicula) => {

        const query = `INSERT INTO ${PeliculaTabla}(imagenPelicula, titulo, fechaCreacion, calificacion) VALUES (@imagenPelicula, @titulo, @fechaCreacion, @calificacion)`;
        const response = await dbHelper(undefined, pelicula, query)

        console.log(response)

        return response.recordset;
    }
    updateMovieById = async (idPeli, pelicula) => {

        const query = `UPDATE ${PeliculaTabla} SET imagenPelicula = @imagenPelicula, titulo = @titulo, fechaCreacion = @fechaCreacion, calificacion = @calificacion WHERE idPeli = @Id`;
        const response = await dbHelper(idPeli, pelicula, query)
        
        console.log(response)

        return response.recordset;
    }
    deleteMovieById = async (idPeli) => {

        const query = `DELETE FROM ${PeliculaTabla} WHERE idPeli = @id`;
        const response = await dbHelper(idPeli, undefined, query)
            
        console.log(response)

        return response.recordset;
    }
}