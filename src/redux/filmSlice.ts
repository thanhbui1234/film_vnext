import { getAllFilms, getFilmById } from "../service/product";
import { IFilm } from "./../common/film";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: {
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  films: IFilm[];
} = {
  isLoading: "idle",
  films: [],
};

export const fetchFilms = createAsyncThunk("film/fetchAllFilms", async () => {
  const rest = await getAllFilms();
  return rest as IFilm[];
});
export const fetchFilmById = createAsyncThunk(
  "film/fetchFilmById",
  async (id: number) => {
    const rest = await getFilmById(id);
    return rest as IFilm;
  }
);

export const filsSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = "pending";
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = filsSlice.actions;

export default filsSlice.reducer;
