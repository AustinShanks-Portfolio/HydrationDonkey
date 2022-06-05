module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.channelId === "631372797490364416" && message.attachments.size > 0) {
            if (message.attachments.every(IsImage)) {
                let Animals = ["DOG", "CAT", "FERRET", "DONKEY", "HORSE", "DRAGON", "FOX", "PIKACHU", "FROG", "SONIC", "SANIC", "OZMA"];
                let Percent = Math.floor(Math.random() * 101)
                let RandomAnimal = Animals[Math.floor(Math.random() * Animals.length)];
                if (Percent === 33) {
                    message.channel.send(`I'm ${Percent}.333333333% (Repeating Of Course) postive that's a ${RandomAnimal}.`);
                } else {
                    message.channel.send(`I'm ${Percent}% postive that's a ${RandomAnimal}.`);
                }
            }
        }
	},
};

function IsImage(msgAttach) {
    let url = msgAttach.url;
	if (url.includes(".png") || url.includes(".jpg") || url.includes(".gif")) {
		return true
	} else {
		return false
	}
}