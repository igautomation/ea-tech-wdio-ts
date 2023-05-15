import { assert } from 'chai';
import { validateApiResponse } from '/Users/immi/Desktop/ea-tech-wdio-sample/src/test/api/api.ts';
import FestivalPage from "/Users/immi/Desktop/ea-tech-wdio-sample/src/test/pages/android/festival.page.ts";
import { waitUntil } from 'webdriverio/build/commands/element';


describe("Test Festival application", () => {
  it("should login with valid credentials", async () => {
    const expectedFestivals = await validateApiResponse();
    expectedFestivals.forEach((festival) => {
      festival.bands.forEach(async (band) => {
        const name = festival.name;
        const title = band.name;
        const actualBand = await FestivalPage.getFestival(name, title);
        expect(await actualBand.festivalName()).toBe(name);
        expect(await actualBand.festivalTitle()).toBe(title);
      });
    });
  });
});
