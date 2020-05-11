import reducer from '../restaurantSlice';

const initialState = {
  isLoading: false,
  error: null,
  restaurantData: [],
};

describe('Restaurant Slice', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
