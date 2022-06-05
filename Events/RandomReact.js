const GuildEmojis = [
	'884927060072624219', //Frank
	'754256812622086215', //AsianCatSalad
	'754256563006341132', //BeegCat
	'784560416050380830', //UtsuBeatings
	'819831195919319070', //UtsuDrip
	'827330600872443964', //UtsuPickle
	'754923539592773663', //UtsuShopSmart
	'754191583645270016', //UtsuZelix
	'754234492599926814', //VYBUR
	'938716678362103819', //meatshield
];

module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot) return;
        if (message.member.roles.cache.find(role => role.name === 'Memester')  && message.channelId != '946648224926695425') {
            let rng = Math.floor(Math.random() * GuildEmojis.length);
            message.react(GuildEmojis[rng]);
        }
	},
};