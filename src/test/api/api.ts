import { assert } from 'chai';
import axios from 'axios';

export async function validateApiResponse() {
  let apiResponse: any[];

  const response = await axios.get('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals');

  // Validate API response
  assert.equal(response.status, 200, 'API should return a valid status code');
  assert.isNotNull(response.data, 'API response should not be null');
  assert.isArray(response.data, 'API response should be an array');
  assert.isAtLeast(response.data.length, 1, 'API response should have at least one item');

  apiResponse = response.data;

  // Sort the response by event name
  apiResponse.sort((a, b) => a.name.localeCompare(b.name));

  // Validate bands with record labels
  apiResponse.forEach((event: any) => {
    if (event.bands) {
      event.bands.forEach((band: any) => {
        assert.isNotNull(band.name, 'Band name should not be null');
        assert.isNotNull(band.recordLabel, 'Record label should not be null');
      });
    }
  });

  // Validate events with names
  apiResponse.forEach((event: any) => {
    assert.isNotNull(event.name, 'Event name should not be null');
  });

  // Validate at least one event
  assert.isAtLeast(apiResponse.length, 1, 'There should be at least one event');

  // Return the sorted response
  return apiResponse;
}