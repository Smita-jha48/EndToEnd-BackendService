require('dotenv').config();
const express = require('express');
var cors = require('cors');
const route = require('./src/routes');
const PORT = 3004;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', route);

app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
    else
        console.log('Error occurred', error);
}
);