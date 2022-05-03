import sql from 'mssql'
import config from '../Utils/db.js'

const dbHelper= async (id, personaje, query, nom) => {
    const pool = await sql.connect(config);
    const response = await pool.request()
        .input('id', sql.Int, id ?? 0)
        .input('imagen',sql.VarChar(2048), personaje?.imagen ?? '')
        .input('nombre',sql.VarChar(10), personaje?.nombre ?? '')
        .input('edad',sql.Int, personaje?.edad ?? 0)
        .input('peso',sql.Int, personaje?.peso ?? 0)
        .input('historia',sql.Text, personaje?.historia ?? '')
        .input('nom',sql.Text, nom ?? '')
        .query(query);
        return response;
};
export default dbHelper;