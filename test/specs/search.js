import { browser, expect } from '@wdio/globals';
import SearchPage from '../pages/Search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter'

describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', async () => {
        SearchPage.open();
        await expect(browser).toHaveTitle(resources.homeTitle);
    });

    it('should search for a product and verify the search text value', async () => {
        const searchInput = await SearchPage.searchInput;
        await searchInput.addValue('Laptop');
        await SearchPage.searchButton.click();

        await expect(searchInput).toHaveValue('Laptop1');

    });

    it('should redirect to a new page and verify the title and the search result counter text', async () => {
        const searchResultCount = SearchPage.searchResultCount;
        await searchResultCount.waitForDisplayed();
        await expect(searchResultCount).toHaveText('Laptop', {
            containing: true
        })
        expect(browser).toHaveTitle(resources.laptopSearchBrowserTitle);
    })

    it('should update the search category', async () => {
        await waitForTextChange(SearchPage.searchCategory, 'PC Laptops & Netbooks')   
        await expect(SearchPage.searchCategory).toHaveText('PC Laptops & Netbooks')

        allureReporter.addFeature('Feature Test');
    })
})