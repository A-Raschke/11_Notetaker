// require express 
const express = require('express');
// require htmlRoutes from routes folder
const htmlRoutes = require('./routes/htmlRoutes');
// require apiRoutes from routes folder
const apiRoutes = require('./routes/apiRoutes');

// set up a port 3001
const PORT = process.env.PORT || 3001;

// contain express in the app variable
const app = express();

// makes readable in json format when using insomnia
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use the files in public folder
app.use(express.static('public'));

// use apiRoutes and htmlRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listens on port
app.listen(PORT, () => console.log(`APP listening at http://localhost:${PORT}`));