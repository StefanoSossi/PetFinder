"use client";

import { useState, useEffect } from "react";
import { CustomFilter, SearchBar, AnimalCard, Pagination } from "@/components";
import { fetchAnimals } from "@/utils"; // fetchAnimalBreeds, getUniqueElements
import Image from "next/image";
import {
	allTypes,
	allBreeds,
	allSizes,
	allGenders,
	allAges,
	allStatus,
	// allAnimals,
} from "@/constants";

export default function Home({ searchParams }) {
	// dogs total = 160913, cats total = 147054,  total animals = 307967 - (15398 * 20)
	const [allAnimals, setAllAnimals] = useState([]);
	const [loading, setLoading] = useState(false);
	const [breed, setBreed] = useState("");
	const [type, setType] = useState("");
	const [size, setSize] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [status, setStatus] = useState("");
	const [page, setPage] = useState("1");

	useEffect(() => {
		const getAnimals = async () => {
			setLoading(true);
			try {
				const result = await fetchAnimals({
					breed: breed || "",
					type: type || "",
					size: size || "",
					gender: gender || "",
					age: age || "",
					status: status || "",
					page: page || "1",
				});

				setAllAnimals(result);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		getAnimals();
	}, [breed, type, size, gender, age, status, page]);

	const itemsPerPage = 30;
	const currentPage = page || 1;
	const fisrtIndex = (currentPage - 1) * itemsPerPage;
	const lastIndex = currentPage * itemsPerPage;
	const totalPages = Math.ceil(allAnimals.length / itemsPerPage);

	// Get all unique elements from API
	/* 
		const allBreeds = await fetchAnimalBreeds();
		const allSizes = await getUniqueElements("size");
		const allGenders = await getUniqueElements("gender");
		const allAges = await getUniqueElements("age");
		const allStatus = await getUniqueElements("status");
	*/

	return (
		<main className="overflow-hidden">
			<div className="mt-12 px-16 py-4 max-w-[1440px] mx-auto" id="discover">
				<div className="flex flex-col items-start justify-start gap-y-2.5">
					<h1 className="text-4xl font-extrabold"> List of Pets </h1>
				</div>
				<div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
					<SearchBar setBreed={setBreed} />
					<div className="flex justify-start flex-wrap items-center gap-2 mt-4">
						<CustomFilter
							tittle="Type"
							options={allTypes}
							setFilter={setType}
						></CustomFilter>
						<CustomFilter
							tittle="Breed"
							options={allBreeds}
							setFilter={setBreed}
						></CustomFilter>
						<CustomFilter
							tittle="Size"
							options={allSizes}
							setFilter={setSize}
						></CustomFilter>
						<CustomFilter
							tittle="Gender"
							options={allGenders}
							setFilter={setGender}
						></CustomFilter>
						<CustomFilter
							tittle="Age"
							options={allAges}
							setFilter={setAge}
						></CustomFilter>
						<CustomFilter
							tittle="Status"
							options={allStatus}
							setFilter={setStatus}
						></CustomFilter>
					</div>
				</div>
				{allAnimals.length > 0 ? (
					<section>
						<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
							{allAnimals.slice(fisrtIndex, lastIndex)?.map((animal) => (
								<AnimalCard key={animal.id} animal={animal} />
							))}
						</div>
						{loading && (
							<div className="mt-16 w-full flex-center">
								<Image
									src="./loader.svg"
									alt="loader"
									width={50}
									height={50}
									className="object-contain"
								/>
							</div>
						)}
					</section>
				) : (
					<div className="mt-16 flex justify-center items-center flex-col gap-2">
						<h2 className="text-black text-xl font-bold">
							Oops, there are no animals...
						</h2>
						<p>{allAnimals?.message}</p>
					</div>
				)}
				<Pagination totalPages={totalPages} setPage={setPage}></Pagination>
			</div>
		</main>
	);
}
