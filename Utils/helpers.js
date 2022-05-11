import sql from 'mssql'
import config from '../Utils/db.js'

const dbHelper= async (id, parametro, query) => {
    const pool = await sql.connect(config);
    const response = await pool.request()
        .input('id', sql.Int, id ?? 0)
        .input('imagen',sql.VarChar(2048), parametro?.imagen ?? '')
        .input('nombre',sql.VarChar(50), parametro?.nombre ?? '')
        .input('edad',sql.Int, parametro?.edad ?? 0)
        .input('peso',sql.Int, parametro?.peso ?? 0)
        .input('historia',sql.VarChar(2048), parametro?.historia ?? '')
        .input('idPeli',sql.VarChar(2048), parametro?.idPeli ?? '')
        .input('imagenPelicula',sql.VarChar(2048), parametro?.imagenPelicula ?? '')
        .input('titulo',sql.VarChar(2048), parametro?.titulo ?? '')
        .input('fechaCreacion',sql.VarChar(2048), parametro?.fechaCreacion ?? '')
        .input('calificacion',sql.VarChar(2048), parametro?.calificacion ?? '')
        .query(query);
        return response;
};
export default dbHelper;