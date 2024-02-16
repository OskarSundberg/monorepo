const app = require('express')();
const env = require("dotenv");

module.exports = {
	PORT: process.env.PORT
};
app.get('/', (req, res ) => 
    res.json({ message: 'Docker and azure is easy' }) 
);

const port = process.env.PORT;

app.listen(port, () => console.log(`app listening on http://localhost:${port}/test`) );