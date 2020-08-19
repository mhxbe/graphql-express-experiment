import express from 'express';
import {
  getLinesColors,
  getLineColorsByLineId,
} from '../services/colors.service.js';

const { Router } = express;
const router = Router();

router
  .get('/', (req, res) => {
    const linesColors = getLinesColors();
    return res.status(200).json(linesColors);
  })
  .get('/:lineId', (req, res) => {
    const { lineId } = req.params;
    const lineColors = getLineColorsByLineId(lineId);
    if (!lineColors) {
      return res.status(404).json({ msg: `Line ${lineId} not found.` });
    }
    return res.status(200).json(lineColors);
  });

export { router as colorsRouter };
