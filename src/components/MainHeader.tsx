import Offcanvas from "./Offcanvas";
import { Btn, Icons } from "./ui";
import { BtnProps } from "./ui/Btn";
import { useState } from "react";

const MainHeader = () => {
	const [offCanves, setOffCanves] = useState("home");
	const [isOpen, setIsOpen] = useState(false);
	const changeCanves = (canvesName: string) => {
		setIsOpen((prev: boolean) => !prev);
		setOffCanves(canvesName);
	};
	return (
		<header className=" relative z-40  inline-flex flex-col bg-white  justify-between items-center py-12  h-screen w-20 shadow ">
			<Offcanvas isOpen={isOpen} openedSection={offCanves} />
			<div className="z-40 bg-white absolute inset-0 flex flex-col items-center py-8 ">
				<nav className="relative   py-4 h-full">
					<ul className=" flex flex-col  items-center gap-4">
						<div className="bg-slate-200 h-10 w-10 rounded-full"></div>
						<ListBtn onClick={() => changeCanves("home")}>
							<Icons.home className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => changeCanves("people")} variant="ghost">
							<Icons.people className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => changeCanves("calendar")} variant="ghost">
							<Icons.calendar className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => changeCanves("share")} variant="ghost">
							<Icons.share className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => changeCanves("textFile")} variant="ghost">
							<Icons.textFile className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => changeCanves("project")} variant="ghost">
							<Icons.project className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => changeCanves("heart")} variant="ghost">
							<Icons.heart className="h-6 w-6" />
						</ListBtn>
						<ListBtn onClick={() => setIsOpen(false)} variant="ghost">
							<Icons.arrowLeft className="h-6 w-6" />
						</ListBtn>
					</ul>
				</nav>
				<Btn variant="ghost" className=" text-black">
					<Icons.setting className="h-6 w-6" />
				</Btn>
				<div className="bg-slate-100 flex justify-center items-center font-bold text-slate-300 h-10 w-10 flex-shrink-0 rounded-full">
					AS
				</div>
			</div>
		</header>
	);
};

export default MainHeader;

function ListBtn(props: BtnProps) {
	return (
		<li>
			<Btn variant="ghost" {...props}>
				{props.children}
			</Btn>
		</li>
	);
}
