# ea-tech-wdio-ts

energyaustralia-coding-test

Author
Muhammad Imran
Email: muhammadghouseimran.zahirudeen@cognizant.com

# Test case written using the Mocha testing framework with WebDriverIO for testing an iOS app. Let's go through the code to understand its functionality:

1. Importing Dependencies:
   ```TypeScript
   import { assert } from 'chai';
   import { validateApiResponse } from '/Users/immi/Desktop/ea-tech-wdio-sample/src/test/api/api.ts';
   ```
   - The code imports the `assert` module from the 'chai' library, which provides assertion functions for making test assertions.
   - It also imports the `validateApiResponse` function from the specified file (`'/Users/immi/Desktop/ea-tech-wdio-sample/src/test/api/api.ts'`). This function likely contains the API response data that will be used for validation.

2. Describe and Test Block:
   ```TypeScript
   describe('iOS App Test', () => {
     it('should validate the response in the iOS app', async () => {
       // Test logic goes here
     });
   });
   ```
   - This block uses the `describe` function from Mocha to define a test suite titled 'iOS App Test'.
   - Inside the test suite, the `it` function is used to define an individual test case titled 'should validate the response in the iOS app'.
   - The test case is an async function that contains the logic for validating the response in the iOS app.

3. Locating Elements:
   ```TypeScript
   const bandsListEle = 'type == \"XCUIElementTypeCollectionView\"';
   const bandsList = await $(`-ios predicate string:${bandsListEle}`);

   const displayedBandsEle = 'type == XCUIElementTypeCell';
   const displayedBands = await $$(`-ios predicate string:${displayedBandsEle}`);
   ```
   - The code defines two variables, `bandsListEle` and `displayedBandsEle`, which represent the element locators.
   - The located elements are stored in `bandsList` and `displayedBands` variables, respectively.

4. Validation:
   ```TypeScript
   // Validate the number of bands in the app
   assert.equal(displayedBands.length, validateApiResponse.length, 'Number of displayed bands should match the API response');

   // Validate each band and its child item as a festival
   for (let i = 0; i < validateApiResponse.length; i++) {
     const band = validateApiResponse[i];

     // Validate the band name
     assert.equal(bandName, band.name, 'Band name should match the API response');

     // Validate the festival
     assert.equal(festival, 'Festival', 'Child item should be displayed as "Festival"');
   }
   ```
   - The code performs various validation checks using the `assert` module from chai.
   - First, it validates the number of displayed bands by comparing the length of `displayedBands` array with the length of `validateApiResponse` array.
   - Then, it enters a loop to validate each band and its child item as a festival.
   - Inside the loop, it retrieves the band name and festival text using element locators and WebDriverIO's `getText()` method.
   - It compares the retrieved values with the corresponding values in the `validateApiResponse` array using `assert.equal` assertions.
