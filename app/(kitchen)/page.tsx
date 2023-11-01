import Navbar from '@/components/Navbar';
import FoodItems from '../../components/FoodItems';
import Heading from '../utils/Heading';

const KitchenPage = async () => {
	return (
		<div>
			<Heading
				title='Remote Kitchen'
				description='Kitchen'
				keywords='Kitchen'
			/>
			<Navbar />
			<div className='max-w-screen-2xl mx-auto mt-[100px]'>
				<FoodItems />
			</div>
		</div>
	);
};

export default KitchenPage;
