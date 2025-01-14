const { Client, ActivityType } = require('discord.js');

/**
 * Log the bot in and set a random activity status
 * 
 * @param {Client} client 
 */
module.exports = (client) => {
    const activities = [
        { name: "Admiring the roses...", type: ActivityType.Custom },
        { name: "Crafting clever responses...", type: ActivityType.Custom },
        { name: "Guiding the Echelon Order...", type: ActivityType.Custom },
        { name: "Whispering secrets of light...", type: ActivityType.Custom },
        { name: "Polishing her crown...", type: ActivityType.Custom },
        { name: "Guarding the fragments...", type: ActivityType.Custom },
        { name: "Reflecting on eternity...", type: ActivityType.Custom },
        { name: "Embracing the unknown...", type: ActivityType.Custom },
        { name: "Gazing into infinity...", type: ActivityType.Custom },
        { name: "Dreaming of the Architect...", type: ActivityType.Custom }, // Infatuation-related activity
    ];

    function updateStatus() {
        const activity = activities[Math.floor(Math.random()*activities.length)];
        client.user.setActivity(activity.name, { type: activity.type });
    }

    console.log('🎭 Activities Set!');
    updateStatus();
    setInterval(updateStatus, 20000);
};