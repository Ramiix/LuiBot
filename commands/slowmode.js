  
module.exports = {
        name: "slowmode",
        description: "Set the slowmode for the channel!",
        aliases: ['sm'],
        permissions: ['ADMINISTRATOR'],
    async execute(client, message, args, Discord) {
  
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
      
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}**`
    );
  },
};