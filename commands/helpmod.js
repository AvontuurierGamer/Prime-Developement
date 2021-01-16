const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();

    var botEmbed =  new discord.MessageEmbed()
            .setTitle("Help-mod")
            .setColor("#03fc0f")
            .addFields(
                {name:"embed", value: "`create an embed in a particular channel`"},
                {name: "clear", value: "`delete some messages`"}
            )
            .setFooter("Help-mod")
            .setTimestamp()


        return message.channel.send(botEmbed);
    }
    

module.exports.help = {
    name: "help-mod"
}