import Chevron from "./icons/Chevron";
import Web from "./icons/Web";
import Search from "./icons/Search";
import Hamburger from "./icons/Hamburger";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
	return (
		<header className="top-0 fixed w-full z-[3] h-[7rem] md:h-[10rem] bg-white px-8 md:px-16 flex items-center justify-between">
			<div className="flex items-center gap-x-10">
				<Image
					className="w-[17rem] h-max md:w-[17rem]"
					src="/fakelogo.png"
					width={80}
					height={100}
					alt=""
				/>
				<nav className="hidden xl:flex items-center gap-x-16 text-textColor">
					<a className="text-2xl font-semibold m-0" href="">
						<span>Capabilities</span>
					</a>
					<a className="text-2xl font-semibold m-0" href="">
						<span>Industries</span>
					</a>
					<a className="text-2xl font-semibold m-0" href="">
						<span>Insights</span>
					</a>
					<a className="text-2xl font-semibold m-0" href="">
						<span>About</span>
					</a>
					{/* <span>
						<Search />
					</span> */}
				</nav>
			</div>
			<div className="hidden xl:flex items-center">
				<nav className="flex items-center  text-textColor">
					<a
						className="text-2xl font-medium m-0 px-8 border-r border-r-[#5d6d78]"
						href="">
						<span>Contact Us</span>
					</a>
					<ul className="flex items-center gap-x-8 px-8 border-r border-r-[#5d6d78]">
						<li>
							<a className="text-2xl text-[#5d6d78] m-0" href="">
								<span>Careers</span>
							</a>
						</li>
						<li>
							<a className="text-2xl text-[#5d6d78] m-0" href="">
								<span>Investors</span>
							</a>
						</li>
						<li>
							<a className="text-2xl text-[#5d6d78] m-0" href="">
								<span>News</span>
							</a>
						</li>
					</ul>
					{/* <button className="flex items-center gap-x-3 pl-8">
						<Web fill={"black"} />
						<Chevron fill={"fill-textColor"} />
					</button> */}
				</nav>
			</div>
			<div className="xl:hidden flex items-center gap-x-16">
				{/* <span>
					<Search />
				</span> */}
				<HamburgerMenu />
			</div>
		</header>
	);
}
