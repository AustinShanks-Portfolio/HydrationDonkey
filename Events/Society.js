module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes("society") || message.content.toLowerCase().includes("dammit gear")) {
            message.channel.send("WE LIVE IN A SOCIETY!");
        }
	},
};