import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';

const router = Router();
const PersonajeService = new personajeService();

router.get('/?', async (req, res) => {
  console.log(`Nombre del personaje: ${req.query.nombre}`);
  console.log(`Esta es la operación de traer todos`);
  
  const personaje = await PersonajeService.getPersonaje(req.query.nombre);

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la operación de traer personaje por id`);

  const personaje = await PersonajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('/create', async (req, res) => {
  console.log(`Creando el personaje`);

  const personaje = await PersonajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/update/:id', async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la función de actualizar`);

  const personaje = await PersonajeService.updatePersonajeById(req.params.id, req.body);

  return res.status(200).json(personaje);
});

router.delete('/delete/:id', async (req, res) => {
  console.log(`Id del personaje: ${req.params.id}`);
  console.log(`Esta es la función de borrar`);

  const personaje = await PersonajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;