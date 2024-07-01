
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID,"PRABATH-MD~PLBRxKaS#TZ_5i2KRemZQHog8cfvb46LaOtcNoMerPG-nTjQQARM"
    BOT_NUMBER:  process.env.BOT_NUMBER,"94786215965"
    GITHUB_USERNAME: username,
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,
};
