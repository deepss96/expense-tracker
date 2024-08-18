const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to submit the contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({
            name,
            email,
            phone,
            message,
        });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit the form' });
    }
});

module.exports = router;
