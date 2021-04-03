const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'))


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

const tmi = require('tmi.js');
require('dotenv').config()

const opts = {
  identity: {
    username: "Stirner",
    password: process.env.PASSWORD
  },
  channels: [
    "Stirner"
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  //if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName.startsWith('!color ')) {
      command = commandName.substring(7)
      console.log(command)
      io.emit('color', command);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
