# CommunityCode-Mobile-WDIOStarterProject
Starter project with WebDriverIO

## Run The Project
### Clone Starter Project

To get started with this project, first clone the project:

```
git clone https://github.com/ExperitestOfficial/CommunityCode-Mobile-WDIOStarterProject.git
```

Run the following command to fetch all the necessary packages and dependencies:

```
npm install
```

### Configuration Files

The project contains two configuration files **andriod.conf.js** and **iOS.conf.js**.

- **andriod.conf.js** contains all android tests related configurations.

- **iOS.conf.js** contains all iOS tests related configurations.

### Setting Up Continuous-Testing Cloud Url And Authentication

Update the relevant properties in **andriod.conf.js** and **iOS.conf.js**:

- hostname - Specify continuous-testing cloud url.

- 'experitest:accessKey' - Provide your Access Key,  
  for more infomation visit: https://docs.experitest.com/display/TE/Obtaining+Access+Key

### Uploading Application

To start testing your application you have to upload it to continuos-testing cloud, 
For full instructions on how to upload applications to continuos-testing cloud visit: https://docs.experitest.com/display/COM/Upload+Applications.

the project configured with EriBank application (demo application) for andriod and iOS.
 
### Adding tests

The project already contains two tests of EriBank Application, you can add new tests of your application:

- Add andriod tests under test/specs/andriod-specs.

- Add iOS tests under test/specs/ios-specs.

### Configuring Test Capabilities

One can add custom capabilites under capabilities in **andriod.conf.js** and **iOS.conf.js**,for more information visit: https://docs.experitest.com/display/TET/Capabilties+in+Appium+Based+Tests.

Examples:

**andriod.conf.js**
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

### Run The Project

Start running tests according to a relevant option:

- andriod Tests:

```
npx run android-tests
```

- iOS Tests:

```
npx run ios-tests
```

- android & iOS Tests parallel execution:

```
npx run all-tests
```

### Parallel Execution

Parallel Execution is Achieved by:

- setting up "**maxInstances**" paramater in **andriod.conf.js** and **iOS.conf.js**,for example:

  **andriod.conf.js:**
  ```
  maxInstances: 3,
  ```

  setting maxInstances to 3 will spawn maximum of 3 test for every capability defined under capabilities in **Andriod.conf.js:**,
  for more information about capabilities see below **WDIO Capabilities**.

- npm-run-all package is added as developmnet dependency, it used to run iOS and android tests in parallel. 


## WebDriverIo Capabilities 

To run the same test based on diffrent number of configurations and properties,one have to add new element under capabilities array in
**andriod.conf.js** or **iOS.conf.js**.

**andriod.conf.js/iOS.conf.js**:
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

### Example: Running tests on diffrent devices

To test your application on diffrent devices specify diffrent device serial number on every configuration: 

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

## Documentation

To find out more about CT usage, features and best practices, visit our online [documentation](https://docs.experitest.com/display/TE/Test+Execution+Home) 

## Support

If you've encountered an issue that is not covered here or in our online documentation, contact us at support@digital.ai


  

