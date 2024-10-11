import { browser, expect, $ } from "@wdio/globals";
import HomePage from "../pages/Home.page";
import { waitAndClick } from "../utilities/helper";

describe('Home Page', () => {
    before(async () => {
        await browser.url('/');
    }) 

    /*
    after(async () => {
        await browser.url('https://ebay.com');
    })

    afterEach(async () => {
        await browser.refresh();
    })
    */
    
    it('should show the banner carousel and pause it', async () => {
        const bannerCarousel = await HomePage.bannerCarousel;
        await bannerCarousel.waitForDisplayed();

        const carouselPauseButton = HomePage.carouselPauseButton;
        await waitAndClick(carouselPauseButton);
    })

    it('should show the banner title', async () => {
        await expect(HomePage.bannerHeader).toHaveText('It\'s now free to sell!');
    })

    it('should contain link on banner button and verify it is clickable', async () => {
        await expect(HomePage.bannerCTA).toHaveLink('/sell?', {
            containing: true
        })
        await expect(HomePage.bannerCTA).toBeClickable();
    })

    it('should click on the sell button and verify the new url', async () => {
        await HomePage.bannerCTA.click();
        await expect(browser).toHaveUrl('/sell?', {
            containing: true
        })
    })
})