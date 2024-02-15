const express = require("express");
const axios = require("axios");
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Page</title>
</head>
<body>gh
  <h1>Hello, World!</h1>
  <p>This is a sample HTML page served by Express.</p>
</body>
</html>
`;

//
// Starts the microservice.
//
async function startMicroservice(port) {
    // Creates an instance of the Express Web Server.
    const app = express();

    // Registers a HTTP GET route for test
    app.get('/test', (req, res) => {
        res.send(htmlContent);
      });

    // Starts the HTTP server.
    app.listen(port, () => {
        console.log(`Microservice online.`);
    });
}

//
// Application entry point.
//
async function main() {
    // Throws an error if the PORT environment variable is missing.
    if (!process.env.PORT) {
        throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
    }

    // Extracts the PORT environment variable.
    const PORT = process.env.PORT;

    // Starts the microservice
    await startMicroservice(PORT);
}

//
// Run microservice normally or under test.
//
if (require.main === module) {
    // Only start the microservice normally if this script is the "main" module.
    main()
        .catch(err => {
            console.error("Microservice failed to start.");
            console.error(err && err.stack || err);
        });
}
else {
    // Otherwise we are running under test
    module.exports = {
        startMicroservice
    };
}