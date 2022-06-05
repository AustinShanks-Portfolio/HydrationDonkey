const GearGear = '141788421684330497';
const Kalcifur = '142089698343387138';
const Tamek = '198622588979642369';
const Nic = '261701277023469568';

module.exports = {
	name: 'messageCreate',
	execute(msg) {
		if (msg.author.bot) return;
		if (msg.content.toLowerCase().includes('danuser')) {
			msg.reply("Did you mean Corpsefucker?");
		}
		if (msg.author.id == GearGear) {
			GearMemes(msg);
		}
		if (msg.author.id == Kalcifur) {
			KalcifurMemes(msg);
		}
		if (msg.content.toLowerCase().includes('soul') && (msg.author.id == Tamek || msg.author.id == Nic)) {
			msg.reply('GINGERS DON\'T HAVE SOULS');
		}
	},
};

const FeralEyes = [
	'This explains the Color Blindness',
	'Still inferior to Astro\'s Laser Eyes.',
	'This explains so much.'
];

function GearMemes(msg) {
	if (msg.content.toLowerCase().includes('soul')) {
		msg.reply('ROBOTS DON\'T HAVE SOULS.');
	}
	if (msg.content.toLowerCase().includes('feral eyes')) {
		let rng = Math.floor(Math.random() * FeralEyes.length);
		msg.reply(FeralEyes[rng])
	}

}

function KalcifurMemes(msg) {
	if (msg.content.toLowerCase().includes('javelin')) {
		msg.reply('Trhow the Spear or Get trhown on the Bench \n-Prince Epheriam of Fire Emblem: Sacred Stones \nOct 7 2004 Avaliable on GBA and Wii U and Nintendo 3DS.');
	}
}