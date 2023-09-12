const { expect } = require('chai');

describe('LocalDeviceTest', () => {
    it('quickStartDeviceWebDemo', async () => {
        await browser.url('https://dev-web.miviewis.com/login')
        const username = await $("(//*[@data-testid='MiInputTextbox']//input)[1]");
        await username.setValue('rahee_test');
        const password = await $("(//*[@data-testid='MiInputTextbox']//input)[2]");
        await password.setValue('dummypassword');
        const loginButton = await $("//button[@id='LoginButton']");
        await loginButton.click();

        const errorMessage = await $("//div[contains(@class, 'Alert') and contains(text(), 'Incorrect username or password')]");
        await errorMessage.waitForDisplayed({ timeout: 10000 });

        expect(await errorMessage.isDisplayed()).to.be.true;
    })
})