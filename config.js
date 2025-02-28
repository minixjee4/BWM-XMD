const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUX5OiOBz8LnnVWfmnglVTdYCAoqCioHi1DwECRhAwBBGn/O5XOrM183C7N/eWCqTT6e5fv4G8wBWaoRaM3kBJ8AVS9FjStkRgBJQ6jhEBXRBBCsEIMObUd0PDD4kTFVFmnYIjvuXp9TAzzGjOdI7tmB1s5mM3T17BvQvKOshw+AfAzthclt5W0juTNC8757y8KDMfwbMTrd2BxDrYYbAmdYJb9QruD0SICc4TrTygEyIwm6F2CTH5Hv2trXpFHUXhIh7Uut/Z82Ym9qKbPg7gyUqn3NpIKv94LTnme/TJqjUcmw69tcbJ5TJV92wdJkknjqil2L7XaHnD3sQe5/rv9Cuc5CiaRiinmLbf1t2VXZuuAt2gK3xKTUftc6tq0MIFu2vTeSErdSakjDeEWvE94l5HkUgamo5hB94KX1m/r6rVVFoPmM1Z6x30aWEfFkPouOJX4kvyKyvp/9G9WRw7y93+tqr8np3GrKGrru6ulUZZtnO06liCRY+nCS6y6nv0zSo1uMHK13V+Q3uWuDSss2JLO4mRNxwd+5LO+zJSOmSVftKHtCZ/YqlgdD7sLhvRWpuiIBv7MishI9+a8e6y7JwbFEqNMSdNu3GUuSkIridVp5Q26hWl1bkZK7bb9j2nuA2nSqo5hyXlUrl5fb4oRe00AiP23gUEJbiiBFJc5M89UewCGF3WKCSIPuUF5WRemQU/z/2j2tpHK6xT4jBRTYzlFLMo92cyN+zzuzFJXkEXlKQIUVWhaIIrWpDWQlUFE1SB0d8/uyBHV/pu3OM6nu2CGJOKunldZgWMfrn66yMMw6LO6brNQ/WxQASMmM9tRCnOk+qhY51DEh7wBakHSCswimFWoXsXROiCQ/TAAxM/YMvI9Fc8skuV3C570YerB+VDkb//EsRsDBmReRFiLngRYoF5EQNOfOGhIAowQiI/YEEX4I+ZeZz5/YAXmuP6jRmQqZXkohwqaU9xokWm+E8b3rVHBEVgREmNuiCAYVqXmyJF+R9w7QMv7vazTePNVnHPtxW/splN5i0g8wX33VMwevvsKbWIHnjSeDdn5bkGuuD0jCB+vJzjBZEdCJIgcbw44pm/qh/NQ0lYlj9yRB/AH6o/jkSIQpxVYARUc9vmc0vTzJuWDAXDkLVEVhMZfLr0K+7vcUpcjc6t/oxfcReTlruBpGeBaHtTfT64HWVlkqv2lTXQ8Zq+/gsIGIHjfEf9LRknZd3fb/35Uu95i4191iHCjJnGt9Zj5OFVh9OxeGRsfr8M+HJo7a0ZHFy02jrBU3br31BxNjFXYEfatto4eX3c9p6Wr5dN5OVgOJ0soiafXJg2PkZwzbcLtF1xm0u7SvB5S1oruCwirBwz++SbudJLZtdkyc2Ym7tMqu3Yi+G4VA1Dq7FvudZJlt8H8VkE2UcB4+eIvH1kK8bo2Wc5fHj0n+58zTlz734B+ajI39WMryvz9W2xpoxN2gB6nYuz3/bG3lpZdyqhkZ1+cwwjJy/EPbjff3ZBmUEaF+QERgDmESlwBLoggxWVP0d1g0+oovBUghE7FJiBJDD94f0fnb1ahOAHAAA=',
    PREFIXE: process.env.PREFIX || "",
    OWNER_NAME: process.env.OWNER_NAME || "MinixJee",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2348164949238",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
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

