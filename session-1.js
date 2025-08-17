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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURWNnZXbjQ0WTFLQkx6Lzc5V3lDaXNoNENzMVQ3ejlUSVBFNUdCaW5WND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjVidG9hallGSWE5YStnL29zOUI3eEd1RmF2dnRpWVB1UE9lYmsvdnR6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTlRsUWhKNkhieVMvdGsrQ0h6emlIYys2L2xRR0pQMWk3NVZBbU4rWTJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBWlJMbWlwN053MUE5OFludVBCODJRRDBadUhXV1lqZVBzTVAyYWFOZmlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHTlIvK2diYWRjL2VBUVFmZVVtd3hYQm1xOXVJWnRycmQwZk94TTdyMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im15STFlS29LRXhvWnRMNlpsc25kZmhKeXBCaHo0OXdTZGliTXp2QmY5bjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpYUlppeXgrYUN5Rnl3eUdoRldOYnJrSWVFNjR6cDR0dktGWkRvVGdWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXNWWjQ0UmE0bXdHeXZuVG9yTDhrNlY1STlRSkh6M2xJU0dHWmxucVFUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFMRFdYdnR2bW8yQmtlcCtUL0g3S244YkVHaXVic05lbys1S2wzWU1NS1RTdzE3NCs3cm04azRhRElRSkhXMXZnUFIwa3EwckZ6MkJtMVJBSU80SERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJRa1VUVDIwVjRDRDZDaUdpdE1seHhRVU9mSjdjWmgxUnNLY2VPbFRhQ0lBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzMzk5MDY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI0M0FFODRDRjI1ODMxRkUwMjI3NUFDMzg3QjIwMDc4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzOTUwMjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhoVFhRZzl0Unh5cGxDYk55MDRyakEiLCJwaG9uZUlkIjoiYWQzMzg1OWEtZjZkZi00MGM4LWFjYTgtYmY0ZWMyNWIzYzk3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA4RWFwQzdOalpLeFVqT0I0UFUxZkxLL0dLdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdmtabWNSVE9UdTJLQlZrSzZ0V0I1ZGVIWmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTU1XUllKOUMiLCJtZSI6eyJpZCI6Ijk0NzYzMzk5MDY3OjUzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzMxNjk2NjY4OTYxMTA6NTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSzhuZkVGRUx2bmhNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOSEFrSENpU0JNWVJUbjFFdnk0T3ZtVHBrK2xCcEt0VzNDRUNTOHR4eFZNPSIsImFjY291bnRTaWduYXR1cmUiOiJiTEVadnE0SHRSWCtZdVNZenlHR2tjRjl3NDlXblFIRHN3TjlNbWw5Sk5oTXNKK05sUDNDcmRMTEpZRlpTMjJoYk9PYmNhbXI3SXFQRGJjT21GdXRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTEYrK1daVTh3cENKeHFZTVI2OFRCeTRKTVY1aFZSSTZndDBPMjJHZTNJTStwN084OFpjNkJlV0JMbUNPNkhQWEhSeWJNcThpSzNjWFdGdTlwNWp1QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzM5OTA2Nzo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUUndKQndva2dUR0VVNTlSTDh1RHI1azZaUHBRYVNyVnR3aEFrdkxjY1ZUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzOTUwMTYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1NuIn0=",
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
