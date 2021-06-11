const $ = require('jquery');
const env = require('./env');

const $body = $('body');
const $mobilePopup = $('header.header-desktop');
const $mobileHeader = $('header.header-mobile');
const $menuBtn = $mobileHeader.find('.header-mobile__hamberger');
const $languageSelectorBtn = $mobilePopup.find('.language-selector');
const $languageMenu = $mobilePopup.find('.language-menu');

const $bkMobileMenu = $mobilePopup.find('ul.header__menu').clone();
const $bkMenuLanguage = $languageMenu.clone();

const isMobileMenuOpen = () => {
    return $mobileHeader.hasClass('open');
}

const toggleMobileMenu = () => {
    if (isMobileMenuOpen()) {
        $mobileHeader.css('position', 'relative');
    }

    $mobileHeader.toggleClass('open');
    $mobilePopup.fadeToggle(300, () => {
        if (isMobileMenuOpen()) {
            $mobileHeader.css('position', 'fixed');
        }
    });
    $body.toggleClass('no-scrolling');
}

const toggleDesktopLanguageMenu = () => {
    const {top, left} = $languageSelectorBtn.position();
    const height = $languageSelectorBtn.outerHeight(true);

    $languageMenu.fadeToggle(100);

    $languageMenu.css({top: top + height, left: left - 47});
}

const isMobileLanguageMenuOpened = () => {
    return $mobilePopup.find('ul.header__menu.select-language').length > 0;
}

const getLanguageMenu = () => {
    return $bkMenuLanguage.clone()
        .removeClass('language-menu')
        .addClass('header__menu select-language')
        .css('display', 'block')
        .on('click', '.back', toggleMobileLanguageMenu);
}

const toggleMobileLanguageMenu = () => {
    const opened = isMobileLanguageMenuOpened();
    $mobilePopup.find('ul.header__menu').remove();

    if (opened) {
        $mobilePopup.find('.header__logo').after($bkMobileMenu);
    } else {
        $mobilePopup.find('.header__logo').after(getLanguageMenu());
    }
}

const toggleLanguageMenu = () => {
    if (env.isDesktop()) {
        toggleDesktopLanguageMenu();
    } else {
        toggleMobileLanguageMenu();
    }
}

const hideDesktopLanguageMenu = () => {
    if (env.isMobile()) {
        return;
    }

    $languageMenu.fadeOut(100);
}

const checkToHideDesktopLanguageMenu = function (e) {
    if (env.isMobile()) {
        return;
    }

    const languageSelectorBtnClicked =
        $(e.target).closest($languageSelectorBtn).length > 0;

    if (!languageSelectorBtnClicked) {
        hideDesktopLanguageMenu();
    }
}

const registerEvents = () => {
    $menuBtn.on('click', toggleMobileMenu);
    $languageSelectorBtn.on('click', toggleLanguageMenu);
    $(document).on('click', checkToHideDesktopLanguageMenu);
    $(window).on('resize scroll', hideDesktopLanguageMenu);
}

module.exports = () => {
    registerEvents();
}
