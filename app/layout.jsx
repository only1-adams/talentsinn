import "./globals.css";
import Header from "./components/Header";
import Facebook from "./components/icons/Facebook";
import Twitter from "./components/icons/Twitter";
import LinkedIn from "./components/icons/LinkedIn";
import Image from "next/image";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<footer className="py-24 bg-textColor px-8 md:px-16">
					<section className="flex w-full gap-16 md:gap-28 lg:flex-row flex-col">
						<div className="lg:w-[30%]">
							<Image
								className="w-[6rem] h-max md:w-[20rem] mb-20"
								src="/fakelogo.png"
								width={80}
								height={100}
								alt=""
							/>
							<p className="text-2xl leading-[3rem] text-[#acc0c4] mb-8 font-medium">
								Subscribe to Aon Insights for weekly articles, reports, and
								updates from our team of thought leaders.
							</p>
						</div>
						<div className="lg:w-[70%] flex md:flex-row flex-col gap-y-12 gap-x-48">
							<div className="flex flex-col gap-y-8">
								<h6 className="text-2xl font-bold text-[#5d6d78] ">
									About Aon
								</h6>
								<ul className="flex flex-col gap-y-10">
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
								</ul>
							</div>
							<div className="flex flex-col gap-y-8">
								<h6 className="text-2xl font-bold text-[#5d6d78] ">
									About Aon
								</h6>
								<ul className="flex flex-col gap-y-10">
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
								</ul>
							</div>
							<div className="flex flex-col gap-y-8">
								<h6 className="text-2xl font-bold text-[#5d6d78] ">
									About Aon
								</h6>
								<ul className="flex flex-col gap-y-10">
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
									<li>
										<a href="" className="text-2xl font-medium text-white">
											Our Story
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="mt-12 border-t flex md:flex-row flex-col md:items-center justify-between pt-12">
						<div>
							<span className="text-2xl font-semibold text-[#acc0c4]">
								©2023 Aon plc. All rights reserved.
							</span>
							<ul className="flex  gap-10 mt-6">
								<li>
									<a
										href=""
										className="underline text-xl md:text-2xl font-medium text-white">
										Sitemap
									</a>
								</li>
								<li>
									<a
										href=""
										className="underline text-xl md:text-2xl font-medium text-white">
										Privacy Statement
									</a>
								</li>
								<li>
									<a
										href=""
										className="underline text-xl md:text-2xl font-medium text-white">
										Legal Notice
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-12 md:mt-0 flex items-center gap-x-12">
							<a href="">
								<Facebook />
							</a>
							<a href="">
								<LinkedIn />
							</a>
							<a href="">
								<Twitter />
							</a>
						</div>
					</section>
				</footer>
			</body>
		</html>
	);
}
