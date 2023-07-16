"use client";
import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import Image from "next/image";
import { createPortal } from "react-dom";
import Chevron from "./icons/Chevron";

export default function HamburgerMenu() {
	const [show, setShow] = useState(false);

	return (
		<>
			<span onClick={() => setShow(true)}>
				<Hamburger />
			</span>
			{show &&
				createPortal(
					<div className="z-[5] fixed h-screen top-0 w-full   bg-white flex flex-col">
						<div className="flex items-center justify-between h-[7rem] px-8">
							<Image
								className="w-[17rem] h-max md:w-[17rem]"
								src="/fakelogo.png"
								width={80}
								height={100}
								alt=""
							/>
							<span
								onClick={() => setShow(false)}
								className="w-[30px] h-[30px] flex items-center justify-center">
								<svg
									width="24"
									height="24"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0.96967 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L9 7.93934L15.9697 0.969671C16.2626 0.676777 16.7374 0.676777 17.0303 0.969671C17.3232 1.26256 17.3232 1.73744 17.0303 2.03033L10.0607 9L17.0303 15.9697C17.3232 16.2626 17.3232 16.7374 17.0303 17.0303C16.7374 17.3232 16.2626 17.3232 15.9697 17.0303L9 10.0607L2.03033 17.0303C1.73744 17.3232 1.26256 17.3232 0.96967 17.0303C0.676777 16.7374 0.676777 16.2626 0.96967 15.9697L7.93934 9L0.96967 2.03033C0.676777 1.73744 0.676777 1.26256 0.96967 0.96967Z"
										className="fill-primary"
									/>
								</svg>
							</span>
						</div>
						<div className="px-8 pb-12 bg-[#eef6f7] flex flex-col grow">
							<div className="border-b py-12 grow">
								<ul className="flex flex-col gap-y-14">
									<li>
										<a
											href=""
											className="text-4xl font-bold text-textColor flex items-center justify-between">
											<span>Capabilities</span>
											<span className="rotate-[-90deg]">
												<Chevron fill={"fill-textColor"} />
											</span>
										</a>
									</li>
									<li>
										<a
											href=""
											className="text-4xl font-bold text-textColor flex items-center justify-between">
											<span>Capabilities</span>
											<span className="rotate-[-90deg]">
												<Chevron fill={"fill-textColor"} />
											</span>
										</a>
									</li>
									<li>
										<a
											href=""
											className="text-4xl font-bold text-textColor flex items-center justify-between">
											<span>Capabilities</span>
											<span className="rotate-[-90deg]">
												<Chevron fill={"fill-textColor"} />
											</span>
										</a>
									</li>
									<li>
										<a
											href=""
											className="text-4xl font-bold text-textColor flex items-center justify-between">
											<span>Capabilities</span>
											<span className="rotate-[-90deg]">
												<Chevron fill={"fill-textColor"} />
											</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="py-12">
								<ul className="flex flex-col gap-y-8">
									<li>
										<a
											href=""
											className="text-xl font-medium text-[#5d6d78] flex items-center justify-between">
											<span>Careers</span>
										</a>
									</li>
									<li>
										<a
											href=""
											className="text-xl font-medium text-[#5d6d78] flex items-center justify-between">
											<span>Careers</span>
										</a>
									</li>
									<li>
										<a
											href=""
											className="text-xl font-medium text-[#5d6d78] flex items-center justify-between">
											<span>Careers</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
