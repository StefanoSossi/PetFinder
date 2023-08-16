"use client";

import { SearchBreed } from "@/components";
import { useState } from "react";
const SearchBar = () => {
	const [breed, setBreed] = useState("");
	const handleSearch = () => {};

	return (
		<form
			className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
			onSubmit={handleSearch}
		>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<SearchBreed breed={breed} setBreed={setBreed} />
			</div>
		</form>
	);
};

export default SearchBar;
