const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var categoryID = "797557275346468904";

    if(message.channel.parentID != categoryID) return message.reply("this can only be done in a ticket");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if(!addUser) return message.reply("No user specified");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Answer within 30 seconds!")
        .setDescription(`Do you want ${addUser} remove?`)

    var embed = new discord.MessageEmbed()
        .setTitle("user removed!")
        .setColor("GREEN")
        .setTimestamp()
        .addField("deleted user", `${addUser}`)
        .addField("person deleted by", message.author);

    message.channel.send(embedPrompt).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["✅","❌"])

        if(emoji == "✅") {

            msg.delete();

            message.channel.updateOverwrite(addUser, {
                SEND_MESSAGES: false,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGE: false,
                ATTACH_FILES: false,
                CONNECT: false,
                ADD_REACTIONS: false,
                VIEW_CHANNEL: false,
                READ_MESSAGE_HISTORY: false
            });

            message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));

        } else if(emoji == "❌") {

            msg.delete();

            message.reply("deletion canceled").then(msg => msg.delete({ timeout: 5000 }));
        }

    });
    
}

async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}
    

module.exports.help = {
    name: "remove"
}