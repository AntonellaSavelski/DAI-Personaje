import { Router } from 'express';
import { peliculaService } from '../services/peliculaService.js';
import { Authenticate} from '../common/jwt.strategy.js'

const router = Router();
const PeliculaService = new peliculaService();

router.get('/', Authenticate, async (req, res) => {
    console.log(`Título de la pelicula: ${req.query.titulo}`);
    
    const pelicula = await PeliculaService.getMovie(req.query.titulo,req.query.orden);
  
    return res.status(200).json(pelicula);
});
router.get('/:id', Authenticate, async (req, res) => {
    console.log(`Id de la pelicula: ${req.params.id}`);
    console.log(`Esta es la operación de traer pelicula por id`);
  
    const pelicula = await PeliculaService.getMovieById(req.params.id);
  
    return res.status(200).json(pelicula);
});
  
router.post('/', Authenticate, async (req, res) => {
    console.log(`Creando la pelicula`);
  
    const pelicula = await PeliculaService.createMovie(req.body);
  
    return res.status(201).json(pelicula);
});
  
router.put('/:id', Authenticate, async (req, res) => {
    console.log(`Id de la pelicula: ${req.params.id}`);
    console.log(`Esta es la función de actualizar`);
  
    const pelicula = await PeliculaService.updateMovieById(req.params.id, req.body);
  
    return res.status(200).json(pelicula);
});
  
router.delete('/:id', Authenticate, async (req, res) => {
    console.log(`Id de la pelicula: ${req.params.id}`);
    console.log(`Esta es la función de borrar`);
  
    const pelicula = await PeliculaService.deleteMovieById(req.params.id);
  
    return res.status(200).json(pelicula);
});
  
export default router;
