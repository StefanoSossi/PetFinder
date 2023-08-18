"use client";

import { SearchBreed } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { updateSearchParams, deleteSearchParams } from "@/utils";

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

const SearchBar = () => {
	const [breed, setBreed] = useState("");
	const router = useRouter();

	const handleSearch = (event) => {
		event?.preventDefault();
		let newPathName = "";

		if (breed !== "" && breed.toLowerCase() !== "breed") {
			newPathName = updateSearchParams("breed", breed.toLocaleLowerCase());
		} else {
			newPathName = deleteSearchParams("breed");
		}
		router.push(newPathName);
	};

	return (
		<form
			className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
			onSubmit={handleSearch}
		>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<SearchBreed breed={breed} setBreed={setBreed} />
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
