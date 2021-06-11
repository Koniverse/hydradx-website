const eventRegister = require('./eventRegister');
const footerLinks = require('./data/footerLinks.json');
const roadmap = require('./data/roadmap.json');

module.exports = {
    baseUrl: 'https://web3vietnam.github.io/',
    baseContext: 'hydradx-website',
    siteName: 'HydraDX',
    siteDescription: 'Cross-chain liquidity protocol built on Substrate',
    dateTimeFormat: 'ddd, MM/DD/YYYY - HH:mm',
    dateFormat: 'MM/DD/YYYY',
    postUrlStyle: 'POSTS_SLUG',
    eventRegister,
    footerLinks,
    roadmap
};
