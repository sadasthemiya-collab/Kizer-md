//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUN5ek03dUlZaUVrVnlUT1NDcGJYRURuNHQwN0ptQm4yMnlVRVd2YXFrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnJGTmVWZHpkTk9OQlFHbEZCWlRWNlhybis1bzRCUC9vL0ZWNmJoTmVnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTW5YR1ViVWJEbHJkVDFKc2xrRUVQN2hsYUJDcmprTS9lY2piQ09ValdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIL2dPUkNaNUpSOXBCSk5CSGRlcHJTWnNzZUpicmlqMmNjRW93V0NTbHdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIVjRRd3ZTZ2dsU3FnVDhiNDIwQmV6RWJvemVvZTByQkU1VCtGWDMvbTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNzeFNkcHNMZlJrM2RHdTNsbXFyY1RDS085NytqMWE4bkFYOGlYaitsbFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hpSDJ0SzRvNTlQN3VuK3VQQkpzUUJPcFFvdFlrd0dLNW5mNDl4aHlFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjVyOGhCM2ZlcnlWVkxxNFZTSTcrTmZUSkQwaFRZOVNpVUdERmk0dTdEST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNGVk1uQU1xRUZVY21tVFN0eGp3ZzNHcHNTK2QrTW9HQzA5RXloSkVoNmhPcUVRejVtMW8rYUcyUFRhOUFkU2dhTHZaR3NmUDB0Q3pjQys0Z2VjWmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJPTnVGaTFVbGZ0TUIwdEc1Vks5bGhnR3dVYXIvNVc0S2pIWjdsUXZZb2xrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzMzk5MDY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY2NjA2QjBFMzc4N0VEMTA1NTczQTRBNjY4RkI5RjQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNjM0MDd9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVkZzdkVXJ1UnZPYVFKVE1kem16bFEiLCJwaG9uZUlkIjoiMWE1NzI0NDMtZDZiZi00NTc4LThlZWUtYWZjYTc5M2YwMzQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik93QU8yRVVHTVdySHltWUlJR3k1cUpsa3M4UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJaGJlUmZ4bUMvMDMwUWpJbzBBcDBlbG1oaE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0Q2UVhYWUUiLCJtZSI6eyJpZCI6Ijk0NzYzMzk5MDY3OjUyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzMxNjk2NjY4OTYxMTA6NTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRzhuZkVGRUwzd2dzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOSEFrSENpU0JNWVJUbjFFdnk0T3ZtVHBrK2xCcEt0VzNDRUNTOHR4eFZNPSIsImFjY291bnRTaWduYXR1cmUiOiJlS0pQOStGWEFWdEYzMWNuYUxmZ0IvbkcwNUZEWmJuOW4xeTRDc1RWSzdXWVBvcldSd0xQenZnU1R5aFkrZ2oxRXhkeGtnNUFxdGNFeTcwT1F0cWlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL3drREdsWWV5RmxrdkFKZkorSGJMSTF2VzFQdXMyUXNEY2g2QlE0Ui9oR2NVYytRcktZcDBtSEU2YWljUFBDWHRDdGI0aEhZU2lvL21nQTJUTVExanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzM5OTA2Nzo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUUndKQndva2dUR0VVNTlSTDh1RHI1azZaUHBRYVNyVnR3aEFrdkxjY1ZUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNjM0MDIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTE9uIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729478513", "94758775628"],
  PORT: process.env.PORT || "3000",
  USERNAME: process.env.USERNAME  || "sadasthemiya-collab" , 
  TOKEN:process.env.TOKEN  || "brsSoBxPdwFHIbzZjlCV6uLcOQUZ940vAvyx" ,
  REPO_NAME:process.env.REPO_NAME  || "Kizer-md" ,
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  };
