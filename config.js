const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU3a6qRhh9lWZu5RwRFMVkJ0VERfxX/KE5FyMMMvLrMCC440P4AD5B27u2yUmT9pV8hAa3O3tf9JzucjWZGda35lvrW88gCHGMNJSD5jOICE4hRcWS5hECTdBKbBsRwAALUgiagNM4brlfpZW9y8L6UvEbx6zsCOkx8QeK4htl2S0t2bhWWh6fwJkBUbL1sPkdQCKvhmFW3nbXrZqs+AO9He/ocCfyq9qgFZs7LSrJznK0J8r0CZwLRIgJDnZK5CAfEehpKJ9ATD5Gf9zN+2YecHXvsFPHFb6jdSeljUihv4imjTXPKmSAlVTK1vHH6J9Gx3G49CtdVg/ZDI9JzsmOb7W667lal1auPtbwKlQ1I3vQj/EuQJZqoYBimn+471hdTgUZhqcprsee3Bp4cq3vzU67NWlgo8ZlZKb38kCp6u7HiItyae73avNJ7xB4oaawB4dswnk8FoSxFwxhO59CijBpSOp74hPy6hX3//TdVUlFS8i4o3GUaNoqaynThuCEG0O2wx08CXPC6rOpwX6UvpRuAlJWDPe0yLaj/eSk9k09qGx8exzIuDcZJIJdj6cUscobfUgT8j2WkgItrzM4xquy4+zRRs7WDjRaMMYGX037RttfaoupbKz0itgTpo3qgl8dYGuQVPrVpdwyZVndsKWybiyGY00lFU93een4dH+Ri3LVAs3KmQEE7XBMCaQ4DIq9Os8AaKVzZBJE790FpJEfwoOc7tesuh/g3MmGiVLa+yVj7Mi8gGs7WhY3DS8RpSfAgIiEJopjZPVwTEOSD1Ecwx2KQfOnLwwIUEZfdCuq8RUG2JjEVA+SyAuh9Srq6yE0zTAJ6DwPTLlYIAKa7Ns2ohQHu7hoYxJAYjo4RbIDaQyaNvRidGaAhVJsogIPeEu0n0rImK7klPWy02i5C3dSQdkJg5crgs2bPFfnPkG7an6q2vXGJ5Grwk+mKAjbrQ23VXELGIAfI1P8800FZzO2Tla+o6rQO7mmM6t6/bGRkZwz7yq8tB4RZIEmJQliwBaabhItQhcF38GtLPtdN51UG32fJko09o1TvePq5aD7HvdFUtB8fospObQKPG696CiNjQAY4N8diIuXi9V6la+KFZarNwX2x/jzsegjjKLPAaKAAQEsLoPb9fLr7Xr5erte/rhdL7/frpdfbtfL37fr5c8fbtfLb7fr5ecfHqd/vbvxtaD20K0oaiEKsReDJpDHvukKbE+Z+O14wHa7UmMnyXdhXnV+nZcXQ9LOkVdVmZQHFhrKswEKRQNzNcPhur6oZ0SUdLHFO/WEVZ/+BQQ0QVp2a5Bfs+qi0himI7Zt+R1/6HVVkp2OocbxI8OEw+Gqzu8sES0XPVSZT1qpYO2j8aodG2tYXm97Ja+xUIVqR5TbaeK2paei2ovf3hcLo/ZJ1uJw4LO9XBL4DqdvaqTWqUVLiV9J+61m26dtIM2Ueeac2kqXHoZCyYGjLbsO8VxxAjqrpNNuntszX07tvq8fW9OXSb4nifdIcHwfsueHO22M7oH4EO6/9H2bE/bMvIN4JOw3vNjazsxRLkuHcs6v95I75w+T1YYmq43lROlyCMvTzmRqVVGdyuB8/sKAyIPUDokPmiD2txAwwIMxld7mfIF9FFPoR6BZqfMiz9XEmsgAP5eiaE4hfY0HIBWf3D6C8z/XR6LWOQgAAA==',
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

