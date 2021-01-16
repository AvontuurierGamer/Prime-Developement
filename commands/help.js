const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();

    var botEmbed =  new discord.MessageEmbed()
            .setTitle("Help")
            .setColor("#03fc0f")
            .addFields(
                {name:"⭐mod", value: "`!help-mod`"},
                {name:"😉fun", value: "`!help-fun`"}
            )
            .setFooter("Help")
            .setTimestamp()


        return message.channel.send(botEmbed);
    }
    

module.exports.help = {
    name: "help"
}