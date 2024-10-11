import Page from "./Page"

class SearchPage extends Page {
    // const searchInput = $('#gh-ac');
    // const searchButton = $('#gh-btn');

    get searchInput() {
        return $('#gh-ac');
    }

    get searchButton() {
        return $('#gh-btn');
    }

    get searchCategory() {
        return $('#gh-cat option:nth-child(1)');
    }

    get searchResultCount() {
        return $('.srp-controls__count-heading');
    }

    open() {
        super.open('/');
    }
}

export default new SearchPage();