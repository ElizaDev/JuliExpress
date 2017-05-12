const config = require('./config.json');

//start discord
const Discord = require('discord.js');
const dclient = new Discord.Client();

const token = config.tokens.discord;

dclient.on('ready', () => {
	console.log('We ready, fam!');
});

dclient.on('message', message => {
	if (message.content === 'ping') {
		message.channel.send('pong');
	}
});

dclient.login(token);



var tmi = require("tmi.js");
var options = {
	options: {
		debug: true
	},
	connection: {
		recconect: true
	},
	identity: {
		username: "julibotv1",
		password: config.tokens.twitch
	},
	channels: ["#lizabyte"]
};

var client = new tmi.client(options);

//connect client to the server...
client.connect().then(function(data) {
	client.action(channel,"Hello World!").then(function(data) {
		//data returns [channel]
	}).catch(function(err) {
		//
	});
}).catch(function(er) {

});

client.on("chat", function(channel, userstate, message, self) {
	if (self) return;
	//commands go here
		if(message.startsWith("!ping")) {
			var channel = dclient.channels.find('name','juli-scrabble');
			channel.send('Pont');
			console.log(dclient.channels.first());
		};
		var channel = dclient.channels.find('name','juli-scrabble');
		var username = userstate['username'];
		channel.send('**'+username+'**: '+message);
});
