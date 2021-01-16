const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();

    var botEmbed =  new discord.MessageEmbed()
            .setTitle("help-ticket")
            .setColor("#03fc0f")
            .addFields(
                {name:"ticket", value: "`create a ticket`"},
                {name: "close", value: "`close a ticket this can only be done by a staff member`"},
                {name: "add", value: "`add someone to a ticket`"},
                {name: "remove", value: "`remove someone from a ticket`"}
            )
            .setFooter("help-ticket")
            .setTimestamp()


        return message.channel.send(botEmbed);
    }
    

module.exports.help = {
    name: "help-ticket"
}