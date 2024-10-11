import { browser, expect, $ } from "@wdio/globals";
import { expect as chaiExpect } from "chai";

describe.skip('Home Page', () => {
    it('should show the banner carousel and pause it', async () => {
        await browser.url('/');
        const bannerCarousel = $('.evo-banners.carousel--slides');
        await bannerCarousel.waitForDisplayed();

        const carouselPauseButton = $('button[class="carousel__playback"]');
        await carouselPauseButton.waitForDisplayed();
        await carouselPauseButton.click();

        await browser.pause(2000);
    })

    it('should show the banner title', async () => {
        const bannerHeader = $('.vl-banner__text-heading');
        const bannerHeaderText = await bannerHeader.getText();
        chaiExpect(bannerHeaderText).to.not.be.empty;
        chaiExpect(bannerHeaderText).to.have.string('It\'s now free to sell!')
    })

    it('should contain link on banner button and verify it is clickable', async () => {
        const bannerCTA = $('.vl-banner__cta a');
        await expect(bannerCTA).toHaveLink('/sell?', {
            containing: true
        })
        await expect(bannerCTA).toBeClickable();

        const tagName = await bannerCTA.getTagName();
        chaiExpect(tagName).to.equal('a');
    })

    it('should click on the sell button and verify the new url', async () => {
        const bannerCTA = $('.vl-banner__cta a');
        await bannerCTA.click();
        /*
        await expect(browser).toHaveUrl('/sell?', {
            containing: true
        })
        */
        const browserURL = await browser.getUrl();
        chaiExpect(browserURL).to.include('/sell?');
    })
})