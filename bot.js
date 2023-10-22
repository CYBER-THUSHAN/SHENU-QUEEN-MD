require("dotenv").config();  

  //import fetch from "node-fetch"; 
  const moment = require("moment-timezone"); 
  //const fetch = require("node-fetch"); 
  const axios = require("axios"); 
  const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia,  areJidsSameUser, getContentType, downloadMediaMessage } = require("@adiwajshing/baileys");  
  const fs = require("fs");  
  const util = require("util");  
  const chalk = require("chalk");  
  const googleTTS = require("google-tts-api");
  const { Configuration, OpenAIApi } = require("openai");  
  const { DiscussServiceClient } = require("@google-ai/generativelanguage"); 
  const { GoogleAuth } = require("google-auth-library");
  const pm2 = require('pm2');
  const chokidar = require('chokidar');
  const eco = require('discord-mongoose-economy');
  //const ty =  eco.connect('mongodb+srv://rajuji:8jJOF9xIbf4F71U6@cluster0.ojdxgnu.mongodb.net/?retryWrites=true&w=majority');
  const mongoDB = require("./lib/mongoDB");
  const ytdl = require("@distube/ytdl-core");
  const GifEncoder = require('gif-encoder-2');
  const yts = require('yt-search');
  const ytsr = require('ytsr');
//  const translate = require('translate-google');
  const vm = require('node:vm');
  const translate = require('translate-google-api');
  const os = require('os');
  const ffmpeg = require('fluent-ffmpeg');
// Your code using fetch here
  const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const botname = "GSS Botwa";
const OWNER_NAME = "Sid bhai";
   const crypto = require('crypto');
  const fg = require('api-dylux');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);


  module.exports = client = async (client, m, chatUpdate, store) => {  
    try {  
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";  

//let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
  
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//If you want a single prefix, you replace it with this = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)

const { parseMention } = require('./lib/myfunc.js');
let argsLog;
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
 

//const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
	//stop another
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const owner = "919142294671";

const MODE = process.env.MODE;

//const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
const BOT_NAME = process.env.BOT_NAME || 'GSS Botwa'
const OWNER_NAME = process.env.OWNER_NAME || 'Goutam'
const APIKEY = process.env.APIKEY;
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const isEval = body.startsWith('=>')

const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
 const owners = JSON.parse(fs.readFileSync('./database/owner.json'))
 const isPrem = prem.includes(m.sender)
 const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
	
	const GssCreator = [owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  const GssOwner = m.sender == botNumber ? true : false
  const Badgss = JSON.parse(fs.readFileSync('./database/bad.json'))
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
          const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
 
//=================================================//}  
//  Bot Prosess Time
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
//Uptime
  const uptimeMessage = `*I am alive now since ${hours}h ${minutes}m ${seconds}s*`;
           //TIME Wisher 
 const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss') 
 const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY') 
 const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')   
   if(time2 < "23:59:00"){ 
 var pushwish = `Good Night 🌌` 
  } 
  if(time2 < "19:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "18:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "15:00:00"){ 
 var pushwish = `Good Afternoon 🌅` 
  } 
  if(time2 < "11:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  } 
  if(time2 < "05:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  }  
    
  

//const sendMsg = await sock.sendMessage(id, reactionMessage)
    //  const from = m.chat;  
      const reply = m.reply;  
      //const sender = m.sender;  
     // const mek = chatUpdate.messages[0];  
  
      const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
      };  
  
async function replyprem(teks) {
    m.reply(`This feature is specifically for premium user, contact the owner to become premium user`)
}


function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function loading () {
var goutamload = [
`ㅤʟᴏᴀᴅɪɴɢ
《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████▒▒▒▒▒▒▒▒》30%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ███████▒▒▒▒▒》50%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ██████████▒▒》80%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████████████》100%`,
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < goutamload.length; i++) {
//await delay(10)

    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: goutamload[i]
        }
      }
    }, {});
}}  
  

if (process.env.REACODING || 'true' === 'true' && command) {
client.sendPresenceUpdate('composing', from)
}
if (process.env.AUTO_READ || 'true' === 'true' && command) {
client.readMessages([m.key])
}
if (process.env.ALWAYS_ONLINE || 'false' === 'false') { 
  client.sendPresenceUpdate('available', m.chat) 
}
else {
  client.sendPresenceUpdate('unavailable', m.chat)
}

if (process.env.AUTO_BLOCKER && (m.sender.startsWith('212')||m.sender.startsWith('994'))) {
  client.updateBlockStatus(m.sender, 'block');

  if (m.isGroup) {
    client.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
  }
}


if (antiToxic)
if (Badgss.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (GssCreator) return m.reply(bvl)
        await client.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			client.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}


//antilink for group chat
if (Antilinkgc) {
    if (budy.match(`chat.whatsapp.com`)) {
        
        // Add a variable to track if the warning has been sent
        let warningSent = false;
        
        let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        
        if (isgclink) {
            // Check if the warning has already been sent
            if (!warningSent) {
                client.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you sent is a link to this group`});
                warningSent = true; // Set the flag to true
            }
            return; // Don't perform further actions
        }
        
        if (GssCreator) {
            // Check if the warning has already been sent
            if (!warningSent) {
                client.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`});
                warningSent = true; // Set the flag to true
            }
            return; // Don't perform further actions
        }
        
        kice = m.sender
        await client.sendMessage(m.chat,
        {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant
            }
        })
        
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        
        // Check if the warning has already been sent
        if (!warningSent) {
            client.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending a group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        }
    }            
}
        
      if (isCmd) {  
        switch (command) {  
          case "menu":  
const reactionMessage = {
            react: {
                text: "🕐", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📑", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage);              
    // let thumb = "./me.jpg"; 
     let me = m.sender 


 await loading()
   await m.reply(`
   Hi 👋 *${pushname}*
   
╭◯━━━  *Bot Info* ━━━◯
│ 🤖 *Bot Name* : *GSS_BOTWA*
│ 👤 *Owner Name* : *${OWNER_NAME}*
│ 👨‍💻 *owner number* : *${owner}*
│ 🚀 *Prefix* :  *${prefix}*
│ ⏳ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
│ 🌐 *Mode* : *Public*
 ╰◯━━━━━━━━━━━━◯       
 
╭◯━━━ *User Info* ━━━◯
│ 🧑 - *Name*: ${pushname}   
│ 📞 - *Number*: @${me.split('@')[0]}
│ ✅ - *Premium*: ✅        
╰◯━━━━━━━━━━━━◯

╭◯━━ *Time Info* ━━◯
│ ⏰ - *Time*: ${xtime}   
│ 📅 - *Date*: ${xdate}   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━━━ *Help* ━━━━━◯
│ 🆘 - Please Type */help* 
╰◯━━━━━━━━━━━━━━━━◯

╭◯━ *Bot Commands* ━━━━━◯
│ 1️⃣ - .gpt 🅕 - 
│ 2️⃣ - .img 🅕 - 
│ 3️⃣ - .dall 🅕 -   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━ *Bard* ━━━━━◯
│ 🎭 - .bard 🅕           
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Tools Menu* ━━━━━◯
│ 🗣 - .tts 🅕
│ 📋 - .delete 🅕
│ 🌐 - .translate 🅕
│ ℹ️ - .info 🅕
│ 🧬 - Getbio
│ 🖇️ - tinyurl
│ 📧 - tempmail
│ 📩 - checkmail
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Group Menu* ━━━━━◯
│ 🚫 - .kick @user
│ ➕ - .add @user
│ 👑 - .promote @user
│ 👤 - .demote @user
│ 📣 - .group off / on
│ 🔗 - .linkgc
│ 🕠 - closetime
│ 🕥 - opentime
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Owner Menu* ━━━━━◯
│ ✏️ - .setname 🅕
│ 📝 - .setbio 🅕
│ 🚫 - .block 🅕
│ ✅ - .unblock 🅕
│ 😴 - .sleep 🅕
│ 🔁 - .autoread 🅕
│ 🌐 - .self 🅕
│ 🌍 - .public 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Bug Reporting* ━━◯
│ 🐞 - .bug 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Sticker Menu* ━━━◯
│ 🎨 - .sticker 🅕          
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Search Menu* ━━━━━◯
│ 🔍 - .google 🅕
│ 📷 - .insta 🅕
│ 📦 - .apk 🅕
│ 🎬 - .yts
│ 🌦️ - .weather 🅕
│ 🎵 - .lyrics 🅕
│ 🕵️️ - .githubstalk 🅕
│ 👤 - .igs 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━* Downloaders* ━◯
│ 🎬 - video
│ 🎵 - song
│ 🌐 - fb
│ 📂 - Gdrive
│ 🔖 - gitclone
╰◯━━━━━━━━━━━━━◯

╭◯━*Anime (18+)*━━━━◯
│ 🔞 - nsfw
╰◯━━━━━━━━━━━━━◯
          `);
    
break;

case 'nsfw':
    await m.reply(`
╭◯━*Anime (18+)*━━━━◯
│ 🍑 - .hentai 🅕 
│ 😺 - .neko  🅕 
│ 🙇♂️ - .trap   🅕 
│ 💦 - .gasm 🅕 
│ 😮 - .ahegao 🅕 
│ 🍑 - .ass 🅕 
│ 🔞 - .bdsm 🅕 
│ 👄 - .blowjob 🅕 
│ 👀 - .cuckold 🅕 
│ 💦 - .cum 🅕
│ 👩🦰 - .milf 🅕 
│ 🦄 - .eba 🅕 
│ 💋 - .ero 🅕 
│ 👠 - .femdom 🅕 
│ 👣 - .foot 🅕 
│ 🥂 - .gangbang 🅕
│ 👓 - .glasses 🅕 
│ 🎸 - .jahy 🅕 
│ 🍆 - .masturbation 🅕 
│ 📚 - .manga   🅕 
│ 😼 - .neko-hentai  🅕 
│ 😽 - .neko-hentai2 🅕 
│ 🍭 - .nsfwloli 🅕 
│ 🎉 - .orgy 🅕 
│ 👙 - .panties 🅕 
│ 🍑 - .pussy 🅕 
│ 🐙 - .tentacles 🅕
│ 🦵 - .thighs 🅕 
│ 👭 - .yuri 🅕 
│ 🩱 - .zettai 🅕 
╰◯━━━━━━━━━━━━━◯
    `);
break;


case 'song':
case 'play':
case 'ytmp3':
case 'music':
case 'audio':
  if (!text) throw `Use example ${prefix + command} man meri jan`;

  let searchAudio = await yts(text);
  if (!searchAudio.videos || searchAudio.videos.length === 0) {
    throw 'No videos found for the given search query';
  }

  let vidAudio = searchAudio.videos[Math.floor(Math.random() * searchAudio.videos.length)];
  if (!vidAudio) throw 'Video Not Found, Try Another Title';
  let { title: titleAudio, thumbnail: thumbnailAudio, timestamp: timestampAudio, views: viewsAudio, ago: agoAudio, url: urlAudio } = vidAudio;
  let wmAudio = 'Audio downloaded by Gss_botwa';

  let captvidAudio = `
┏━━━━━━━━━━━━━━━━━━━━┓
┃ Audio by Gss_Botwa
┃ 📝 Title: ${titleAudio}
┃ ⏳ Duration: ${timestampAudio}
┃ 👁️ Views: ${viewsAudio}
┃ 📅 Upload: ${agoAudio}
┃ 🔗 Link: ${urlAudio}
┗━━━━━━━━━━━━━━━━━━━━┛`;

  client.sendMessage(m.chat, { image: { url: thumbnailAudio }, caption: captvidAudio }, { quoted: m });

  const audioStream = ytdl(urlAudio, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  const tmpDirAudio = os.tmpdir();
  const writableStreamAudio = fs.createWriteStream(`${tmpDirAudio}/${titleAudio}.mp3`);

  await streamPipeline(audioStream, writableStreamAudio);

  let thumbnailDataAudio;
  try {
    const thumbnailResponseAudio = await client.getFile(thumbnailAudio);
    thumbnailDataAudio = thumbnailResponseAudio.data;
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    thumbnailDataAudio = '';
  }

  const docAudio = {
    audio: {
      url: `${tmpDirAudio}/${titleAudio}.mp3`,
    },
    mimetype: 'audio/mp4',
    fileName: `${titleAudio}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: urlAudio,
        title: titleAudio,
        body: wmAudio,
        sourceUrl: urlAudio,
        thumbnail: thumbnailDataAudio,
      },
    },
  };

  await client.sendMessage(m.chat, docAudio, { quoted: m });

  fs.unlink(`${tmpDirAudio}/${titleAudio}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDirAudio}/${titleAudio}.mp3`);
    }
  });
  break;

case 'ytmp4':
case 'video':
case 'vid':
  if (!text) throw `Use example ${prefix + command} man meri jan`;

  let searchVideo = await yts(text);
  if (!searchVideo.videos || searchVideo.videos.length === 0) {
    throw 'No videos found for the given search query';
  }

  let vidVideo = searchVideo.videos[Math.floor(Math.random() * searchVideo.videos.length)];
  if (!vidVideo) throw 'Video Not Found, Try Another Title';
  let { title: titleVideo, thumbnail: thumbnailVideo, timestamp: timestampVideo, views: viewsVideo, ago: agoVideo, url: urlVideo } = vidVideo;
  let wmVideo = 'video downloaded by Gss_botwa';

  let captvidVideo = `
┏━━━━━━━━━━━━━━━━━━━━┓
┃ Video by Gss_Botwa
┃ 📝 Title: ${titleVideo}
┃ ⏳ Duration: ${timestampVideo}
┃ 👁️ Views: ${viewsVideo}
┃ 📅 Upload: ${agoVideo}
┃ 🔗 Link: ${urlVideo}
┗━━━━━━━━━━━━━━━━━━━━┛`;

  client.sendMessage(m.chat, { image: { url: thumbnailVideo }, caption: captvidVideo }, { quoted: m });

  const videoStream = ytdl(urlVideo, {
    filter: 'videoandaudio',
    quality: 'highest',
  });

  const tmpDirVideo = os.tmpdir();
  const writableStreamVideo = fs.createWriteStream(`${tmpDirVideo}/${titleVideo}.mp4`);

  await streamPipeline(videoStream, writableStreamVideo);

  let thumbnailDataVideo;
  try {
    const thumbnailResponseVideo = await client.getFile(thumbnailVideo);
    thumbnailDataVideo = thumbnailResponseVideo.data;
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    thumbnailDataVideo = '';
  }

  const docVideo = {
    video: {
      url: `${tmpDirVideo}/${titleVideo}.mp4`,
    },
    mimetype: 'video/mp4',
    fileName: `${titleVideo}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: urlVideo,
        title: titleVideo,
        body: wmVideo,
        sourceUrl: urlVideo,
        thumbnail: thumbnailDataVideo,
      },
    },
  };

  await client.sendMessage(m.chat, docVideo, { quoted: m });

  fs.unlink(`${tmpDirVideo}/${titleVideo}.mp4`, (err) => {
    if (err) {
      console.error(`Failed to delete video file: ${err}`);
    } else {
      console.log(`Deleted video file: ${tmpDirVideo}/${titleVideo}.mp4`);
    }
  });
  break;


case 'gdrive':
  if (!args[0]) throw ' Enter a Google Drive link';
  try {
    let res = await fg.GDriveDl(args[0]);
    await m.reply(` *Google Drive DL* ▢ *Number:* ${res.fileName} ▢ *Size:* ${res.fileSize} ▢ *type:* ${res.mimetype}`);
    client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m });
  } catch {
    m.reply('Error: Check the link or try another link');
  }
  break;
            
                case 'opentime': {
                   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
client.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break

case 'closetime': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
client.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
  
                

    case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
    
        if (!m.quoted) return reply('Please mention a message');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await client.sendMessage(m.chat, { delete: key });
 //  } else {
   //   reply('You are not authorized to use this command.');
  //  }
    break;
break;
case 'yts':
case 'ytsearch': {
    if (!args.join(" ")) {
        return client.sendMessage(from, `Example: -yts Heat waves`, m.id); // Fix message sending
    }

    const yts = require("youtube-yts");

    try {
        const search = await yts(args.join(" "));
        const text = args.join(" ");
        let teks = `**YouTube Search Results for: ${text}**\n\n`;

        if (search.all.length === 0) {
            teks += "No results found for the given search query.";
        } else {
            search.all.forEach((result, index) => {
                teks += `**Result No: ${index + 1}**\n\n` +
                    `**Title:** ${result.title}\n` +
                    `**Views:** ${result.views}\n` +
                    `**Duration:** ${result.timestamp}\n` +
                    `**Uploaded:** ${result.ago}\n` +
                    `**Author:** ${result.author.name}\n` +
                    `**URL:** ${result.url}\n\n`;
            });
        }

        // Send the results in a more readable format
        client.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, m);
    } catch (error) {
        console.error("Error searching YouTube:", error);
        client.sendMessage(from, "An error occurred while searching YouTube.");
    }
    break;
}

case 'fb': {
    if (!args[0]) {
        throw ` Please send the link of a Facebook video\n\n📌 EXAMPLE :\n*${prefix + command} * https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
    }

    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (!urlRegex.test(args[0])) {
        throw '⚠️ PLEASE GIVE A VALID URL.';
    }

    try {
        const result = await fg.fbdl(args[0]);
        const tex = `
🌟 *Video Details* 🌟
📽️ *Title*: ${result.title}
👍 *Likes*: ${result.likes}
👎 *Dislikes*: ${result.dislikes}
👁️ *Views*: ${result.views}
📥 [Download](result.videoUrl)
`;


        const response = await fetch(result.videoUrl);
        const arrayBuffer = await response.arrayBuffer();
        const videoBuffer = Buffer.from(arrayBuffer);

        // Save the videoBuffer to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        // Send the video using client.sendMessage
        await client.sendMessage(
            m.chat,
            {
                video: fs.readFileSync(`./${randomName}`),
                caption: tex,
            },
            { quoted: m }
        );

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
    } catch (error) {
        console.log(error);
        m.reply('⚠️ An error occurred while processing the request. Please try again later.');
    }

    break;
}
  


case 'ping': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📌",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: 'cheking...' });

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Respond Speed: ${new Date() - startTime} ms`
        }
      }
    }, {});
  } 
break;
                
case 'support': case 'supportgc': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "🆘️",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

      
    reply(`⚙ *My developer's group:* ⚙ https://chat.whatsapp.com/D0gWJtzBLsVFKHgDXYVnPM`)
    }
    break;
    

case 'runtime':
case 'alive': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👀", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage);
  await m.reply(uptimeMessage);
}
break;

case 'weather':
        client.sendMessage(from, { react: { text: "✨", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        client.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
        
case 'getbio':  
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await client.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `bio is private!`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await client.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `bio is private!`
    }
  }
  break; // Don't forget to add the 'break' statement at the end


case 'lyrics': {
  const reactionMessage = {
            react: {
                text: "🔍",
                key: m.key
            }
        }
        const successReactionMessage = {
            react: {
                text: "🎼", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
    m.reply('please wait...')	
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break;




 case 'bard': 
   if (!text) throw `*Chat With Bard AI*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`;  
 const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
 const MODEL_NAME = "models/chat-bison-001"; 
 const API_KEY = process.env.API_KEY; 
  
 const clint = new DiscussServiceClient({ 
   authClient: new GoogleAuth().fromAPIKey(API_KEY), 
 }); 
  
 async function main() { 
   const result = await clint.generateMessage({ 
     model: MODEL_NAME, // Required. The model to use to generate the result. 
     temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result. 
     candidateCount: 1, // Optional. The number of candidate results to generate. 
     prompt: { 
       // optional, preamble context to prime responses 
       context: "Respond to all the question in good manner.", 
       // Optional. Examples for further fine-tuning of responses. 
  
       // Required. Alternating prompt/response messages.
       messages: [{ content: text }], 
     }, 
  }); 
      
 // await m.reply(`${result[0].candidates[0].content}`);  
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: thinking.key,
        type: 14,
        editedMessage: {
          conversation: result[0].candidates[0].content
        }
      }
    }, {});
  
 } 
  
 main(); 
 break;


case 'setbio':{
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👤",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!text) return m.reply(`Example: ${prefix + command} Hello World`)
    await client.updateProfileStatus(text)
    m.reply(`Bio Sucsessfully changed 2 ${text}`)
    }
 break;
  
case 'setname':{
if (!GssCreator && !GssOwner) return reply('you are not my owner')
if (!text) return m.reply(`Where is the name?\nExample: ${prefix + command} Goutam`)
    await client.updateProfilename(text)
    m.reply(`Bot Name Sucsessfully changed 2 ${text}`)
    }
break;

case 'apk': case 'sticker':
  m.reply("This feature is Comming Soon");
break;
  

const languages = require('./lib/languages'); // Import the language codes module

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

// Command handler for 'say', 'tts', and 'gtts'
case 'say':
case 'tts':
case 'gtts': {
    if (!args[0] || !text) {
        return m.reply('Usage: .say <language code> <text>');
    }

    const langCode = args[0]; // Language code provided by the user
    const textToSpeak = args.slice(1).join(" "); // Get the text to speak

    // Validate the language code
    if (!isValidLanguageCode(langCode)) {
        return m.reply('Invalid language code. Please provide a valid language code.');
    }

    // Generate the audio URL using the specified language code and text
    const audioUrl = googleTTS.getAudioUrl(textToSpeak, {
        lang: langCode,
        slow: false,
        host: "https://translate.google.com",
    });

    // Send the audio message
    return client.sendMessage(m.chat, {
        audio: {
            url: audioUrl,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
}
break;





function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
 

// Define the command
case 'info': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
  // Gather system information
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const hostname = os.hostname();
  const uptime = process.uptime();
  const cpuCount = os.cpus().length;
  const loadAvg = os.loadavg();
  const timestamp = performance.now();

  // Calculate memory usage
  const usedMemory = totalMemory - freeMemory;
  const memoryUsagePercent = ((usedMemory / totalMemory) * 100).toFixed(2);

  // Format the response
  const response = `
  System Information:
  - Hostname: ${hostname}
  - Uptime: ${uptime.toFixed(2)} seconds
  - Total Memory: ${formatBytes(totalMemory)}
  - Used Memory: ${formatBytes(usedMemory)} (${memoryUsagePercent}%)
  - CPU Count: ${cpuCount}
  - Load Average (1 min): ${loadAvg[0].toFixed(2)}

  Response Speed: ${(performance.now() - timestamp).toFixed(4)} milliseconds
  `;

  // Send the response
  m.reply(response);
}
break;

case 'insta': case 'ig': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "✔",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} world_reacode_egg`)

const igs = require('api-dylux')
    try {
    let res = await igs.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break;
  
 case 'dalle': case 'img': case 'image': {
  if (!text) throw `*This command generates images from text*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`; 

  try {
    m.reply('*Please wait, generating images...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}&model=art`;

    // Use Axios to make the HTTP request
    axios.get(endpoint)
      .then(async (response) => {
        const data = response.data;

        if (data.result && Array.isArray(data.result) && data.result.length >= 3) {
          // Extract the  three URLs
          const [url1, url2, url3] = data.result.slice(0, 3);

          // Send the images one by one
          await client.sendMessage(m.chat, { image: { url: url1 }, caption: text }, { quoted: m });
          await client.sendMessage(m.chat, { image: { url: url2 }, caption: text }, { quoted: m });
          await client.sendMessage(m.chat, { image: { url: url3 }, caption: text }, { quoted: m });
        } else {
          throw '*Image generation failed*';
        }
      })
      .catch(() => {
        throw '*Oops! Something went wrong while generating images. Please try again later.*';
      });
  } catch {
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
}
break;
  
case 'google': {
const reactionMessage = {
            react: {
                text: "🔍",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👍",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!q) return m.reply(`Example : ${prefix + command} ${botname}`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break;

case 's': case 'sticker': case 'stiker': {

if (!quoted) return m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)

if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break;


case 'bug': case 'request': case 'report': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "🐞",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

	if (!text) return m.reply(`Example : ${

        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                client.sendMessage(owner + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break;

// ...

case "ai": case "gpt":   
  const think = await client.sendMessage(m.chat, { text: 'Thinking...' }); 

           try {  
              if (!process.env.OPENAI_API_KEY) return reply("Aabe Api key to dal de");  
              if (!text) return reply(`*Chat With ChatGPT*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`);  
  
              const configuration = new Configuration({  
                apiKey: process.env.OPENAI_API_KEY,  
              });  
              const openai = new OpenAIApi(configuration);  
  
              const response = await openai.createChatCompletion({  
            model: "gpt-3.5-turbo",  
            messages: [{role: "user", content: text}],  
            });  
           // m.reply(`${response.data.choices[0].message.content}`);
         await client.relayMessage(m.chat, {
            protocolMessage: {
             key: think.key,
             type: 14,
             editedMessage: {
          conversation: response.data.choices[0].message.content
        }
      }
    }, {});
            } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;

case "sc":
        case "script":
        case "scbot":
        case "repo":
           //m.reply("https://github.com/sid238/Gss_Botwa");
          let api = "https://api.github.com/repos/sid238/Gss_Botwa";
          axios.get(api).then(function (response) {
            github = response.data;
            let txt = `  *B O T  -  S C R I P T*\n\n`;
            txt += `◦  *Name* : *${github.name}*\n`;
            txt += `◦  *Visitor* : ${github.watchers_count}\n`;
            txt += `◦  *Size* : ${(github.size / 1024).toFixed(2)} MB\n`;
            txt += `◦  *Updated* : ${moment(github.updated_at).format(
              "DD/MM/YY"
            )}\n`;
            txt += `◦  *Url* : ${github.html_url}\n\n`;
            txt += `${github.forks_count} Forks · ${github.stargazers_count} Stars · ${github.open_issues_count} Issues\n\n`;
            txt += "*sid238*";
            client.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "99999",
                  requestFrom: "0@s.whatsapp.net",
                  noteMessage: {
                    extendedTextMessage: {
                      text: txt,
                      contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          });
          break;

case 'ahegao':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ahegao.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ass':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ass.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'bdsm':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/bdsm.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'milf':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/milf.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'blowjob':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/blowjob.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cuckold':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cuckold.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cum':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cum.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'eba':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/eba.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ero':

loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'femdom':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/femdom.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'foot':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/foot.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'gangbang':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gangbang.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'glasses':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/glasses.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'hentai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/hentai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'jahy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/jahy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'manga':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/manga.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'masturbation':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/masturbation.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai':
case 'neko':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai2':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko2.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'nsfwloli':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/nsfwloli.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'orgy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/orgy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'panties':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/panties.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'pussy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'tentacles':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/tentacles.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'thighs':
case 'trap':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/thighs.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'yuri':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/yuri.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'zettai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/zattai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;

case 'gifblowjob':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'gifhentai':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gifs.json'))
var nsfwresultx = pickRandom(botwansfw)
    await client.sendMessage(m.chat,{video:nsfwresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'promote': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Promote the user in the group
    await client.groupParticipantsUpdate(from, [users], "promote")
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been promoted to admin.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while promoting the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });
    break;
}

case 'autoread': {
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
  if (!args[0]) return reply(`Send the command with options: on or off. Example: ${prefix}${command} on`);

  if (args[0].toLowerCase() === 'on') {
    AUTO_READ = true;
  } else if (args[0].toLowerCase() === 'off') {
    AUTO_READ = false;
  } else {
    reply('Invalid option. Use "on" or "off".');
  }
  break;
}


case 'linkgc': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
    try {
        // Generate the group invite link
        const inviteCode = await client.groupInviteCode(from);

        // Create the full invite link
        const inviteLink = 'https://chat.whatsapp.com/' + inviteCode;

        // Reply with the invite link
        reply(inviteLink);
    } catch (error) {
        console.error("Error generating group invite link:", error);
        reply("Error generating group invite link.");
    }
    break;
}


 case 'group': {
    if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')

    if (args[0] == "off") {
        // Disable group announcements
        await client.groupSettingUpdate(from, 'announcement', false);
        reply("Group announcements turned off.");
    } else if (args[0] == "on") {
        // Enable group announcements
        await client.groupSettingUpdate(from, 'not_announcement', true);
        reply("Group announcements turned on.");
    } else {
        reply(`Send the command #${command} _options_\nOptions: on & off\nExample: ${prefix + command} on`);
    }
    break;
 }
    
case 'demote': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
    try {
        // Check if it's a group chat
        // Extract the user to be demoted (from mention or quoted message)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (!users) {
            return reply(`*Usage*\n${prefix + command} @tag`);
        }

        // Demote the user in the group
        await client.groupParticipantsUpdate(from, [users], "demote");

        reply(`User ${users} has been demoted.`);
    } catch (error) {
        console.error("Error demoting user:", error);
        reply("An error occurred while demoting the user.");
    }
    break;
}
// Define an async function to mention all group members

case 'block': {
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to block the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'block');
  } catch (error) {
    console.error("Error blocking user:", error);
    reply("An error occurred while blocking the user.");
  }
  break;
}

case 'unblock': {
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to unblock the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'unblock');
  } catch (error) {
    console.error("Error unblocking user:", error);
    reply("An error occurred while unblocking the user.");
  }
  break;
}

case 'translate': case 'trt': {
  try {
    if (!text) return m.reply(isPrefix, command, 'id what is translater');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}
function isUrl(str) {
}

case 'git': case 'gitclone':
  if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/sid238/Gss_Botwa`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let gitUrl = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(gitUrl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  client.sendMessage(m.chat, { document: { url: gitUrl }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
  break;

                
case 'self': {
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
        client.sendMessage(from, { react: { text: "🔐" , key: m.key }})
        client.public = false
        reply('mode changed in to private. only admin can use me!')
        client.setStatus(`Mode : Self`)
        }
        break;

case 'public': {
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
        client.sendMessage(from, { react: { text: "🔓" , key: m.key }})
        client.public = true
        reply('mode changed in to public. now all user user me!')
        client.setStatus(`Mode : Public`)
        }
        break;
        
case 'tinyurl':{
   if(!q) return reply('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
// Define the sleep function
// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isSleeping = false; // Variable to track if the bot is sleeping

// Your command handler function
// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Your command handler function
case 'shutdown': case 'sleep':
if (!GssCreator && !GssOwner) return reply('you are not my owner')
    await client.sendMessage(from, { react: { text: "⚠️" , key: m.key }});

    reply(`Okey bye time to sleep!`);
    await sleep(5000); // Pause for 5 seconds
   process.exit();
    // Remove the process.exit() statement to prevent automatic restart
    break;

case 'tempmail': {
  const baseUrl = 'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1';
  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(baseUrl);
    const data = response.data;

    if (data && data.length > 0) {
      const tempMails = data.join('\n');
      const replyMessage = `*Temporary Email Addresses:*\n\n${tempMails}`;
      m.reply(replyMessage);
    } else {
      m.reply('Failed to generate temporary email addresses.');
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply('Failed to fetch temporary email addresses.');
  }
  break;
}

case 'checkmail': {
  if (!text) {
    m.reply('Please provide an email address to read the most recent message.');
    break;
  }

  // Split the provided email address into login and domain
  const [login, domain] = text.split('@');

  // Check if the email address was split correctly
  if (!login || !domain) {
    m.reply('Invalid email address format.');
    break;
  }

  const baseUrl = 'https://www.1secmail.com/api/v1/?action=getMessages';

  // Use the extracted login and domain values
  const url = `${baseUrl}&login=${login}&domain=${domain}`;

  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(url, { timeout });
    const data = response.data;

    if (data && data.length > 0) {
      // Extract the latest message ID
      const latestMessageId = data[0].id;

      // Use the latest message ID to read the message
      const readUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${latestMessageId}`;

      const readResponse = await axios.get(readUrl, { timeout });
      const messageData = readResponse.data;

      if (messageData && messageData.textBody) {
        const sender = messageData.from;
        const date = messageData.date;
        const subject = messageData.subject || 'No Subject';

        const replyMessage = `*Message in* ${text}:\n\n*From:* ${sender}\n*Subject:* ${subject}\n*Date:* ${date}\n\n*Messages:*\n\n${messageData.textBody}`;
        m.reply(replyMessage, m.from, { caption: replyMessage });
      } else {
        m.reply(`No message found in ${text}.`);
      }
    } else {
      m.reply(`No messages found in ${text}.`);
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply(`Failed to read the most recent message in ${text}.`);
  }
  break;
}

async function GIFBufferToVideoBuffer(gifBuffer) {
  return new Promise((resolve, reject) => {
    const encoder = new GifEncoder(gifBuffer.width, gifBuffer.height);

    const buffers = [];
    encoder.on('data', (buffer) => {
      buffers.push(buffer);
    });

    encoder.on('end', () => {
      const videoBuffer = Buffer.concat(buffers);
      resolve(videoBuffer);
    });

    encoder.end(gifBuffer);
  });
}


case 'kill':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'bully':
case 'bonk':
case 'poke':
case 'slap':
case 'happy':
case 'cuddle':
case 'kick': {
   if (!m.isGroup) return reply('this is only for group')
  try {
    let messsender = m.sender;
    let musers = ``;
    let users;

    try {
      users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      ment = [messsender, users];
    } catch {
      users = "none";
      ment = [messsender, m.sender];
    }

    if (users == "none") {
      musers = `@${m.sender.split("@")[0]} ${command}ed themselves!!`;
      console.log(musers);
    } else {
      const rcpp = `@${users.split("@"[0])}`;
      musers = `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `;
      console.log(musers);
    }

    // Use Axios to fetch the image URL
    const { data } = await axios.get(`https://api.waifu.pics/sfw/${command}`);
    const gifUrl = data.url;

    // Download the GIF
    const response = await axios.get(gifUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'utf-8');

    // Convert GIF buffer to video buffer (if needed)
    // ...

// Convert GIF buffer to video buffer
var fetchedgif = await GIFBufferToVideoBuffer(buffer);

// Send the video with mentions and caption
client.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m });
  } catch (error) {
    console.log(error);
  }
}
break;



       
  case 'setnamegc': {
     if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
  let value = m.quoted ? m.quoted.text : text;
  if (!value) return m.reply('example: Gss Botwa');
  if (value.length > 25) return m.reply('🚩 Text is too long, maximum 25 characters.');
  await client.groupUpdateSubject(m.chat, value);
  break; // Case break statement
}
case 'setdesc': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
  let value = m.quoted ? m.quoted.text : text;
  if (!value) return m.reply('example: Gss Botwa support group ');
  await client.groupUpdateDescription(m.chat, value);
  break; // Case break statement
}




case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    let id = m.chat;
    client.math = client.math ? client.math : {};

    if (id in client.math) {
      clearTimeout(client.math[id][3]);
      delete client.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');

    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw new Error('Invalid result');

    m.reply(`*${format}* = _${result}_`);
  } catch (error) {
    // Handle specific error messages
    if (error instanceof SyntaxError) {
      return m.reply('Invalid syntax. Please check your expression.');
    } else if (error instanceof Error) {
      return m.reply(error.message);
    } else {
      // Handle unexpected errors
      return m.reply('An unexpected error occurred.');
    }
  }
  break;


function formatDate(date) {
}
case 'nowa':
    let regex = /x/g;
    if (!text) throw 'Give a number to search';
    if (!text.match(regex)) throw `*Example: ${prefix + command} 919142294xxx`;
    let random = text.match(regex).length, total = Math.pow(10, random), array = [];
    for (let i = 0; i < total; i++) {
        let list = [...i.toString().padStart(random, '0')];
        let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net';
        if (await client.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
            let info = await client.fetchStatus(result).catch(_ => {});
            array.push({ exists: true, jid: result, ...info });
        } else {
            array.push({ exists: false, jid: result });
        }
    }
    let txt = 'Registered\n\n' + array.filter(v => v.exists).map(v => `• Link: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'description'}\n*• set on:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Not registered*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n');
    m.reply(txt);
    break;

case 'kick': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
    // Check if it's a group chat
    // Extract the user to be kicked (from mention or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Kick the user from the group
    await client.groupParticipantsUpdate(from, [users], 'remove')
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been kicked from the group.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while kicking the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });

    break;
}

case 'antilinkgc': {
    if (!m.isGroup) return reply('Only for groups');
    if (!isAdmins) return reply('Test');
    
    if (args[0] === "on") {
        if (Antilinkgc) return reply('Already activated');
        ntlinkgc.push(from);
        fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc));
        reply('Success in turning on antilink in this group');
        
        var groupe = await client.groupMetadata(from);
        var members = groupe['participants'];
        var mems = [];
        
        members.forEach(adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
        });
        
        // Send the warning message only once
        client.sendMessage(from, {text: `\`\`\`「 ⚠️ Warning ⚠️ 」\`\`\`\n\nNobody is allowed to send group links in this group. Those who send links will be kicked immediately!`, contextInfo: { mentionedJid: mems }}, { quoted: m });
    } else if (args[0] === "off") {
        if (!Antilinkgc) return reply('Already deactivated');
        let off = ntlinkgc.indexOf(from);
        ntlinkgc.splice(off, 1);
        fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc));
        reply('Success in turning off antilink in this group');
    } else {
        await reply(`Please type the option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n"on" to enable\n"off" to disable`);
    }
}
break;

case 'add': {
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
  // Check if it's a group chat

  // Extract the user to be added (from mention, quoted message, or provided text)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!users) {
    return reply(`*Usage*\n${prefix + command} @tag`);
  }

  // Add the user to the group
  await client.groupParticipantsUpdate(from, [users], 'add')
    .then(() => {
      reply(`User ${users} has been added to the group.`);
    })
    .catch((err) => {
      console.error(err);
      reply('An error occurred while adding the user to the group.');
    });

  break;
}

// Function to download a TikTok video




case 'githubstalk': {
  if (!args[0]) return m.reply('Mention a GitHub username to stalk.');

  const username = args[0];

  try {
    // Fetch GitHub user data using Axios
    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = githubResponse.data;

    if (githubResponse.status !== 200) {
      return m.reply(`❌ GitHub user not found.`);
    }

    // Construct the response message
    let responseMessage = `🌟 *GitHub Profile - @${userData.login}*\n\n`;
    responseMessage += `  ◦  *Name*: ${userData.name || 'N/A'}\n`;
    responseMessage += `  ◦  *Username*: @${userData.login}\n`;
    responseMessage += `  ◦  *Bio*: ${userData.bio || 'N/A'}\n`;
    responseMessage += `  ◦  *ID*: ${userData.id}\n`;
    responseMessage += `  ◦  *Node ID*: ${userData.node_id}\n`;
    responseMessage += `  ◦  *Profile URL*: ${userData.avatar_url}\n`;
    responseMessage += `  ◦  *GitHub URL*: ${userData.html_url}\n`;
    responseMessage += `  ◦  *Type*: ${userData.type}\n`;
    responseMessage += `  ◦  *Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
    responseMessage += `  ◦  *Company*: ${userData.company || 'N/A'}\n`;
    responseMessage += `  ◦  *Blog*: ${userData.blog || 'N/A'}\n`;
    responseMessage += `  ◦  *Location*: ${userData.location || 'N/A'}\n`;
    responseMessage += `  ◦  *Email*: ${userData.email || 'N/A'}\n`;
    responseMessage += `  ◦  *Public Repositories*: ${userData.public_repos}\n`;
    responseMessage += `  ◦  *Public Gists*: ${userData.public_gists}\n`;
    responseMessage += `  ◦  *Followers*: ${userData.followers}\n`;
    responseMessage += `  ◦  *Following*: ${userData.following}\n`;
    responseMessage += `  ◦  *Created At*: ${userData.created_at}\n`;
    responseMessage += `  ◦  *Updated At*: ${userData.updated_at}\n`;

   
 const githubReposData = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
    const reposData = await githubReposData.json();

    if (reposData.length > 0) {
      const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

      const reposList = topRepos.map(repo => {
        return `  ◦  *Repository*: [${repo.name}](${repo.html_url})
  ◦  *Description*: ${repo.description || 'N/A'}
  ◦  *Stars*: ${repo.stargazers_count}
  ◦  *Forks*: ${repo.forks}`;
      });

      const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
      responseMessage += `\n\n${reposCaption}`;
    } else {
      responseMessage += `\n\nNo public repositories found.`;
    }

    // Send the message with the updated caption and user's avatar
    await client.sendMessage(m.chat, { image: { url: userData.avatar_url }, caption: responseMessage }, { quoted: m });

    // Add a success reaction message
    const successReactionMessage = {
      react: {
        text: "✔",
        key: m.key
      }
    };
    await client.sendMessage(m.chat, successReactionMessage);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    await client.sendMessage(m.chat, 'An error occurred while fetching GitHub data.', { quoted: m });
  }
  break;
}


case 'tagall':
   if (!m.isGroup) return reply('this is only for group')
if (!isAdmins) return reply('this feature is only for admin')
    // Fetch group metadata
    const groupMetadata = await client.groupMetadata(m.chat);

    // Check if group metadata is available
    if (!groupMetadata) {
        return reply(`Unable to fetch group metadata.`);
    }

    // Extract the list of participants from group metadata
    const participants = groupMetadata.participants || [];

    // Check if there are participants
    if (participants.length === 0) {
        return reply(`No participants found in this group.`);
    }

    // Create the tagall message
    const readmore = String.fromCharCode(8206).repeat(4001);
    const tagallMessage = `${participants.map(v => '◦  @' + v.id.replace(/@.+/, '')).join(' ')}`;
    const finalMessage = `乂  *E V E R Y O N E*\n\n*“Hello everyone, check out this important message!”*\n${readmore}\n${tagallMessage}`;

    // Send the tagall message
    await client.sendMessage(m.chat, finalMessage, m);
    break;

case 'addowner':
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample${prefix+command} ${owner}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await client.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owners.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owners.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
teks = '*Premium List*\n\n'
for (let client of prem) {
teks += `- ${client}\n`
}
teks += `\n*Total : ${prem.length}*`
client.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
if (!args[0]) return reply(`Use ${prefix+command}number\nExample${prefix+command} 919142294671`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
  if (!GssCreator && !GssOwner) return reply('you are not my owner')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample${prefix+command} 919142294671`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${ya} Has Been Removed Premium!`)
break

case 'antitoxic': case 'antibadword': {
if (!m.isGroup) return reply('only for group')
if (!isAdmins && !GssCreator) return reply('you are not an admin')
if (args[0] === "on") {
if (antiToxic) return reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
reply('Success in turning on antitoxic in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
reply('Success in turning off antitoxic in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  
  case 'addbadword':{
    if (!isAdmins && !GssCreator) return reply('you are not an admin')
if (args.length < 1) return reply('Whats the word?')
if (Badgss.includes(q)) return reply("The word is already in use")
Badgss.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
reply(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
  if (!isAdmins && !GssCreator) return reply('you are not an admin')
if (args.length < 1) return reply('Enter the word')
if (!Badgss.includes(q)) return reply("The word does not exist in the database")
let wanu = Badgss.indexOf(q)
Badgss.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
reply(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
  if (!isAdmins && !GssCreator) return reply('you are not an admin')
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of Badgss) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Badgss.length}*`
reply(teks)
}
break

default: {  
            if (isCmd && budy.toLowerCase() != undefined) {  
              if (m.chat.endsWith("broadcast")) return;  
              if (m.isBaileys) return;  
              if (!budy.toLowerCase()) return;  
              if (argsLog || (isCmd && !m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              } else if (argsLog || (isCmd && m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              }  
            }  
          }  
        }  
      }  
    } catch (err) {  
      m.reply(util.format(err));  
    }  
  };  
  
  let file = require.resolve(__filename);  
  fs.watchFile(file, () => {  
    fs.unwatchFile(file);  
    console.log(chalk.redBright(`Update ${__filename}`));  
    delete require.cache[file];  
    require(file);  
  });