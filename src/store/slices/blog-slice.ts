import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BlogState = {
	data: undefined,
	isLoading: true,
	hasFetched: false,
};

export const fetchMediumData = createAsyncThunk(
	"blog/fetchMediumData",
	async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading
		const response = await fetch(
			"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@w.xy020203",
		);
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
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMediumData.pending, (state) => {
			state.isLoading = true;
			state.hasFetched = false;
		});
		builder.addCase(fetchMediumData.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.hasFetched = true;
		});
		builder.addCase(fetchMediumData.rejected, (state) => {
			state.isLoading = false;
			state.hasFetched = false;
		});
	},
});
