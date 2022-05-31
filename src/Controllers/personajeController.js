import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';
import { Authenticate} from '../common/jwt.strategy.js'

const router = Router();
const PersonajeService = new personajeService();

router.get('/?', Authenticate, async (req, res) => {
  console.log(`Nombre del personaje: ${req.query.nombre}`);
  console.log(`Edad del personaje: ${req.query.edad}`);
  console.log(`Peso del personaje: ${req.query.peso}`);
  console.log(`Id de la pelicula: ${req.query.idPeli}`);
  
  const personaje = await PersonajeService.getCharacter(req.query.nombre,req.query.edad, req.query.peso, req.query.idPeli);

  return res.status(200).json(personaje);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la operación de traer personaje por id`);

  const personaje = await PersonajeService.getCharacterById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('/create', Authenticate, async (req, res) => {
  console.log(`Creando el personaje`);

  const personaje = await PersonajeService.createCharacter(req.body);

  return res.status(201).json(personaje);
});

router.put('/update/:id', Authenticate, async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la función de actualizar`);

  const personaje = await PersonajeService.updateCharacterById(req.params.id, req.body);

  return res.status(200).json(personaje);
});

router.delete('/delete/:id', Authenticate, async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la función de borrar`);

  const personaje = await PersonajeService.deleteCharacterById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;