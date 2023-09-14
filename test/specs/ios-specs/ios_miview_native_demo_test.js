const { expect } = require('chai');

describe('miview_native_app', () => {
    it('miview_native_app_tests', myTest)
 })
 async function myTest() {
    // const locationPopup = await $("//*[@name='Allow While Using App']");
    // await locationPopup.click();
    const username = await $("//*[@name='username-input']");
    await username.setValue('rahee_test');
    const password = await $("//*[@name='password-input']");
    await password.setValue('dummypassword');
    const loginButton = await $("//*[@name='signin-button']");
    await loginButton.click();

    const errorMessage = await $("//XCUIElementTypeStaticText[@name='toast-message-label']");
    await errorMessage.waitForDisplayed({ timeout: 5000 });

    expect(await errorMessage.isDisplayed()).to.be.true;
 }