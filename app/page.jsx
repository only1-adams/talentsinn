import Image from "next/image";
import SlidersContainer from "./components/slider/SlidersContainer";
import Chevron from "./components/icons/Chevron";
import Web from "./components/icons/Web";
import MultiSlider from "./components/MultiSlider";

export default function Home() {
	return (
		<main className="pt-[7rem] md:pt-[10rem]">
			<SlidersContainer />
			<section className="bg-[#eef6f7] px-8 md:px-16 pb-12">
				<div className="xl:px-20 py-12 flex xl:flex-row flex-col xl:items-center w-full gap-x-5">
					<h3 className="w-full xl:w-[60%]  pr-16 mb-12 xl:mb-0 text-textColor text-[3.5rem] md:text-[4rem] xl:text-[6.5rem] font-bold">
						{`Let's partner to make better decisions together.`}
					</h3>
					<div className="xl:w-[30%]">
						<p className="text-3xl text-[#5d6d78]  font-medium mb-12 leading-[3rem]">
							Working as a united firm, we bring dozens of capabilities together
							to help clients address their most complex challenges and
							opportunities
						</p>
						<a
							className="border-primary border-[1.5px] px-14 py-7 md:w-max text-2xl font-semibold text-[#5d6d78] flex items-center justify-center gap-x-2"
							href="">
							<span>Browse all Capabilities</span>
							<span className="rotate-[-90deg] ">
								<Chevron fill={"fill-[#5d6d78]"} />
							</span>
						</a>
					</div>
				</div>
				<div className="bg-white p-12 md:py-28 md:px-28 flex flex-col gap-y-14 md:gap-y-20">
					<div className="flex flex-col gap-y-6">
						<h4 className="text-[#5d6d78] text-3xl font-semibold">
							How can Talents Inn can help
						</h4>
						<p className="text-[3rem] font-bold text-textColor">
							Discover what we can do for you:
						</p>
					</div>
					<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
						<a
							href="#"
							className="cursor-pointer border-[1.5px] border-[#5d6d78] flex items-center gap-x-3 px-5 py-14">
							<Web fill={"#FA1011"} />
							<span className="text-2xl text-textColor font-medium">
								Business Leaders
							</span>
						</a>
						<a
							href="#"
							className="cursor-pointer border-[1.5px] border-[#5d6d78] flex items-center gap-x-3 px-5 py-14">
							<Web fill={"#FA1011"} />
							<span className="text-2xl text-textColor font-medium">
								Digital Information and Technology
							</span>
						</a>
						<a
							href="#"
							className="cursor-pointer border-[1.5px] border-[#5d6d78] flex items-center gap-x-3 px-5 py-14">
							<Web fill={"#FA1011"} />
							<span className="text-2xl text-textColor font-medium">
								Finance
							</span>
						</a>
						<a
							href="#"
							className="cursor-pointer border-[1.5px] border-[#5d6d78] flex items-center gap-x-3 px-5 py-14">
							<Web fill={"#FA1011"} />
							<span className="text-2xl text-textColor font-medium">
								Finance
							</span>
						</a>
						<a
							href="#"
							className="cursor-pointer border-[1.5px] border-[#5d6d78] flex items-center gap-x-3 px-5 py-14">
							<Web fill={"#FA1011"} />
							<span className="text-2xl text-textColor font-medium">
								Finance
							</span>
						</a>
						<a
							href="#"
							className="cursor-pointer border-[1.5px] border-[#5d6d78] flex items-center gap-x-3 px-5 py-14">
							<Web fill={"#FA1011"} />
							<span className="text-2xl text-textColor font-medium">
								Finance
							</span>
						</a>
					</div>
				</div>
			</section>
			<section className="px-8 md:px-16 py-8 md:py-20 flex xl:flex-row flex-col">
				<div className="xl:w-[50%] xl:px-16 pb-14 md:pb-20 xl:py-20">
					<Image
						src="https://images.unsplash.com/photo-1589779255235-85dc2a054145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
						alt=""
						width={400}
						height={400}
						className="w-full"
					/>
				</div>
				<div className="xl:w-[50%]">
					<h5 className="mb-7">
						<span className="text-2xl font-semibold text-[#007585]">
							Article&nbsp;
						</span>
						<span className="text-2xl font-mdeium text-[#5d6d78]">
							&nbsp;/10min Read
						</span>
					</h5>
					<h6 className="text-[3rem] md:text-[4rem] text-textColor font-bold mb-8">
						Funding Net Zero Projects: New Approaches to Access Capital
					</h6>
					<p className="text-4xl text-textColor mb-8">Risk into Opportunity</p>
					<p className="text-3xl leading-[3rem] text-[#5d6d78] mb-8">
						Organizations are making strides toward achieving net zero
						greenhouse gas emissions by 2030, but securing the capital to do so
						is a challenge.
					</p>
					<a
						className="border-primary border-[1.5px] px-14 py-7 w-max text-2xl font-semibold text-[#5d6d78] flex items-center justify-center gap-x-2"
						href="">
						<span>Read the article</span>
						<span className="rotate-[-90deg] ">
							<Chevron fill={"fill-[#5d6d78]"} />
						</span>
					</a>
				</div>
			</section>
			<section className="h-[700px] md:h-[600px] lg:h-[500px] xl:h-[700px] relative">
				<Image
					src="https://images.unsplash.com/photo-1564024607834-9659f59fa969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					alt=""
					className="w-full h-full object-cover"
					width={400}
					height={400}
				/>
				<div className="absolute w-full h-full top-0 flex items-center px-8 md:px-16">
					<div className="h-[85%] bg-white w-full md:w-[60%] xl:w-[40%] p-12 flex flex-col">
						<div className="grow">
							<h5 className="mb-7">
								<span className="text-2xl font-semibold text-[#007585]">
									Article&nbsp;
								</span>
								<span className="text-2xl font-mdeium text-[#5d6d78]">
									&nbsp;/10min Read
								</span>
							</h5>
							<h6 className="text-[3rem] md:text-[3.5rem] text-textColor font-bold mb-8">
								The LPGA Unlocks Talent Potential with Data
							</h6>
							<p className="text-3xl leading-[3rem] text-[#5d6d78] mb-8 font-medium">
								Organizations are making strides toward achieving net zero
								greenhouse gas emissions by 2030, but securing the capital to do
								so is a challenge.
							</p>
						</div>
						<a
							className="border-primary border-[1.5px] px-14 py-7 w-max text-2xl font-semibold text-[#5d6d78] flex items-center justify-center gap-x-2"
							href="">
							<span>Read the article</span>
							<span className="rotate-[-90deg] ">
								<Chevron fill={"fill-[#5d6d78]"} />
							</span>
						</a>
					</div>
				</div>
			</section>
			<section className="px-16 py-16 flex flex-col xl:flex-row gap-10">
				<div className="xl:w-[35%]">
					<h5 className="text-[4rem] xl:text-[5rem] font-bold">
						Explore. Subscribe. Grow.
					</h5>
					<p className="text-3xl leading-[3rem] text-[#5d6d78] mb-8 font-medium">
						{`Whether you're navigating climate change and sustainability,
							digital acceleration, workforce resilience or more, today's
							leaders need access to powerful insights to make better decisions.`}
					</p>
				</div>
				<MultiSlider />
			</section>
			<section className="h-[700px] md:h-[600px] lg:h-[500px] xl:h-[700px] relative">
				<Image
					src="https://images.unsplash.com/photo-1596460658047-1826d5921c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					width={400}
					height={400}
					alt=""
					className="w-full h-full object-cover"
				/>
				<div className="absolute w-full h-full top-0 flex items-center justify-end px-8 md:px-16">
					<div className="h-[85%] bg-white w-full md:w-[60%] xl:w-[40%] p-12 flex flex-col">
						<div className="grow">
							<h6 className="text-[3rem] md:text-[3.5rem] text-textColor font-bold mb-8">
								The LPGA Unlocks Talent Potential with Data
							</h6>
							<p className="text-3xl leading-[3rem] text-[#5d6d78] mb-8 font-medium">
								Organizations are making strides toward achieving net zero
								greenhouse gas emissions by 2030, but securing the capital to do
								so is a challenge.
							</p>
						</div>
						<a
							className="border-primary border-[1.5px] px-14 py-7 w-max text-2xl font-semibold text-[#5d6d78] flex items-center justify-center gap-x-2"
							href="">
							<span>Read the article</span>
							<span className="rotate-[-90deg] ">
								<Chevron fill={"fill-[#5d6d78]"} />
							</span>
						</a>
					</div>
				</div>
			</section>
			<section className="bg-textColor py-12 md:py-24 px-8 md:px-24 xl:px-32">
				<div className="flex md:flex-row flex-col w-full gap-x-32 mb-24">
					<h5 className="md:w-[45%] xl:w-[35%] text-[3rem] md:text-[4rem] font-bold text-white">
						Aon is in the Business of Better Decisions
					</h5>
					<div className="md:w-[40%]">
						<p className="text-2xl md:text-3xl leading-[3rem] text-white mb-8">
							Organizations are making strides toward achieving net zero
							greenhouse gas emissions by 2030, but securing the capital to do
							so is a challenge.
						</p>
						<a
							className="border-white border-[1.5px] px-14 py-7 w-max text-2xl font-semibold text-white flex items-center justify-center gap-x-2"
							href="">
							<span>Read the article</span>
							<span className="rotate-[-90deg] ">
								<Chevron fill={"fill-white"} />
							</span>
						</a>
					</div>
				</div>
				<div className="flex md:flex-row flex-col gap-y-8 gap-x-12 w-full">
					<div className="border-t-[2px] border-t-primary md:w-[50%]">
						<h6 className="text-[6rem] font-bold text-white">50K+</h6>
						<span className="text-[#acc0c4] text-2xl font-medium">
							Colleagues around the world
						</span>
					</div>
					<div className="border-t-[2px] border-t-primary md:w-[50%]">
						<h6 className="text-[6rem] font-bold text-white">120+</h6>
						<span className="text-[#acc0c4] text-2xl font-medium">
							Countries and sovereignties where we operate.
						</span>
					</div>
				</div>
			</section>
			<section className="py-12 md:py-24 px-8 md:px-16 flex flex-col xl:flex-row gap-12 items-center">
				<div className="w-full xl:w-[50%]">
					<video
						poster="https://images.unsplash.com/flagged/photo-1590425113058-3a2678b4cdad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
						className="w-full h-full object-cover"
						src=""></video>
				</div>
				<div className="xl:w-[50%]">
					<h6 className="text-[3rem] xl::text-[4rem] text-textColor font-bold mb-8">
						Clarity and Confidence to Make Better Decisions
					</h6>
					<p className="text-2xl md:text-3xl leading-[3rem] text-[#5d6d78] mb-8 font-medium">
						Organizations are making strides toward achieving net zero
						greenhouse gas emissions by 2030, but securing the capital to do so
						is a challenge.
					</p>
					<a
						className="border-primary border-[1.5px] px-14 py-7 w-max text-2xl font-semibold text-[#5d6d78] flex items-center justify-center gap-x-2"
						href="">
						<span>About Talent Inn</span>
						<span className="rotate-[-90deg] ">
							<Chevron fill={"fill-[#5d6d78]"} />
						</span>
					</a>
				</div>
			</section>
			<section className="h-[500px] lg:h-[400px] relative">
				<Image
					className="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					alt=""
					width={400}
					height={400}
				/>
				<div className="absolute w-[90%] h-[80%] top-0 left-0 right-0 bottom-0 m-auto bg-white p-8 md:p-20 flex justify-between lg:flex-row flex-col">
					<div>
						<span className="text-[#007585] font-semibold text-2xl">
							Topic Overview
						</span>
						<h5 className="mt-3 font-bold text-textColor text-[3rem] ">
							Talk to Our Team
						</h5>
					</div>
					<div className="lg:w-[50%]">
						<p className="text-2xl lg:text-3xl leading-[3rem] text-textColor mb-8 font-medium">
							{`Whether you're navigating climate change and sustainability,
								digital acceleration, workforce resilience or more, today's
								leaders need access to powerful insights to make better
								decisions.`}
						</p>
						<a
							className="bg-primary px-14 py-7 w-max text-2xl text-white flex items-center justify-center gap-x-2"
							href="">
							<span>Learn More</span>
							<span className="rotate-[-90deg] ">
								<Chevron fill={"fill-white"} />
							</span>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
