describe('LocalAndroidTest', () => {
    it('quickStartAndroidNativeDemo', myTest)
 })
 async function myTest() {
   const username = await $('id=com.experitest.ExperiBank:id/usernameTextField');
   await username.setValue('company');
   const password = await $('id=com.experitest.ExperiBank:id/passwordTextField');
   await password.setValue('company');
   const loginButton = await $('id=com.experitest.ExperiBank:id/loginButton');
   await loginButton.click();
   const makePaymentButton = await $('id=com.experitest.ExperiBank:id/makePaymentButton');
   await makePaymentButton.click();
   const phoneNumber = await $("id=com.experitest.ExperiBank:id/phoneTextField");
   await phoneNumber.setValue('0541234567');
   const name = await $("id=com.experitest.ExperiBank:id/nameTextField");
   await name.setValue('Jon Snow');
   const amount = await $("id=com.experitest.ExperiBank:id/amountTextField");
   await amount.setValue('50');
   const countryButton = await $("id=com.experitest.ExperiBank:id/countryTextField");
   await countryButton.click();
   const country = await $('//*[@text="Switzerland"]');
   await country.click();
   const sendPaymentButton = await $("id=com.experitest.ExperiBank:id/sendPaymentButton");
   await sendPaymentButton.click();
   const yesButton = await $("android:id/button1");
   await yesButton.click();
   const reportUrl = browser.capabilities.reportUrl;
   console.log("Report URL: " + reportUrl);
 }