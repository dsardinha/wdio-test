export const waitForTextChange = async (element, text) => {
    await browser.waitUntil(async () => {
        return (await element.getText()) === text;
    })
}

export const waitAndClick = async (element) => {
    await element.waitForDisplayed();
    await element.click();
}