
  // Import the WebSocketServer class from the 'ws' library
    const { WebSocketServer } = require('ws');

    // Create a new WebSocket server instance, listening on a specific port
    let roomid = getRandomInt(10000, 99999);
    const wss = new WebSocketServer({ port: roomid });

    // Event listener for new WebSocket connections
    wss.on('connection', function connection(ws) {
        console.log('A new client connected!');

        // Event listener for messages received from this client
        ws.on('message', function incoming(message) {
            console.log('Received message: %s', message);

            // Send a response back to the client
            ws.send('Server received your message: ' + message);
        });

        // Event listener for when this client closes the connection
        ws.on('close', () => {
            console.log('Client disconnected.');
        });

        // Event listener for errors with this client connection
        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });

        // Send a welcome message to the newly connected client
        ws.send('Welcome to the WebSocket server!');
    });

    console.log('Awoken Server Created Use this pin' + roomid);