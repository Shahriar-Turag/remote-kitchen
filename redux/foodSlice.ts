import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoodState {
	foods: any[];
	loading: boolean;
	error: string | null;
}

const initialState: FoodState = {
	foods: [],
	loading: false,
	error: null,
};

const foodSlice = createSlice({
	name: 'food',
	initialState,
	reducers: {
		fetchFood(state) {
			state.loading = true;
		},

		fetchFoodSuccess(state, action: PayloadAction<any[]>) {
			state.foods = action.payload;
			state.loading = false;
			state.error = null;
		},

		fetchFoodFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},

		addItem: (state, action: PayloadAction<any[]>) => {
			state.foods.push(action.payload);
		},
		editItem: (state, action: PayloadAction<any>) => {
			const { id, name, description, price, image } = action.payload;
			const item = state.foods.find((food) => food.id === id);
			if (item) {
				item.name = name;
				item.description = description;
				item.price = price;
				item.image = image;
			}
		},
		deleteItem: (state, action: PayloadAction<number>) => {
			state.foods = state.foods.filter(
				(food) => food.id !== action.payload
			);
		},
	},
});

export const {
	fetchFood,
	fetchFoodSuccess,
	fetchFoodFailure,
	addItem,
	editItem,
	deleteItem,
} = foodSlice.actions;

export default foodSlice.reducer;
