                    const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  client.user.setGame(`أصبر ف الصبر من ألأيمان .`,'https://www.twitch.tv/v5bz');
  console.log('By Mahdi !!');
});











client.login("NTI3NDYwNjYzMjEyMTEzOTM3.DxjFmg.jOfEXHQ74s7MwfEpIbtyxHlRCHY")


client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {      
    msg.reply("وعليكم ألسلأم")
  }
});

const bannedwords = [
    "كسمك",
    "كس اختك",
    "يا قحبة",
    "يا ابن القحبة",
    "كس امك",
    "ينعن امك"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" عيب ي بأبأ  ").then(msg => {msg.delete(5000)});;
  };
});

client.on('message', msg => {
  if (msg.content === 'باك') {      
    msg.reply("ولكم نورت السيرفر ي كنق !")
  }
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('510598058648535051').roles.find('name', 'new role').edit({color: 'RANDOM'})
    },12000);
  

})

client.on('message', message => {
        if(message.content === 'قفل الشات') {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! ✅  ')
   }
  });


client.on('message', message => {
        if(message.content === 'فتح الشات') {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('Done')
   }
  });

client.on('message', message => {
  if(message.content.startsWith('!invites')) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
 }
});


client.on("message", message => {
    if (message.content.startsWith('!clear')) {
        if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links للاسف ما تقدر تنشر :) ههههههههههايي 😠 ! **`)
    }
});



client.on('message', message => {
        var prefix = "$";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'Say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
