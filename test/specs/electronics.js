import { expect } from "@wdio/globals";
import ElectronicsPage from "../pages/Electronics.page";
import HomePage from "../pages/Home.page";
import resources from "../resources";

describe('Electronics page', () => {
    it('open electronics page and verifies appliances subcategories list', async () => {
        HomePage.open();
        await HomePage.electronicsTab.click();

        await ElectronicsPage.appliancesSubCategoriesList[0].waitForDisplayed();

        const subCategoryList = await ElectronicsPage.getAppliancesSubCategoriesListText();

        // await browser.waitUntil(() => {
        //     return subCategoryList === resources.expectedSubCategoryList;
        // })

        // await expect(subCategoryList).toEqual(resources.expectedSubCategoryList);
    });
});