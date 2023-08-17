"use client";

import { SearchBreed } from "@/components";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

		if (breed !== "") updateSearchParams(breed.toLocaleLowerCase());
	};

	const updateSearchParams = (breed) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (breed) {
			searchParams.set("breed", breed);
		} else {
			searchParams.delete("breed");
		}

		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;
		router.push(newPathname);
	};

	return (
		<form
			className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
			onSubmit={handleSearch}
		>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<SearchBreed breed={breed} setBreed={setBreed} />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
