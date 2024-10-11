import Page from "./Page";

class Electronics extends Page {
    get appliancesSubCategoriesList() {
        return $$('section[id="s0-17-12_2-0-1[0]-0-0-0"] ul li');
    }

    open() {
        super.open('/b/bn_7000259660');
    }

    getAppliancesSubCategoriesListText = async () => {
        const subCategoryTextList = [];
        await this.appliancesSubCategoriesList.forEach(async (subCategory) => {
            const subCategoryText = await subCategory.getText();
            subCategoryTextList.push(subCategoryText);
        });
        return subCategoryTextList;
        // const subCategoriesText = await this.appliancesSubCategoriesList.map((subCategory) => subCategory.getText());
        // subCategoriesText.forEach(subCategoryText => {
        //     console.log("SUB " + subCategoryText);
        // });
    }
}

export default new Electronics();