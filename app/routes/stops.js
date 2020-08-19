import express from 'express';
import {
  getStops,
  getStopById,
  createStop,
} from '../services/stops.service.js';

const { Router } = express;
const router = Router();

router
  .get('/', (req, res) => {
    const stops = getStops();
    return res.status(200).json(stops);
  })
  .get('/:stopId', (req, res) => {
    const stopId = req.params.stopId;
    const stop = getStopById(stopId);
    if (!stop) {
      return res.status(404).json({ msg: `Stop ${stopId} not found.` });
    }
    return res.status(200).json(stop);
  })
  .post('/', (req, res) => {
    const stops = createStop(req.body);
    return res.status(200).json(stops);
  });

export { router as stopsRouter };
