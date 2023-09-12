describe('LocaliOSTest', () => {
    it('quickStartiOSNativeDemo', myTest)
 })
 async function myTest() {
   const username = await $('//*[@name="usernameTextField"]');
   await username.setValue('company');
   const password = await $('//*[@name="passwordTextField"]');
   await password.setValue('company');
   const loginButton = await $('//*[@name="loginButton"]');
   await loginButton.click();
   const logoutButton = await $('//*[@name="logoutButton"]');
   await logoutButton.click();
 }