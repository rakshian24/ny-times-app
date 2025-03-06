import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

const apiKey = process.env.REACT_APP_NYT_API_KEY;
const NYT_URL = `${BASE_URL}${apiKey}`;

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(NYT_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      return data.results;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface ArticlesState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  data: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default articlesSlice.reducer;
