const cron = require('cron');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		// let scheduledMessage = new cron.CronJob('00 0,30 * * * *', () => {
		// 	const guild = client.guilds.cache.get('245383365300191232');
		// 	const channel = guild.channels.cache.get('946648224926695425');
		// 	channel.send('Don\'t forget to Hydrate! \nIf you found this reminder helpful, please react with an appropriate emoji.');
		// });
		// When you want to start it, use:
		// scheduledMessage.start();

		// let scheduledMessage = new cron.CronJob('00 0,30 * * * *', () => {
		// 	const guild = client.guilds.cache.get('245383365300191232');
		// 	const channel = guild.channels.cache.get('946648224926695425');
		// 	channel.send('Don\'t forget to get a Darkmoon Faire Buff! \nIf you found this reminder helpful, please react with an appropriate emoji.');
		// });
		// When you want to start it, use:
		// scheduledMessage.start();

		// let scheduledMessage = new cron.CronJob('00 00 21 * *  2,4', () => {
		// 	const guild = client.guilds.cache.get('245383365300191232');
		// 	const channel = guild.channels.cache.get('245383365300191232');
		// 	channel.send('<@124686534346539012>!!, This your pre Raid Reminder to check your damn Conduits.\n Prot: <https://tinyurl.com/2xmkh82a> \nFury: <https://tinyurl.com/2p98hzwk> (Replace Merciless Bonegrind with Hack and Slash for Single Target) \n Arms: <https://tinyurl.com/2v48b9rc> \n I\ve taken the Brainwork out of this for you.');
		// });
		// //When you want to start it, use:
		// scheduledMessage.start();

	},
};