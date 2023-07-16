import Chevron from "../icons/Chevron";
import Image from "next/image";

export default function SliderTwo() {
	return (
		<div className="transition-all duration-300 carousel-item flex md:flex-row flex-col w-full h-full absolute top-0 bottom-0 right-0 left-0 m-auto">
			<Image
				src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
				alt=""
				width={400}
				height={500}
				className="w-full h-full object-cover"
			/>
			<div className="bg-[#262836cc] absolute top-0 bottom-0 right-0 left-0 z-[2] px-8 md:px-16">
				<div className="flex flex-col justify-center md:w-[60%] h-full">
					<h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
						Navigating New Forms of Volatility
					</h2>
					<h1 className="text-[4rem] md:text-[6rem] font-bold text-white mb-10">
						Managing Today to Grow Tomorrow
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
			</div>
		</div>
	);
}
