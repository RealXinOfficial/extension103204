'use strict';

import WebSocket, { createWebSocketStream, Server, Receiver, Sender, WebSocket as _WebSocket, WebSocketServer } from './lib/websocket';

createWebSocketStream = require('./lib/stream');
Server = require('./lib/websocket-server');
Receiver = require('./lib/receiver');
Sender = require('./lib/sender');

_WebSocket = WebSocket;
WebSocketServer = Server;

export default WebSocket;
