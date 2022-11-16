const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// port
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./Routes/index.routes'));

app.listen(app.get('port'), ()=> {
    console.log("Server Running on port: " + app.get('port'));
});


