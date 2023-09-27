import { Icons } from "./ui";

const filters = [
	"personal information",
	"education",
	"work experience",
	"activity filter",
	"advanced filter",
];
const OffCanvesHome = () => {
	return (
		<div className=" flex flex-col gap-8 justify-center w-full">
			<div>
				<h2 className="my-2 font-semibold text-primary">
					London Internship Program
				</h2>
				<p>london</p>
			</div>
			<div className=" bg-white flex rounded-sm h-12">
				<span className=" h-12 w-10 flex justify-center items-center">
					<Icons.search className="h-6 w-6 fill-gray-400" />
				</span>
				<input
					className=" flex-1"
					placeholder="Serach by name, edu, exp or #tag"
					type="text"
				/>
				<span className=" h-12 w-10 flex justify-center items-center">
					<Icons.info className="h-6 w-6 fill-gray-400" />
				</span>
			</div>
			<div className="bg-white flex flex-col divide-y-2 rounded-md">
				<div className="h-14 flex capitalize   items-center justify-between px-2 font-semibold">
					<span>filters</span>
					<span>0 selected</span>
				</div>
				{filters && filters.map((filter) => <Filter name={filter} />)}
			</div>
		</div>
	);
};
const Offcanvas = ({
	openedSection,
	isOpen,
}: {
	openedSection: string;
	isOpen: boolean;
}) => {
	return (
		<div
			data-isopen={isOpen}
			className=" bg-slate-100 p-4  z-30 absolute top-0 left-full data-[isopen=false]:-translate-x-full transition-transform gap-8   w-[320px] lg:w-[420px]  h-full "
		>
			{openedSection == "home" && <OffCanvesHome />}
		</div>
	);
};

export default Offcanvas;

function Filter({ name }: { name: string }) {
	return (
		<div className="h-14 capitalize flex items-center justify-between px-2">
			<div className="flex gap-2">
				<Icons.textFile className="w-4 h-4" />
				<span>{name}</span>
			</div>
			<span>
				<Icons.arrowDown className="w-4 h-4" />
			</span>
		</div>
	);
}
