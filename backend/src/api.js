import { Router } from 'express';
import lmStudioRouter from './lmStudio.js';
import ragRouter from './rag.js';
import mcpRouter from './mcp.js';

const router = Router();
const reports = [];

router.post('/report', (req, res) => {
  const { description, photo, lat, lon } = req.body;
  const report = {
    report_id: reports.length + 1,
    timestamp: new Date().toISOString(),
    lat,
    lon,
    description,
    photo_url: photo,
    verified: false,
    user_id: req.userId || null,
    source: 'manual',
  };
  reports.push(report);
  res.status(201).json(report);
});

router.get('/reports', (req, res) => {
  const { lat, lon, radius = 10 } = req.query;
  if (!lat || !lon) return res.json(reports);
  const filtered = reports.filter((r) => {
    const dx = r.lat - parseFloat(lat);
    const dy = r.lon - parseFloat(lon);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= radius;
  });
  res.json(filtered);
});

router.use('/lm', lmStudioRouter);
router.use('/rag', ragRouter);
router.use('/mcp', mcpRouter);

export default router;
