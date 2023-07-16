"use client";
import { useRef } from "react";
import Image from "next/image";
import Chevron from "./icons/Chevron";

export default function MultiSlider() {
	const mainContainerRef = useRef(null);
	const multiSliderRef = useRef(null);

	function goRight() {
		console.log("goRight");
		const width = mainContainerRef.current.offsetWidth;
		multiSliderRef.current.scrollBy(width + 35, 0, "smooth");
	}
	function goLeft() {
		const width = mainContainerRef.current.offsetWidth;
		multiSliderRef.current.scrollBy(-(width + 35), 0, "smooth");
	}
	return (
		<div ref={mainContainerRef} className="xl:w-[65%] overflow-hidden">
			<div
				id="multi-slider"
				ref={multiSliderRef}
				className="flex items-center gap-x-14 overflow-auto">
				<div className="shrink-0 flex flex-col gap-y-10 w-[350px]">
					<Image
						src="https://images.unsplash.com/photo-1529074086110-2f27437dc901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
						alt=""
						width={400}
						height={400}
						className="h-[400px] w-full object-cover"
					/>
					<div className="flex flex-col gap-y-5">
						<span className="text-[#007585] font-semibold text-2xl">
							Topic Overview
						</span>
						<span className="text-textColor font-bold text-[2rem]">
							Climate Change and Sustainability
						</span>
					</div>
				</div>
				<div className="shrink-0 flex flex-col gap-y-10 w-[350px]">
					<Image
						src="https://images.unsplash.com/photo-1529074086110-2f27437dc901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
						alt=""
						className="h-[400px] w-full object-cover"
						width={400}
						height={400}
					/>
					<div className="flex flex-col gap-y-5">
						<span className="text-[#007585] font-semibold text-2xl">
							Topic Overview
						</span>
						<span className="text-textColor font-bold text-[2rem]">
							Climate Change and Sustainability
						</span>
					</div>
				</div>
				<div className="shrink-0 flex flex-col gap-y-10 w-[350px]">
					<Image
						src="https://images.unsplash.com/photo-1529074086110-2f27437dc901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
						alt=""
						width={400}
						height={400}
						className="h-[400px] w-full object-cover"
					/>
					<div className="flex flex-col gap-y-5">
						<span className="text-[#007585] font-semibold text-2xl">
							Topic Overview
						</span>
						<span className="text-textColor font-bold text-[2rem]">
							Climate Change and Sustainability
						</span>
					</div>
				</div>
			</div>
			<div className="mt-16 flex items-center gap-x-8">
				<span
					onClick={() => goLeft()}
					className="w-[60px] rotate-[90deg] h-[60px] flex items-center justify-center border-[1.5px] border-[#5d6d78]">
					<Chevron fill={"fill-[#5d6d78]"} />
				</span>
				<span
					onClick={() => goRight()}
					className="w-[60px] rotate-[-90deg] h-[60px] flex items-center justify-center border-[1.5px] border-[#5d6d78]">
					<Chevron fill={"fill-[#5d6d78]"} />
				</span>
			</div>
		</div>
	);
}
