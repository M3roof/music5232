const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";

var adminprefix = '!'
/////////////////////////
////////////////////////










client.on("message", message => {
    if(message.content.startsWith(".verify")) { // الامر
      let number = Math.floor((Math.random() * 4793) + 17); // تعريف الرقم بيكون عشوائي math.random + math.floor عشان مايكون فيه فواصل
    var Canvas = require('canvas') // تعريف الكانفاس لازم تشيله اذا كنت معرفه قبل
  , Image = new Canvas.Image // صنع صورة جديدة
  , canvas = Canvas.createCanvas(89, 50) // قياسات الصورة
  , ctx = canvas.getContext('2d');
  ctx.font = '25px Impact'; // الخط
  let args = message.content.split(" ").slice(1); // تعريف ال args
 
Image.src = canvas.toBuffer();
 
    console.log(Image);
ctx.fillText(num,17, 35); // احداثيات الرقم
 
 
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();
      message.reply('**قم بكتابة الرقم الضاهر بالصورة**')
      let filter = m => m.author.id === message.author.id; // تعريف الفلتر
      message.channel.sendFile(canvas.toBuffer()).then(m => { //يرسل الصورة
        message.channel.awaitMessages(res => res.content == `${number}` && filter, { //  محتوى الرسالة الي لازم يكتبها + لازم يكتبها بس الكاتب اذا كتب الرقم شخص ثاني مايزبط ونلاحظ ذا من خلال تعريف الفلتر
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => { // اذا كتب الرقم صح
          message.reply('**تم تفعيلكء**') // يرد على العضو
          message.delete(); // يحذف الرسالة
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "◈- Verified")); // الرتبة الي تبي البوت يعطيها للعضو
          message.member.removeRole(message.guild.roles.find(c => c.name == "◈- Not Verified")); // (الرتبة الي تبي البوت يشيلها من العضو (يمديك تحذف ذا السطر
          // السطر الي فوق يمديك تشيله اذا كنت تبي  البوت مايشيل منه اي رتبة بس يعطيه رتبة
        }).catch(() => {
          m.edit(`You took to long to type the number.nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})
















const developers = ["509243410234867724","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.BOT_TOKEN);
