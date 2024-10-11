import Page from "./Page";

class Home extends Page {
    get bannerCarousel() {
        return $('.evo-banners.carousel--slides');
    }

    get carouselPauseButton() {
        return $('button[class="carousel__playback"]');
    }

    get bannerHeader() {
        return $('.vl-banner__text-heading');
    }

    get bannerCTA() {
        return $('.vl-banner__cta a');
    }

    get electronicsTab() {
        return $('.vl-flyout-nav__js-tab > a[href*="7000259660"]');
    }

    open() {
        super.open('/');
    }
}

export default new Home();