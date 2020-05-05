import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'redux/store';

interface AppSettingsState {
  apiUrl: string;
  apiKey: string;
}

const initialState: AppSettingsState = {
  apiUrl: 'https://code-challenge.spectrumtoolbox.com/api/restaurants',
  apiKey: 'Api-Key q3MNxtfep8Gt',
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {},
});

export default appSettingsSlice.reducer;
