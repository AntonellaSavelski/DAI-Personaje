import 'dotenv/config'
import dbHelper from '../../Utils/helpers.js';

const PeliculaTabla = process.env.DB_TABLA_PELICULA;
const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class peliculaService {
    getMovie = async (titulo, orden) => {
        console.log('Función de traer personaje por buscador');
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
       
        const response = await dbHelper(undefined, {titulo, orden}, query)

        if (response.recordset.length==0){
            console.log('No hay ninguna pelicula que tenga ese titulo')
        }
        console.log(response)

        return response.recordset;
    }
    getMovierById = async (idPeli) => {
        console.log('Funcion de traer pelicula por id');
        let query;

        query = `SELECT * FROM ${PeliculaTabla} WHERE idPeli = @id`;
        const peliculas= await dbHelper(idPeli, pelicula, query)

        query = `SELECT * FROM ${personajeTabla}`;
        const personajes = await dbHelper(id, personaje, query)
        peliculas.personajes = personajes

        console.log(response)

        return response.recordset;
    }
    createMovie = async (pelicula) => {
        console.log('Función de crear pelicula');

        const query = `INSERT INTO ${PeliculaTabla}(idPeli, imagenPelicula, titulo, fechaCreacion, calificacion) VALUES (@idPeli, @imagenPelicula, @titulo, @fechaCreacion, @calificacion)`;
        const response = await dbHelper(undefined, pelicula, query)

        console.log(response)

        return response.recordset;
    }
    updateMovieById = async (idPeli, pelicula) => {
        console.log('Función de actualizar pelicula');

        const query = `UPDATE ${PeliculaTabla} SET imagenPelicula = @imagenPelicula, titulo = @titulo, fechaCreacion = @fechaCreacion, calificacion = @calificacion WHERE idPeli = @Id`;
        const response = await dbHelper(idPeli, pelicula, query)
        
        console.log(response)

        return response.recordset;
    }
    deleteMovieById = async (idPeli) => {
        console.log('Esta es la funcion de eliminar');

        const query = `DELETE FROM ${PeliculaTabla} WHERE idPeli = @id`;
        const response = await dbHelper(idPeli, undefined, query)
            
        console.log(response)

        return response.recordset;
    }
}