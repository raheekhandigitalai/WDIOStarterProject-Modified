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
   const logoutButton = await $('id=com.experitest.ExperiBank:id/logoutButton');
   await logoutButton.click();
 }