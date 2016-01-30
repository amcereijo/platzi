/*

*/

import express from 'express';
import http from 'http';
import engine from 'socket.io';
import dbapi from './db-api';

const port = 3000;
const app = express();

//static routes
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('/pokemons', (req, res) => {
	dbapi.pokemons.find((pokemons) => {
		res.json(pokemons);
	});
});


let server = http.createServer(app).listen(port, () => {
	console.log(`Listen in port ${port}`);
});

const io = engine.listen(server);
io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		io.emit('message', msg);
	});
});