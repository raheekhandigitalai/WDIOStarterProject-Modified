# CommunityCode Mobile WebDriver IO Starter Project
This project demonstrates how to use Continuous Cloud with WebDriverIO.

## Run The Project
### Clone Starter Project

To get started with this project:
1. Clone the project.  

    ```
    git clone https://github.com/ExperitestOfficial/CommunityCode-Mobile-WDIOStarterProject.git
    ```

2. Fetch all the necessary packages and dependencies.

    ```
    npm install
    ```

### Configuration Files

The project contains these configuration files:

- **android.conf.js** - Android tests related configurations.

- **iOS.conf.js** - iOS tests related configurations.

### Setting Up Continuous Testing Cloud Url And Authentication

To set up continuous testing, update the relevant properties in **android.conf.js** and **iOS.conf.js**:

- hostname - Continuous Testing Cloud url.

- 'experitest:accessKey' - Access Key. For more information see: https://docs.experitest.com/display/TE/Obtaining+Access+Key

### Uploading Application

To start testing your application you have to upload it to the Continuous Testing cloud. 
For full instructions on how to upload applications to Continuous Testing cloud see https://docs.experitest.com/display/COM/Upload+Applications.

The project is configured with the EriBank demo applications for Android and iOS.
 
### Adding tests

The project already contains two tests for the EriBank Application. You can add new tests to your application.

- Add android tests to test/specs/android-specs.

- Add iOS tests to test/specs/ios-specs.

### Configuring Test Capabilities

You can add custom capabilities under capabilities in **android.conf.js** and **iOS.conf.js**. For more information see https://docs.experitest.com/display/TET/Capabilties+in+Appium+Based+Tests.

Examples:

**android.conf.js**
```
capabilities: [{
    platformName: 'ANDROID',
    'experitest:testName': "Android Test",
    'experitest:accessKey': "<ACCESS_KEY>",
    'appium:appPackage':  "<APP_NAME>",
    'appium:app': 'cloud:<APP_NAME>/.<MAIN_ACTIVITY>',
    'appium:deviceQuery': "@os='android' and @category='PHONE'",
}]
```

**iOS.conf.js**
```
capabilities: [{
    platformName: 'IOS',
    'experitest:testName': "iOS test",
    'experitest:accessKey': "<ACCESS_KEY>",
    'appium:bundleId':  "<BUNDLE_ID>",
    'appium:app': 'cloud:<BUNDLE_ID>',
    'appium:deviceQuery': "@os='ios' and @category='PHONE'"
}]
```

### Perform Test

To perform the tests, run the relevant command.

Android Tests:

```
npm run android-tests
```
Or:
```
npx run android.conf.js
```

iOS Tests:

```
npm run ios-tests
```
or:
```
npx run iOS.conf.js
```

- Android & iOS Tests Parallel Execution:

```
npm run all-tests
```

### Parallel Execution

To enable Parallel Execution, set the "**maxInstances**" parameter in **android.conf.js** and **iOS.conf.js** to a value higher than one. For example:

  **android.conf.js:**
  ```
  maxInstances: 3,
  ```

  In this example, a maximum of 3 tests are spawned for every capability defined under capabilities in **android.conf.js:**. For more information about capabilities see  <a href="#WebDriverIo Capabilities"> WebDriverIo Capabilities</a>.

npm-run-all package is added as a development dependency. It used to run iOS and Android tests in parallel. 


## WebDriverIo Capabilities 

To run the same test based on different number of configurations and properties, add new elements under the capabilities array in
**android.conf.js** or **iOS.conf.js**.

**android.conf.js/iOS.conf.js**:
```
capabilities: [{
        <CONFIGURATION_1>
    },
    {
        <CONFIGURATION_2>
    },
    .
    .
    .
    ,
    {
        <CONFIGURATION_n>
    }]
```

### Example: Running Tests on Different Devices

To test your application on different devices, specify different device serial numbers in every configuration.

```
capabilities: [{
        'experitest:serialnumber': '<SERIAL_NUMBER_1>',
        <CONFIGURATION_1>
    },
    {
        'experitest:serialnumber': '<SERIAL_NUMBER_2>',
        <CONFIGURATION_2>
    },
    .
    .
    .
    ,
    {
        'experitest:serialnumber': '<SERIAL_NUMBER_n>',
        <CONFIGURATION_n>
    }]
```

## Related Documentation

To find out more about CT usage, features and best practices, visit our online [documentation](https://docs.experitest.com/display/TE/Test+Execution+Home).

## Support

If you encounter an issue that is not covered here or in our online documentation, contact us at support@digital.ai


  

