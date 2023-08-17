import { CustomFilter, SearchBar, AnimalCard } from "@/components";
import { fetchAnimals } from "@/utils"; // fetchAnimalBreeds, getUniqueElements
import {
	allTypes,
	allBreeds,
	allSizes,
	allGenders,
	allAges,
	allStatus,
} from "@/constants";

export default async function Home({ searchParams }) {
	const allAnimals = await fetchAnimals({
		breed: searchParams.breed || "",
		type: searchParams.type || "",
		size: searchParams.size || "",
		gender: searchParams.gender || "",
		age: searchParams.age || "",
		status: searchParams.status || "",
	});

	// Get all unique elements from API
	/* 
		const allBreeds = await fetchAnimalBreeds();
		const allSizes = await getUniqueElements("size");
		const allGenders = await getUniqueElements("gender");
		const allAges = await getUniqueElements("age");
		const allStatus = await getUniqueElements("status");
	*/

	const isDataEmpty =
		!Array.isArray(allAnimals) || allAnimals.length < 1 || !allAnimals;

	return (
		<main className="overflow-hidden">
			<div className="mt-12 px-16 py-4 max-w-[1440px] mx-auto" id="discover">
				<div className="flex flex-col items-start justify-start gap-y-2.5">
					<h1 className="text-4xl font-extrabold"> List of Pets </h1>
				</div>
				<div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
					<SearchBar />
					<div className="flex justify-start flex-wrap items-center gap-2 mt-4">
						<CustomFilter tittle="Type" options={allTypes}></CustomFilter>
						<CustomFilter tittle="Breed" options={allBreeds}></CustomFilter>
						<CustomFilter tittle="Size" options={allSizes}></CustomFilter>
						<CustomFilter tittle="Gender" options={allGenders}></CustomFilter>
						<CustomFilter tittle="Age" options={allAges}></CustomFilter>
						<CustomFilter tittle="Status" options={allStatus}></CustomFilter>
					</div>
				</div>
				{!isDataEmpty ? (
					<section>
						<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
							{allAnimals?.map((animal) => (
								<AnimalCard key={animal.id} animal={animal} />
							))}
						</div>
					</section>
				) : (
					<div className="mt-16 flex justify-center items-center flex-col gap-2">
						<h2 className="text-black text-xl font-bold">
							Oops, there are no animals...
						</h2>
						<p>{allAnimals?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
