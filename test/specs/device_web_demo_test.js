describe('LocalDeviceTest', () => {
    it('quickStartDeviceWebDemo', async () => {
        await browser.url('https://demo-bank.ct.digital.ai/login')
        const username = await $('//*[@data-auto="username"]//input');
        await username.setValue('company');
        const password = await $('//*[@data-auto="password"]//input');
        await password.setValue('company');
        const loginButton = await $('//*[@data-auto="login"]');
        await loginButton.click();
        const transferFundsButton = await $('//*[@data-auto="transfer-funds"]');
        await transferFundsButton.click();
        const name = await $("//input[@name='NAME']");
        await name.setValue('Jon Snow');
        const phoneNumber = await $("//input[@name='PHONE']");
        await phoneNumber.setValue('0541234567');
        const amount = await $("//input[@name='AMOUNT']");
        await amount.setValue('50');
        const countryButton = await $("//*[@data-auto='country']");
        await countryButton.click();
        const country = await $('//*[text()="India"]');
        await country.click();
        const transferButton = await $("//*[@data-auto='transfer-button']");
        await transferButton.click();
        const reportUrl = browser.capabilities.reportUrl;
        console.log("Report URL: " + reportUrl);
    })
})