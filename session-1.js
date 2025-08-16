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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0F1TG5vZXFwWGo1UEpiQWsvVzdXYUJGS0M5WXY2ZElJTFhyZlBhVFdVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlJSb0w3U3k5bXduSkY5ZnVYbHhjL1Z1ZGhjSzREUllxeldrMnRPdlNUMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UE9sWUpLNzBwSzJNU1BwREtXV2ZmVFpXZ0EyMlQyYUR3MTJRWms4TVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSGgxQ3dnR1N5SXRneVRMaUdFZ2cxVDh4TG1makNyNFM0UERaWUpWK3pBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFY015RDdJQ1BBYjlaQzlNVUV3bWpYek1yWWtZRzN6QzNYYld1M21ERWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkthclNTay9mdWQ0S3dTOWFKKzhkY0FOZlJuWmN0OEJTcHZ3SmRVTk8rSHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09lWlE5VStONUJNZG1FVjRpUVpqWm5jRC9OdW9jaXFNT2QrbDc1dWcxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUV5ODI4YlhJUDVLN0lyZ2N2WFkyTEFQbDRvcHpvbE14KzZpeGY1d2htWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI0dENuenpBaTdYYU1heE82bW1MbHRUWHYzOWFMYW4vVzVFZ2J3RDAwbDg3MzFsQ2FWaGVvei9sMVBQaW5BM21jUmxhNERFQTdnOHpmaElyRzhIN2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJ0NENCdTEvaHhSUk0yUEJiVTdjTWxYN2I2QlQxbnlucWxXWE5uRnE1WkJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCOFFsS1ZqX1RrMkZ1emRGU1l4UWNnIiwicGhvbmVJZCI6ImE1Mjg5OGM3LWYxNjEtNDJmMS04OThmLTM1ZDE0ZjkxMGM5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cGJTUFRLN3RHVUhoV1N1Rlc4K1QwQ3IxUTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRW14YzFjcGVYeHk5d3JtOEJFQzVyY0NvSFhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc0VFlOTEE4IiwibWUiOnsiaWQiOiI5NDc2MzM5OTA2Nzo1MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjczMTY5NjY2ODk2MTEwOjUxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUM4bmZFRkVNM1Rnc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTkhBa0hDaVNCTVlSVG4xRXZ5NE92bVRwaytsQnBLdFczQ0VDUzh0eHhWTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQkVQelZoOWE2aUFHQ3Znd0pPWEczRUVmdVlwYXhGRW5kV2ltT3lpMGpsMWMwSWo1RGZrMGNQZ2VRZDFzcElUa1haL3RlQWhiSkRzMjZ1aVNwZmE5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6ImF4WVFLcVl6a09MYlkrL20rdW1lTFBtRm5MUEtVSVJ3REo2WmNadWN5OUZHdWdJWTB3UW01YjlZKzVRdFM5SlB6dTJtbWFjZjBaVlZoeXRLNldoTGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjMzOTkwNjc6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFJ3SkJ3b2tnVEdFVTU5Ukw4dURyNWs2WlBwUWFTclZ0d2hBa3ZMY2NWVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzU5NzA2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5TSiJ9",
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
