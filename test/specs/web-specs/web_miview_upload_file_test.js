const { expect } = require('chai');
const path = require('path');
const filePath = path.join(__dirname, './dummyfile.csv');

describe('LocalDeviceTest', () => {

    it('quickStartDeviceWebDemo', async () => {
        await browser.url('https://qa-web.miviewis.com')
        const username = await $("//input[@placeholder='Username']");
        await username.setValue('<INSERT_USERNAME>');
        const password = await $("//input[@placeholder='Password']");
        await password.setValue('<INSERT_PASSWORD>');
        const loginButton = await $("//button[@id='LoginButton']");
        await loginButton.click();

        const home = await $("//a[contains(text(), 'Demo Digital Home - 1')]");
        await home.click();

        const addDocument = await $("//button[@id='DocumentButton']");
        await addDocument.click();

        const remoteFilePath = await browser.uploadFile(filePath);

        const chooseFile = await $("//input[@type='file']");
        await chooseFile.waitForDisplayed({ timeout: 10000 });
        await chooseFile.setValue(remoteFilePath);

        await browser.pause(10000);

        const typeDropdown = await $("(//*[contains(text(), 'Type') and @id='select-label']/following-sibling::div)[last()]");
        await typeDropdown.click();

        const typeItem = await $("//div[contains(text(), 'CAD - Water Line')]");
        await typeItem.click();

        const categoryDropdown = await $("(//*[contains(text(), 'Category') and @id='select-label']/following-sibling::div)[last()]");
        await categoryDropdown.click();

        const categoryItem = await $("//div[contains(text(), 'Rough')]");
        await categoryItem.click();

        const confirmButtonToSaveAttachment = await $("//div[contains(text(), 'CONFIRM')]");
        await confirmButtonToSaveAttachment.click();

        const uploadedAttachment = await $("//div[@data-testid='MiCard']");
        await uploadedAttachment.waitForDisplayed({ timeout: 10000 });
        expect(await uploadedAttachment.isDisplayed()).to.be.true;

        const removeAttachmentButton = await $("(//div[@data-testid='MiCard']//*[@role='presentation'])[last()]");
        await removeAttachmentButton.click();

        const confirmButtonToRemoveAttachment = await $("//button[@id='ConfirmButton']");
        await confirmButtonToRemoveAttachment.click();

        await browser.pause(10000);
    })
})