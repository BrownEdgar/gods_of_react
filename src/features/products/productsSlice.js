import { asyncThunkCreator, buildCreateSlice, } from '@reduxjs/toolkit';
import getAsyncUsers from './productsAPI';


const createUsersSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
})

const productsSlice = createUsersSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    filter: "all"
  },
  reducers: (create) => ({
    getProducts: create.asyncThunk(
      getAsyncUsers,
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action) => {
          state.data = action.payload
        },
        settled: (state) => {
          state.loading = false;
        }
      }
    ),
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  }),
  selectors: {
    selectProducts: (state) => {
      if (state.filter === 'all') {
        return state.data
      }
      return state.data.filter(product => product.category === state.filter)
    }
  }
})


export default productsSlice.reducer;

export const { getProducts, changeFilter } = productsSlice.actions;
export const { selectProducts } = productsSlice.selectors;