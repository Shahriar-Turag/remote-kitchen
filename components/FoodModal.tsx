'use client';
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styles } from '@/app/styles/style';

type FoodModalProps = {
	open: boolean;
	onClose: () => void;
	onSave: (food: any) => void;
	food?: any;
};

const FoodModal: React.FC<FoodModalProps> = ({
	open,
	onClose,
	onSave,
	food,
}) => {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		description: '',
		price: '',
		image: '',
	});

	useEffect(() => {
		if (food) {
			// If food is provided, populate 'formData' with its data.
			setFormData({
				id: food.id,
				name: food.name,
				description: food.description,
				price: food.price,
				image: food.image,
			});
		} else {
			// Clear 'formData' when it's in "add" mode.
			setFormData({
				id: '',
				name: '',
				description: '',
				price: '',
				image: '',
			});
		}
	}, [food]);

	const handleSave = () => {
		onSave(formData);
		setFormData({
			id: '',
			name: '',
			description: '',
			price: '',
			image: '',
		});
		onClose();
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>
				{food ? 'Edit Food Item' : 'Add Food Item'}
			</DialogTitle>
			<DialogContent>
				<form>
					<div className='pt-5'>
						<label className='pt-5'>Name</label>
						<input
							className={`${styles.input}`}
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							placeholder='Name'
						/>
					</div>
					<div className='pt-5'>
						<label className=''>Description</label>
						<input
							className={`${styles.input}`}
							type='text'
							name='description'
							value={formData.description}
							onChange={handleInputChange}
							placeholder='Description'
						/>
					</div>
					<div className='pt-5'>
						<label>Price</label>
						<input
							className={`${styles.input}`}
							type='number'
							name='price'
							value={formData.price}
							onChange={handleInputChange}
							placeholder='Price'
						/>
					</div>
					<div className='pt-5'>
						<label>Image URL</label>
						<input
							className={`${styles.input}`}
							type='text'
							name='image'
							value={formData.image}
							onChange={handleInputChange}
							placeholder='Image URL'
						/>
					</div>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button onClick={handleSave} color='primary'>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default FoodModal;
