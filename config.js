const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3mVnuaOWtVVC6goCoKiKFvzECBI5CoEEbv871v0pXoedmZ7eUpBODk5l+8V5AWu0RJ1YPwKygpfIUH9knQlAmOgNFGEKkCBEBIIxmA4j4fmRK90bR7AptCEgCQh57UiX6icu2wbTItQ1tPY5V/AgwJl46c4+AOgJW6l/XLotVtWvB1T5eZhWMseUg9GnfP5UBikm4Ov5IN48QIePSLEFc5P0zJGGapgukSdBXH1PfoX2Z2z82uRRUc1YG8LM7YnkQVbI1551fmUdfT+IpQDb8PtvkffmTBzEu69GaPvXG/A+RfPKQ70wu4253WbiHm0Ts7ZJpHcD/o1PuUoXIQoJ5h039a9U5qKtaKt9yweb4PDIIulQScVmqROk4VZ1Hgi2LswFpqk/aburNNNF/Gl4XlOVrxqpGvucG5spsOY4Y1mdJhMpwvx3p2d4lfiVvWZleT/6D5U6Gp52p7DXWo6y/lzO68PsZIib327STq+zU6OxrXHq8AG36O/3eflJrWN4K5FLbdVvVxwkBvZiictFdNZMW6bMptpZMyNL/qQNNWfWBqddk8ynVXYFFuH5UAZzhYQzvCJvpQzssbs7EInG/7AKaNGYzV533m8Z10MeqCU4cHQWx8Nyotms0Eu83omKpIdq+3L240S1C1CMGYeFKjQCdekggQXef9OGlEAhtctCipE3tQF1c6EZ4nV75NC3Z9XQmjXdKHjcm+irajNpfMWt0vrSjPK6QVQoKyKANU1Cue4JkXVGaiu4QnVYPz3Twrk6EbefetP4xgKRLiqyS5vyrSA4aepnx9hEBRNTrZdHqj9AlVgTH+9RoTg/FT3MjY5rIIYX5EaQ1KDcQTTGj0oEKIrDlCPB/ZFaBlkY29ua5G0R/mebwRH7inHRf6+hQvRMGBZ9BSJAfPE+/TwaYgY8YnlGRoiGIgogoAC+KMy/T+/ddCk76XSTuqrEj4fotP5qGmZH/s3U3zv87v0qEIhGJOqQRTwYZA0pVMkKP8DLr9ly/Y0yLxkJUYyP0P82b43d9Gzg19w3y0F49evMaUWYY83ESxpNOM3gALZWwJxf/MRL/EcP2JoVhpL/F/1j7bXEZbljxwRQIEc9puBDwmB/SkfFvT/h4hAnNZgDNR1EyQiPZ+a1Z5b0Zom2ydZPfUaf1r2Gf33bJFZyy0WavW8CpGhblaoGHmYFbyY1bLR7laN5N1I4WKpoRcv/wICxqB1M+k+mm5DfrmOjJW1es5Na+DMYrOQfbGOFGIhZinLJU2YVXk9cDrLE+auM0OhcWfsQplbzDBhsiOpI3UfTgemd1T6nnxG59fDLrmFzMNel2J5cpVdoR6Eo+lOTlZqO5i5ld5up77PFEIyc501sz+5vO87Z/1gz9ZOrB9irpmuDXlTNdIZ5fqQZi5HTrbfS/k2FNKPYYzf+vL6EbQIo7fZ9uHBf1n1FXn6Qf0C8TEsfxMrxd8EZqfKl+eOO5zlZMtdLPdIGvcYxuV1b8Bne2bZIY8kooLH4ycFyhSSqKgyMAZ15ve9SGFN5K/KOjhDNYFZCcaMxNO0IHHMiAJZJ5fllkDy2XQg949pCeDxD0tOnQgECAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

