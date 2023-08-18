"use client";

import { Combobox } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import { allBreeds } from "@/constants";

const SearchBreed = ({ breed, setBreed }) => {
	const [query, setQuery] = useState("");

	const filteredBreeds =
		query === ""
			? allBreeds
			: allBreeds.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<div className="flex-1 max-sm:w-full flex justify-start items-center">
			<Combobox value={breed} onChange={setBreed}>
				<div className="relative w-full">
					<Combobox.Button className="absolute top-[14px]">
						<Image
							src="/pet-logo.svg"
							width={20}
							height={20}
							className="ml-4"
							alt="Pet logo"
						></Image>
					</Combobox.Button>
					<Combobox.Input
						className="w-full h-[48px] pl-12 p-4 rounded-2xl max-sm:rounded-full bg-blue-100 outline-none cursor-pointer text-sm"
						placeholder="Breed"
						displayValue={(breed) => breed}
						onChange={(event) => setQuery(event.target.value)}
					></Combobox.Input>
					<Combobox.Options>
						{filteredBreeds.map((item) => (
							<Combobox.Option
								key={item}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active ? "bg-blue-100 text-white" : "text-gray-900"
									}`
								}
								value={item}
							>
								{item}
							</Combobox.Option>
						))}
					</Combobox.Options>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchBreed;
