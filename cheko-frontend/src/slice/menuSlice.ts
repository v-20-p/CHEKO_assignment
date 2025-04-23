import api from "@/config/ApiConfig";
import MenuItem from "@/interfaces/MenuInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MenuState {
  items: MenuItem[];
  cart: MenuItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  items: [],
  cart: [],
  loading: false,
  error: null,
};

export const fetchMenu = createAsyncThunk<
  MenuItem[],
  { search?: string|null; filterBy?: string|null }
>('menu/fetchMenu', async ({ search, filterBy }, { rejectWithValue }) => {
  try {
    const response = await api.get('/menu', {
      params: { search, filterBy },
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.message || 'Fetch failed');
  }
});

// slice
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    incrementItemCounter: (state, action: { payload: { id: number } }) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) return;  
      const inCart = state.cart.find(i => i.id === item.id);
      if (!inCart) {
        state.cart.push({ ...item });
      } else {
        inCart.counter =(inCart.counter || 0) + 1;
      }
    },
  
    decrementItemCounter: (state, action: { payload: { id: number } }) => {
      const inCart = state.cart.find(i => i.id === action.payload.id);
      if (!inCart || !inCart.counter) return;
    
      inCart.counter -= 1;
    
      if (inCart.counter <= 0) {
        
        state.cart = state.cart.filter(i => i.id !== inCart.id);
      }
    
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.items = action.payload;
        // state.cart=action.payload;
        state.loading = false;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { incrementItemCounter, decrementItemCounter } = menuSlice.actions;

export default menuSlice.reducer;