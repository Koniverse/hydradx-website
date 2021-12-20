const eventRegister = require('./eventRegister');
const footerLinks = require('./data/footerLinks.json');
const roadmap = require('./data/roadmap.json');
const header = require('./data/header.json');
const about = require('./data/about.json');
const tokenomics = require('./data/tokenomics.json');
const democracy = require('./data/democracy.json');

module.exports = {
    baseUrl: 'https://web3vietnam.github.io/',
    baseContext: 'hydradx-website',
    siteName: 'HydraDX',
    siteDescription: 'Cross-chain liquidity protocol built on Substrate',
    dateTimeFormat: 'ddd, MM/DD/YYYY - HH:mm',
    dateFormat: 'MM/DD/YYYY',
    postUrlStyle: 'POSTS_SLUG',
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    eventRegister,
    footerLinks,
    roadmap,
    header,
    about,
    tokenomics,
    democracy
};
