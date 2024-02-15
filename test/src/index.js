const app = require('express')();

app.get('/test', (req, res ) => 
    res.json({ message: 'Docker and azure is easy' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );