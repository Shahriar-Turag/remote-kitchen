'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addItem,
	deleteItem,
	editItem,
	fetchFood,
	fetchFoodFailure,
	fetchFoodSuccess,
} from '@/redux/foodSlice';
import FoodModal from './FoodModal';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Button,
} from '@mui/material';
import { styles } from '@/app/styles/style';

interface Food {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
}

const FoodItems = () => {
	const dispatch = useDispatch();
	const { foods, loading, error } = useSelector((state: any) => state.food);
	const [isAddModalOpen, setAddModalOpen] = useState(false);
	const [isEditModalOpen, setEditModalOpen] = useState(false);
	const [selectedFood, setSelectedFood] = useState<Food | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(fetchFood());

			try {
				const response = await fetch('http://localhost:3001/foods');
				if (!response.ok) {
					throw new Error('Failed to fetch');
				}
				const result = await response.json();
				dispatch(fetchFoodSuccess(result));
			} catch (error: any) {
				dispatch(fetchFoodFailure(error.message));
			}
		};

		fetchData();
	}, [dispatch]);

	const handleAddClick = () => {
		setAddModalOpen(true);
	};

	const handleEditClick = (food: Food) => {
		setSelectedFood(food);
		setEditModalOpen(true);
	};

	const handleSaveFood = async (food: Food) => {
		try {
			const response = selectedFood
				? await fetch(
						`http://localhost:3001/foods/${selectedFood.id}`,
						{
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(food),
						}
				  )
				: await fetch('http://localhost:3001/foods', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(food),
				  });

			if (response.ok) {
				const newFood = await response.json();
				if (selectedFood) {
					dispatch(editItem({ ...newFood, id: selectedFood.id }));
				} else {
					dispatch(addItem(newFood));
				}
			}
		} catch (error) {
			console.error(
				`Failed to ${selectedFood ? 'update' : 'create'} data:`,
				error
			);
		} finally {
			setEditModalOpen(false);
			setSelectedFood(null);
		}
	};

	const handleDeleteFood = async (food: Food) => {
		try {
			const response = await fetch(
				`http://localhost:3001/foods/${food.id}`,
				{
					method: 'DELETE',
				}
			);

			if (response.ok) {
				dispatch(deleteItem(food.id));
			}
		} catch (error) {
			console.error('Failed to delete data:', error);
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<button className={styles.submitButton} onClick={handleAddClick}>
				Add Food Item
			</button>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[100px]'>
				{foods.map((food: Food) => (
					<div key={food.id} className='m-4'>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component='img'
								alt='food'
								height='140'
								width='140'
								image={food.image}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									component='div'
								>
									{food.name}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
								>
									{food.description}
								</Typography>
								<Typography
									gutterBottom
									variant='h5'
									component='div'
								>
									${food.price}
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									onClick={() => handleEditClick(food)}
								>
									Edit
								</Button>
								<Button
									size='small'
									color='error'
									onClick={() => handleDeleteFood(food)}
								>
									Delete
								</Button>
							</CardActions>
						</Card>
					</div>
				))}
			</div>
			<FoodModal
				open={isAddModalOpen || isEditModalOpen}
				onClose={() => {
					setAddModalOpen(false);
					setEditModalOpen(false);
					setSelectedFood(null);
				}}
				onSave={handleSaveFood}
				food={selectedFood}
			/>
		</div>
	);
};

export default FoodItems;
