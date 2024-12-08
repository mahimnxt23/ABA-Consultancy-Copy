const Team = () => {
	return (
		<div className="sectionGap ">
			<div>
				<div className=" meet-experts">
					<div className="ourservices max-w-[900px]">
						<h1 className="menuText font-normal">Our team</h1>
						<h2 className="headTwo font-semibold mt-[30px]">
							Meet the Experts
						</h2>
						<p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter mb-[50px]">
							Our team of skilled professionals brings experience, innovation,
							and dedication to help your business succeed. We work closely with
							you to deliver tailored solutions and achieve lasting results
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center">
				<div className=" overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
					<img
						src="/images/Team1.jpg"
						className="w-full h-full object-cover "
						alt=""
					/>
				</div>

				<div>
					<h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
						Anne Stephenson
						<span className="text-[#FF8C00] font-normal menuText">
							{" "}
							<br />– General Counsel & COO
						</span>
					</h1>
					<p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
						With over 15 years of experience within the real estate development
						industry; Anne was a natural fit as General Counsel & COO for ABA
						Consultancy. Anne is known for ensuring each project receives the
						thoroughness and efficiency it deserves. Her expertise in
						multifamily, student housing, hospitality and commercial
						developments add value and momentum to each of the projects. Anne’s
						comprehensive knowledge of the industry and her drive for results
						allow us to maintain their forward momentum. In 2015, Anne was named
						one of the Top Women in Finance by Finance and Commerce. In 2019 she
						received an In House Counsel Award from Finance & Commerce.
					</p>
				</div>
			</div>

			<div
				className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px]  grid-cols-1  grid  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
			>
				<div className=" lg:hidden xl:hidden 2xl:hidden block  overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
					<img
						src="/images/Team2.jpg"
						className="w-full h-full object-cover "
						alt=""
					/>
				</div>
				<div>
					<h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
						Paul Keenan
						<span className="text-[#FF8C00] font-normal menuText">
							{" "}
							<br />– Vice President of Development
						</span>
					</h1>
					<p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
						Paul joined ABA Consultancy in 2019 and has over a decade of
						experience in real estate development. He has originated and
						completed market rate, affordable, and senior living developments
						using both traditional sources of financing and State/Federal LIHTC
						and historic tax credits. Paul has an MBA from Hamline University
						and is responsible for site selection, underwriting, debt & equity
						sourcing, closing and construction management.
					</p>
				</div>

				<div className="hidden md:hidden lg:block  overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
					<img
						src="/images/Team2.jpg"
						className="w-full h-full object-cover "
						alt=""
					/>
				</div>
			</div>
			<div
				className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
			>
				<div className=" overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
					<img
						src="/images/Team3.jpg"
						className="w-full h-full object-cover "
						alt=""
					/>
				</div>

				<div>
					<h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
						Kris Ikeler
						<span className="text-[#FF8C00] font-normal menuText">
							{" "}
							<br />– Vice President of Construction
						</span>
					</h1>
					<p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
						An experienced project manager with an emphasis in multi-family
						residential, Kris brings over a decade of commercial construction
						experience to ABA Consultancy. Throughout his career, he’s overseen
						the completion of everything from market rate apartments to hotels,
						warehouses and medical office buildings. His deep knowledge in
						contract negotiation, estimating and construction management ensure
						every ABA Consultancy project is executed to the highest
						standards—on time and within budget.
					</p>
				</div>
			</div>
			<div
				className=" mt-[80px]  md:mt-[80px] 
    lg:mt-[80px]
   xl:mt-[100px]
   2xl:mt-[100px] grid grid-cols-1  lg:grid-cols-2 gap-[30px] lg:gap-[100px] justify-center items-center"
			>
				<div className=" lg:hidden xl:hidden 2xl:hidden block overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
					<img
						src="/images/Team4.jpg"
						className="w-full h-full object-cover "
						alt=""
					/>
				</div>
				<div>
					<h1 className="headTwo text-[#0E0D0D] pb-[20px] font-semibold">
						Kelley Egan-Wittrock
						<span className="text-[#FF8C00] font-normal menuText">
							{" "}
							<br />– Construction Manager
						</span>
					</h1>
					<p className="bodyText text-[#0E0D0DCC]/[.8] font-normal">
						Kelley joined ABA Consultancy with over 8 years of experience in the
						industry, specializing in multi-family and medical office buildings.
						Her love for bringing ideas to reality and her focus on
						relationships empower Kelley to hold each project to the highest
						standards. Her passion and attention to detail keeps projects
						running smoothly and guarantees they receive the time and dedication
						they deserve.
					</p>
				</div>

				<div className=" hidden md:hidden lg:block overflow-hidden lg:h-[442px]  pb-[20px]   flex justify-center items-center z-10">
					<img
						src="/images/Team4.jpg"
						className="w-full h-full object-cover "
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Team;
