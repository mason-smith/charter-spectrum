import reducer from '../appSettingsSlice';

const apiUrl = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const apiKey = 'Api-Key q3MNxtfep8Gt';

describe('AppSettings Slice', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual({ apiUrl, apiKey });
  });
});
