const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnect = require('./src/dbConnect'); 
const Message = require('./models/Message');

const app = express();
app.use(cors()); 
app.use(express.json());

dbConnect();

app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Всі поля обов\'язкові' });
    }

    if (!phone.startsWith('+38') || phone.length !== 13) {  
      return res.status(400).json({ error: 'Невірний формат телефону (має бути +38xxxxxxxxxx, 13 символів)' });
    }

    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Сталася помилка на сервері' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));