require('dotenv').config();

module.exports = {
    env: {
        SITE_ID: process.env.SITE_ID,
        SITE_NAME: process.env.SITE_NAME,
        SITE_URL: process.env.SITE_URL,
    },
}