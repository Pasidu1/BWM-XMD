const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VW47iRhTdyqh+YYLfxkgtxRQGjKF5vxzlo7DL2PhJuWwwIxbBAlhBkr8k0ihSsiWWELnpVrcyyaQjxV+lqut7z73n1KlPIIq9FBu4AI1PICFejigul7RIMGiAZuY4mIAqsBFFoAE4g+MWu2XO7nwGyQstrB+ONVfKD1nY17TQrEG/smBSsbI4PIBzFSTZJvCsryQkcDmIj7VNZ9UUoRb25610SwdbhV+K/WZqbY2kAt3F445o4wdwLjMij3jRVktcHGKCAgMXI+SR98EfdoqeVUScHOy3+pDl20ZnVFkrFIWzZFxf8YxG+p6Wq8dV+j74p8fDMF6EbIeZx8zRG5KCg25oNzurqS6rS38+NLxlrBvm8Rl+6m0jbOs2jqhHi3fP3dMXYwmi+DT25DSAzX4AxV4wOW1XpO6ZInckk3m3iDRh7r8PuAIr07ArTkfdfRTEhsbsXbKOp+lQkoZBNECtYowo9khd1d8CH5EXrfj/Ze6+TlgjI8O2wVFiGMtjUxvXJTdem9CJt+gkTQkzn4xN5r3w1XwdkZpm+qfZcfO4G530njWP2HXoDCPodUf9THLkdEwxo73CRzQjX0OpasgO2v1Duqy57g6v4XHlIrOJUs/khbxntsKFMRtDczlnla40rgszfrlHzX7G9oQFbFoQ6mumUpubs8HQ0AkbzH1ePTw8deTjQrdBgz1XAcFbL6UEUS+Oyj2ZrwJk51NsEUyfpgtIvdjHe5jvVoy+63uFexxkWmUXVsyhC3nJE7e0pqzrQaaoD6AKEhJbOE2x3fVSGpNigNMUbXEKGt89EVX2THAYU9zz7JJ8QRZ4QWEZTv42/ebgIpqiJPkmwhRUgUPicIBBg5IMV8FTfJOVeagJsA0ZWeNZtaUJktQUNQZqkijyTNlgeK8580KcUhQmoMHKvMJzoiLz5+r/AkNhIeQYRoYqLzbbmiK2JE3gVa0lai1VFlr/AkM5f18FET7Su4jL0fNcFTgeSek8ypIgRvaLwl8OkWXFWUSnRWTBcoEJaLCv25hSL9qmZWNZhIjlejmGZR+g4aAgxecqsHHuWbjMB4IF3o1VbI6XMGeC4+lxsY23asmfG0f3EMnhLZ6TuY/IEayPgiPXPyqcgD5aiiRtNg7aCMoGlOO4+0f5zz/KeTJhZLIMXV1Hwcm33IkQ9IbmkRSc9STJuw4xwfbLlDfI8rNkFvs4+kpedtHr+PlIqPdCmmnJMDRPctuf16LO27x3fYPGp1fPhrFd5uNWs7ZWX0ugZKus81cxNCTmSz1EqAwGt+vlp9v18vl2vfx6u15+uV0vP96ulz9u18tvH27Xy8+36+WHD8+nv7+J+FxCe+atLGpjirwgBQ0Ah6HlS0xXG4WttM90Omp9q8InYl54fjGP++2k7QOv65DU+jYewEkfx4rpcaLpcp1QmR+Jos6VJu/KGaM//E0S0AB5zRcRv2L0GVsf5I9Myw7b4SDo6OR4OsQGxz+aFhoMljK/tRW8mHUxOx01c8neJcNlKzVXqLbadCtBfaZLQluBrTzzW+pDWe2ut7fF4qR1gkYa90OmW6gS3+bma5GIbTFZqPxS3W0MxzltInWiTY/uqaV16H4gVVz0uGFWsTfV3IhO2HzcKQpnEsLc6YXzQ3N8t7UnWw2enzPv2XHu6nQ8/PQ6PBP3b/y+3hPmXH2T4vm5+QctNjcT67GA6r5W8Kud6k/5/Wi5ptlybbtJvhig2rg9GtsClikE59IAkgBRJyYhaIA03CBQBQFKqfp6z7+wDokV+SoICzVJphTRF3sAavnBFg/OfwIa3yoiRgkAAA==',
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

