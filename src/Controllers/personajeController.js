import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';

const router = Router();
const personajeService = new personajeService();

router.get('', async (req, res) => {
  console.log(`Esta es la operación de traer todos`);
  
  const personaje = await personajeService.getPersonaje();

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la operación de traer todos`);

  const personaje = await personajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', async (req, res) => {
  console.log(`Creando el personaje`);

  const personaje = await personajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la función de actualizar`);

  const personaje = await personajeService.updatePersonajeById(req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la función de borrar`);

  const personaje = await personajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;