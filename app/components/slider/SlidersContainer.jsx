"use client";
import { useState, useEffect, useCallback } from "react";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import Chevron from "../icons/Chevron";

let timeoutID;

export default function SlidersContainer() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const showCurrentSlide = useCallback((slide) => {
		const items = [...document.querySelectorAll(".carousel-item")];
		items.forEach((item, i) => {
			item.style.transform = `translateX(${100 * (i - slide)}%)`;
		});
	}, []);

	const nextSlide = useCallback(() => {
		const items = [...document.querySelectorAll(".carousel-item")];
		const totalItems = items.length;

		if (currentSlide === totalItems - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	}, [setCurrentSlide, currentSlide]);

	function prevSlide() {
		const items = [...document.querySelectorAll(".carousel-item")];
		const totalItems = items.length;

		if (currentSlide === 0) {
			setCurrentSlide(totalItems - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	}

	useEffect(() => {
		showCurrentSlide(currentSlide);
	}, [currentSlide, showCurrentSlide]);

	useEffect(() => {
		timeoutID = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(timeoutID);
	}, [nextSlide]);

	return (
		<section
			id="carousel-slider"
			className="h-screen md:h-[35vh] lg:h-[50vh] xl:h-[calc(100vh-10rem)] relative overflow-hidden">
			<div className="flex items-center gap-x-10 absolute  bottom-[5%] right-[5%] z-[3]">
				<span
					onClick={() => prevSlide()}
					className="cursor-pointer m-auto w-[60px] rotate-[90deg] h-[60px] flex items-center justify-center border-[1.5px] border-white">
					<Chevron fill={"fill-white"} />
				</span>

				<span
					onClick={() => nextSlide()}
					className="cursor-pointer m-auto w-[60px] rotate-[-90deg] h-[60px] flex items-center justify-center border-[1.5px] border-white">
					<Chevron fill={"fill-white"} />
				</span>
			</div>

			<SliderOne />
			<SliderTwo />
		</section>
	);
}
