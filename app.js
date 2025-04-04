const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Подключение к базе данных
connectDB();

// Middleware для парсинга JSON
app.use(express.json());

// Корневой маршрут
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const authRoutes = require('./routes/authRoutes'); // Маршруты аутентификации
const taskRoutes = require('./routes/taskRoutes'); // Маршруты задач

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Запуск сервера
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));