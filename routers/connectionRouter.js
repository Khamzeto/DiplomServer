const express = require('express');
const router = express.Router();
const multer = require('multer');

const connectionController = require('../controllers/connectionController');

router.post('/create', connectionController.createConnection);
router.get('/', connectionController.getAllConnections);
router.get('/:id', connectionController.getConnectionById);
router.delete('/delete', connectionController.deleteСonnectionsByIds);

module.exports = router;
