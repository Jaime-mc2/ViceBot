const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjkwNjU0ODUyMTQxMDIzMjUy.XnUk2w.WsDkRwY_Nu7bxlI2fy7jaDO9m9Q";

bot.on("ready", function() {
    console.log("Logged in!");
});

bot.on("message", function(message) {
    let words = message.content.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === "vicebot") {
            message.channel.send("Qué dices? Qué coño quieres?");
            break;
        } else if (words[i].toLowerCase() === "vice") {
            if (i != words.length - 1) {
                if (words[i + 1].toLowerCase() === "bot") {
                    message.channel.send("Qué dices? Qué coño quieres?");
                    break;
                }
            }
        }
    }
});

bot.login(token);
