const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();

    var botEmbed =  new discord.MessageEmbed()
            .setTitle("Help-fun")
            .setColor("#03fc0f")
            .addFields(
                {name:"rps", value: "`play rock paper scissor`"}
            )
            .setFooter("Help-fun")
            .setTimestamp()


        return message.channel.send(botEmbed);
    }
    

module.exports.help = {
    name: "help-fun"
}