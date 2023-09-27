import { MainHeader } from "./components";
import { Btn, CheckBox, Icons } from "./components/ui";
import { config } from "./siteConfig";
import { ComponentProps, useState } from "react";

function App() {
	return (
		<>
			<MainHeader />
			<main className=" lg:pl-[320px] xl:pl-[420px] relative float-right   inline-flex flex-col h-screen w-[calc(100%_-_80px)]">
				<header className=" p-4 flex flex-col lg:flex-row md:justify-between gap-2 justify-center items-center">
					<DropDown />
					<div className=" gap-2  flex items-center flex-col xl:flex-row rounded">
						<div className="flex  gap-2">
							<Btn className="h-6 w-6 sm:h-8 sm:w-8 p-0" variant="outline">
								<Icons.tag />
							</Btn>
							<Btn className="h-6 w-6 sm:h-8 sm:w-8 p-0" variant="outline">
								<Icons.personDelete />
							</Btn>
							<Btn className="h-6 w-6 sm:h-8 sm:w-8 p-0" variant="outline">
								<Icons.personAdd />
							</Btn>
							<Btn className="h-6 w-6 sm:h-8 sm:w-8 p-0" variant="outline">
								<Icons.person />
							</Btn>
							<Btn className="h-6 w-6 sm:h-8 sm:w-8 p-0" variant="outline">
								<Icons.unreadMessage />
							</Btn>
						</div>
						<Btn className="max-w-60 flex-nowrap  whitespace-nowrap text-sm sm:text-base h-10 py-0 flex  gap-2 ">
							<span>Move To Video Interview</span>
							<span className=" h-full w-px bg-white" />
							<Icons.arrowLeft className=" h-4 w-4 -rotate-90" />
						</Btn>
					</div>
				</header>
				<section className="p-4 pb-0   overflow-y-scroll remove-scroll-bar  w-full flex-1">
					<div className="  divide-y-2   bg-white rounded-t-md shadow   ">
						<CandidateSectionHeader />
						{config.candidates &&
							config.candidates.map((candidate) => (
								<CandidateProfile key={candidate.id} {...candidate} />
							))}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;

function DropDown() {
	const [isOpen, setisOpen] = useState(false);
	const [active, setactive] = useState("opportunity browsing");
	return (
		<div className=" relative w-full max-w-[320px]">
			<Btn
				onClick={() => setisOpen((prev) => !prev)}
				variant="ghost"
				className="text-primary w-full max-w-[320px] whitespace-nowrap justify-between bg-white capitalize shadow rounded-md font-semibold"
			>
				<span>{active}</span>
				<Icons.arrowDown clasName="w-4 h-4 " />
			</Btn>
			<div
				data-open={isOpen}
				className=" absolute mt-2 grid transition-[grid-template-rows] duration-500 data-[open='true']:grid-rows-[1fr] grid-rows-[0fr] w-full  "
			>
				<div className=" bg-white  shadow  divide-y-2 rounded-md overflow-hidden z-40  w-full ">
					{config.filters &&
						config.filters.map((filter) => {
							return (
								<div
									data-active={active == filter.name}
									onClick={() => setactive(filter.name)}
									className="data-[active='true']:bg-primary/10 data-[active='true']:text-primary hover:bg-primary/10 transition-colors bg-white flex justify-between p-2 py-4 capitalize"
								>
									<span>{filter.name}</span>
									<PillBg
										data-active={active == filter.name}
										className="data-[active='true']:bg-primary/10 data-[active='true']:text-primary"
									>
										{filter.numOfReasult}
									</PillBg>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

function CandidateSectionHeader() {
	return (
		<div className=" z-40 flex items-center px-4 justify-between  border-b-[1px] rounded-t-md sticky -top-4 bg-white h-16 w-full">
			<div className="text-center flex items-center gap-4 font-semibold text-primary">
				<CheckBox />
				<span>247 Candidates</span>
			</div>
			<div className=" md:divide-x-2 text-sm capitalize flex items-center gap-4 ">
				<span className="font-semibold text-center flex flex-col md:flex-row md:px-2 md:gap-2 items-center text-primary">
					Qualified
					<PillBg>247</PillBg>
				</span>
				<span className=" text-center flex flex-col md:flex-row md:px-2 md:gap-2 items-center">
					tasks
					<PillBg>25</PillBg>
				</span>
				<span className=" text-center flex flex-col md:flex-row md:px-2 md:gap-2 items-center">
					disQualified
					<PillBg>79</PillBg>
				</span>
			</div>
		</div>
	);
}

function CandidateProfile(props: {
	id: string;
	name: string;
	residence: string;
	education: string;
	video?: number;
	programs?: number;
	tags: string[];
	info: string[];
}) {
	return (
		<div className="  w-full flex gap-4 px-4 items-center  ">
			<CheckBox />
			<div className=" flex flex-shrink-0 justify-center items-center bg-slate-100 h-14 w-14 rounded-full ">
				<span className=" font-bold text-2xl text-slate-300">AS</span>
			</div>
			<div className="relative flex flex-col p-4 gap-2 flex-1 h-full">
				<h3>{props.name}</h3>
				<h4>{props.residence}</h4>
				<p>{props.education}</p>
				<div className=" flex items-center gap-2  ">
					{props.tags &&
						props.tags.map((tag) => (
							<a className=" text-primary cursor-pointer">{tag} </a>
						))}
				</div>
				<div className=" flex items-center gap-2  ">
					{props.info &&
						props.info.map((info) => (
							<div className=" whitespace-nowrap bg-green-100 text-green-700 px-4 py-1 capitalize rounded-full">
								{info}
							</div>
						))}
				</div>
				{(props.video || props.programs) && (
					<div className=" flex absolute top-0 right-0 gap-2 p-2">
						{props.video && (
							<PillBg className="flex items-center gap-2 bg-primary/20 text-primary capitalize">
								<Icons.play />
								{props.video}
							</PillBg>
						)}
						{props.programs && (
							<PillBg className="flex items-center gap-2 bg-primary/20 text-primary capitalize">
								<Icons.book />
								{props.programs}
								<span>programs</span>
							</PillBg>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

function PillBg({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			{...props}
			className={`bg-slate-100 rounded-full text-sm px-2 h-6 ${className}`}
		>
			{props.children}
		</div>
	);
}
