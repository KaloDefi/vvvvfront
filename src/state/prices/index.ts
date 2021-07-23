/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PriceApiResponse, PriceApiThunk, PriceState } from 'state/types'
import tokens from 'config/constants/tokens'


const initialState: PriceState = {
  isLoading: false,
  lastUpdated: null,
  data: null,
}

export const fetchPrices = createAsyncThunk<PriceApiThunk>('prices/fetch', async () => {
  const responseBUSD = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BUSDUSDT')
  const { price: priceBUSD } = await responseBUSD.json()

  const responseBNB = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT')
  const { price: priceBNB } = await responseBNB.json()

  // const response = await fetch('https://api.pancakeswap.info/api/v2/tokens')
  // const data = (await response.json()) as PriceApiResponse

  // Return normalized token names
  return {
    updated_at: String(Date.now()),
    data: {
      [tokens.wmatic.address[137].toLowerCase()]: parseFloat(priceBNB),
      [tokens.usdc.address[137].toLowerCase()]: parseFloat(priceBUSD),
      [tokens.usdt.address[137].toLowerCase()]: parseFloat(priceBUSD),
      
    },
  }
})

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPrices.fulfilled, (state, action: PayloadAction<PriceApiThunk>) => {
      state.isLoading = false
      state.lastUpdated = action.payload.updated_at
      state.data = action.payload.data
    })
  },
})

export default pricesSlice.reducer
