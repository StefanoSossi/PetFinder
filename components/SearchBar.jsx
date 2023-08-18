"use client";

import { SearchBreed } from "@/components";
import { useState } from "react";
import Image from "next/image";

const SearchButton = ({ otherClasses }) => (
	<button
		type="submit"
		className={`z-10 absolute top-2 right-2 ${otherClasses}`}
	>
		<Image
			src="/search.svg"
			alt="search icon"
			width={30}
			height={30}
			className="object-contain"
		/>
	</button>
);

const SearchBar = ({ setBreed }) => {
	const [breedSearch, setBreedSearch] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();

		if (breedSearch === "" && breedSearch.toLowerCase() === "breed") {
			return alert("Please provide some input");
		}
		setBreed(breedSearch.toLocaleLowerCase());
	};

	return (
		<form
			className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
			onSubmit={handleSearch}
		>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<SearchBreed selected={breedSearch} setSelected={setBreedSearch} />
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
