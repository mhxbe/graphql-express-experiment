import express from 'express';
import { getLines, getLineById } from '../services/lines.service.js';

const { Router } = express;
const router = Router();

router
  .get('/', (req, res) => {
    const lines = getLines();
    return res.status(200).json(lines);
  })
  .get('/:lineId', (req, res) => {
    const { lineId } = req.params;
    const line = getLineById(lineId);
    if (!line) {
      return res.status(404).json({ msg: `Line ${lineId} not found.` });
    }
    return res.status(200).json(line);
  });

export { router as linesRouter };
