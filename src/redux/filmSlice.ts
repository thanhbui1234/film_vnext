import { getAllFilms, getFilmById } from "../service/product";
import { IFilm } from "./../common/film";
import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

interface IInitialState {
  isLoading: "idle" | "pending" | "succeeded" | "failed";
  films: IFilm[];
  film: IFilm;
}

const initialState: IInitialState = {
  isLoading: "idle",
  films: [],
  film: {},
};

export const fetchFilms = createAsyncThunk("film/fetchAllFilms", async () => {
  try {
    const rest = await getAllFilms();
    return rest as IFilm[];
  } catch (error: any) {
    console.log(error.message);
  }
});

export const fetchFilmById = createAsyncThunk(
  "film/fetchFilmById",
  async (id: number) => {
    try {
      const rest = await getFilmById(id);
      if (!rest) {
        throw new Error("Failed to fetch user");
      }
      return rest as IFilm;
    } catch (error: any) {
      return isRejectedWithValue(error.response.data);
    }
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
    builder.addCase(fetchFilms.fulfilled, (state?, action?: any) => {
      state.isLoading = "succeeded";
      state.films = action.payload;
    });
    builder.addCase(fetchFilmById.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(fetchFilmById.fulfilled, (state?, action?: any) => {
      state.isLoading = "succeeded";
      state.film = action.payload;
    });
    builder.addCase(fetchFilmById.rejected, (state) => {
      if (!state.film) {
        console.log("deo hieu nua");
        state.isLoading = "failed";
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = filsSlice.actions;

export default filsSlice.reducer;
