const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className=' bg-[#ffff]'>
			<div className='mx-auto h-full'>{children}</div>
		</main>
	);
};

export default LandingLayout;
