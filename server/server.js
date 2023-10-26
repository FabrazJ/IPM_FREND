// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 5206; // El puerto en el que escuchará el servidor

// // Habilita CORS para el origen de tu aplicación Angular
// const allowedOrigins = ['http://localhost:4200'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido por CORS'));
//     }s
//   }
// }));

// // Ruta de ejemplo para manejar el proceso de inicio de sesión
// app.post('/api/Usuario', (req, res) => {
//   const response = {
//     success: true,
//     message: 'Inicio de sesión exitoso',
//     user: {
//       id: 1,
//       username: 'michelle',
//       email: 'michelle@example.com',
//       password: '123'
//     }
//   };
//   res.json(response);
// });

// // Inicia el servidor
// app.listen(port, () => {
//   console.log(`El servidor está en ejecución en el puerto ${port}`);
// });
