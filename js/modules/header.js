const $ = require('jquery');

const $body = $('body');
const $mobileMenu = $('header.header-desktop');
const $mobileHeader = $('header.header-mobile');
const $menuBtn = $('.header-mobile__hamberger');

const isMobileMenuOpen = () => {
    return $mobileHeader.hasClass('open');
}

const toggleMobileMenu = () => {
    if (isMobileMenuOpen()) {
        $mobileHeader.css('position', 'relative');
    }

    $mobileHeader.toggleClass('open');
    $mobileMenu.fadeToggle(300, () => {
        if (isMobileMenuOpen()) {
            $mobileHeader.css('position', 'fixed');
        }
    });
    $body.toggleClass('no-scrolling');
}

const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
}

module.exports = () => {
    registerEvents();
}
