"use client";

import { useState } from "react";
import Image from "next/image";
import { Listbox } from "@headlessui/react";

const CustomFilter = ({ tittle, options, setFilter }) => {
	const allOptions = Array.from(options);
	const [selected, setSelected] = useState("");

	return (
		<div className="w-fit">
			<Listbox
				value={selected}
				onChange={(e) => {
					setSelected(e);
					setFilter(e === tittle ? "" : e.toLocaleLowerCase());
				}}
			>
				<div className="relative w-fit -z10">
					<Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
						<span className="block truncate">
							{selected ? selected : tittle}
						</span>
						<Image
							src="/up-down.svg"
							width={20}
							height={20}
							className="ml-4 object-contain"
							alt="up-down"
						/>
					</Listbox.Button>
					<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{allOptions.map((option, index) => (
							<Listbox.Option
								key={index}
								className={({ active }) =>
									`relative cursor-default select-none py-2 px-4 ${
										active ? "bg-blue-100 text-black" : "text-gray-500"
									}`
								}
								value={option}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? "font-medium" : "font-normal"
											}`}
										>
											{option}
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</div>
	);
};

export default CustomFilter;
