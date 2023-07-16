import Chevron from "../icons/Chevron";
import Image from "next/image";

export default function SliderOne() {
	return (
		<div className="transition-all duration-300 carousel-item flex md:flex-row flex-col w-full h-full absolute top-0 bottom-0 right-0 left-0 m-auto">
			<div className="h-[50%] md:h-full w-full md:w-[60%] lg:w-[70%] xl:w-[50%] bg-textColor px-8 md:px-16  lg:pr-28 flex flex-col justify-center py-12 md:py-0">
				<h1 className="text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[6rem] text-white font-bold mb-10">
					Talents Inn is in the Business of Better Decisions
				</h1>
				<a
					className="bg-primary px-14 py-7 w-max text-2xl text-white flex items-center justify-center gap-x-2"
					href="">
					<span>Learn More</span>
					<span className="rotate-[-90deg] ">
						<Chevron fill={"fill-white"} />
					</span>
				</a>
			</div>
			<div className="h-[50%] md:h-full  w-full md:w-[40%] lg:w-[30%] xl:w-[50%] xl:relative overflow-hidden">
				<Image
					src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
					className="hidden xl:block w-full h-full object-cover blur-lg"
					alt=""
					width={400}
					height={400}
				/>
				<div className="py-12 md:py-0 w-full xl:w-[50%] px-10 bg-textColor xl:bg-[#262836cc] flex flex-col items-center justify-center xl:absolute top-0 left-0 h-full z-[2]">
					<div className="w-full flex flex-col gap-y-10">
						<span className="text-2xl text-[#acc0c4] font-semibold">
							I want to...
						</span>
						<ul className="flex flex-col gap-y-10">
							<li>
								<a
									className="w-max font-semibold text-2xl text-white flex items-center justify-center gap-x-2"
									href="">
									<span className="underline">Browse Capabilities</span>
									<span className="rotate-[-90deg] ">
										<Chevron fill={"fill-white"} />
									</span>
								</a>
							</li>
							<li>
								<a
									className="w-max font-semibold text-2xl text-white flex items-center justify-center gap-x-2"
									href="">
									<span className="underline">Explore Insights</span>
									<span className="rotate-[-90deg] ">
										<Chevron fill={"fill-white"} />
									</span>
								</a>
							</li>
							<li>
								<a
									className="w-max font-semibold text-2xl text-white flex items-center justify-center gap-x-2"
									href="">
									<span className="underline">{`Discover Talent Inn's story`}</span>
									<span className="rotate-[-90deg] ">
										<Chevron fill={"fill-white"} />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
