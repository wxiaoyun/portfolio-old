import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FETCH_MEDIUM_FEED_URL } from "@/constants";

const initialState: BlogState = {
	data: undefined,
	fetchState: "idle",
};

export const fetchMediumData = createAsyncThunk(
	"blog/fetchMediumData",
	async () => {
		const [response] = await Promise.all([
			fetch(FETCH_MEDIUM_FEED_URL),
			new Promise((resolve) => setTimeout(resolve, 2000)),
		]); // Simulate loading
		const data = await response.json();
		return data;
	},
);

export const blogSlice = createSlice({
	name: "blog",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<MediumData>) => {
			state.data = action.payload;
		},
		setFetchState: (state, action: PayloadAction<BlogFetchStatus>) => {
			state.fetchState = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMediumData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.fetchState = "succeeded";
		});
		builder.addCase(fetchMediumData.rejected, (state) => {
			state.fetchState = "failed";
		});
	},
});
