import { Router } from 'express';

const router = Router();

router.post('/send', (req, res) => {
  // Placeholder for external mCP server integration
  res.json({ message: 'mCP server placeholder' });
});

export default router;
