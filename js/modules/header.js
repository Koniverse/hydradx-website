const $ = require('jquery');

const toggleMobileMenu = () => {
    const $body = $('body');
    const $mobileMenu = $('header.header-desktop');
    const $menuBtn = $('.header-mobile__hamberger');

    $menuBtn.on('click', () => {
        $menuBtn.toggleClass('open');
        $body.toggleClass('no-scrolling');
        $mobileMenu
            .fadeToggle(300)
            .css('display', 'flex');
    });
}

module.exports = () => {
    toggleMobileMenu();
}
