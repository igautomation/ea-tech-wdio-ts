import { assert } from 'chai';
import { validateApiResponse } from '/Users/immi/Desktop/ea-tech-wdio-sample/src/test/api/api.ts';

describe('iOS App Test', () => {
  it('should validate the response in the iOS app', async () => {

    const bandsListEle = 'type == \"XCUIElementTypeCollectionView\"';
    const bandsList = await $(`-ios predicate string:${bandsListEle}`);

    // Get the list of bands displayed in the app
    const displayedBandsEle = 'type == XCUIElementTypeCell';
    const displayedBands = await $$(`-ios predicate string:${displayedBandsEle}`);

    // Validate the number of bands in the app
    assert.equal(displayedBands.length, validateApiResponse.length, 'Number of displayed bands should match the API response');

    // Validate each band and its child item as a festival
    for (let i = 0; i < validateApiResponse.length; i++) {
      const band = validateApiResponse[i];

      const bandNameElement = await displayedBands[i].$("type == \"XCUIElementTypeStaticText\" AND index == 1");
      const bandName = await bandNameElement.getText();

      const festivalElement = await displayedBands[i].$('~type == "XCUIElementTypeStaticText" AND index == 0');
      const festival = await festivalElement.getText();

      // Validate the band name
      assert.equal(bandName, band.name, 'Band name should match the API response');

      // Validate the festival
      assert.equal(festival, 'Festival', 'Child item should be displayed as "Festival"');

    }
  });
});
