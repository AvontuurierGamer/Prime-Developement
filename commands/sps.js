const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if(!args[0]) return message.reply("doe !sps <stone, paper or scissor>");

    var options = ["stone", "paper", "scissor"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0].toUpperCase() == "STONE") {

        if(result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, I win!`);
            
        } else if (result == "scissor") {

            return message.channel.send(`I have ${result} :scissors:, You win!`);
  
        } else if (result == "stone") {

            return message.channel.send(`I have ${result} :moyai:, It's a draw!`);

        }

    }

    else if(args[0].toUpperCase() == "PAPER") {

        if(result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, It's a draw!`);
            
        } else if (result == "scissor") {

            return message.channel.send(`I have ${result} :scissors:, I win!`);
  
        } else if (result == "stone") {

            return message.channel.send(`I have ${result} :moyai:, You win!`);

        }

    }

    else if(args[0].toUpperCase() == "SCISSOR") {

        if(result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, You win!`);
            
        } else if (result == "scissor") {

            return message.channel.send(`I have ${result} :scissors:, It's a draw!`);
  
        } else if (result == "stone") {

            return message.channel.send(`I have ${result} :moyai:, I win!`);

        }

    }

}

    

module.exports.help = {
    name: "sps"
}