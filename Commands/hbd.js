const Data = require('../Extra/DataHandler.js');
let { mian } = require('../Data/Mian.json');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hbd')
		.setDescription('Say Happy Birthday to Mian!'),
	async execute(interaction) {
		mian += 1
		Data.Save("Mian", {"mian": mian});
		return interaction.reply(`Happy Birthday <@124686534346539012>!! \nThis is Mian\'s ${GetOrdinal(mian)} Birthday. He is ${mian + 28} years old.`);
	},
};

function GetOrdinal(n) {
	var s = ["th", "st", "nd", "rd"],
		v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
}