import { CustomFilter, SearchBar, AnimalCard } from "@/components";
import { fetchAnimals } from "@/utils";

export default async function Home({ searchParams }) {
	const allAnimals = await fetchAnimals({
		breed: searchParams.breed || "",
		type: searchParams.type || "",
		size: searchParams.size || "",
		gender: searchParams.gender || "",
		age: searchParams.age || "",
		status: searchParams.status || "",
	});
	const isDataEmpty =
		!Array.isArray(allAnimals) || allAnimals.length < 1 || !allAnimals;

	return (
		<main className="overflow-hidden">
			<div className="mt-12 px-16 py-4 max-w-[1440px] mx-auto" id="discover">
				<div className="flex flex-col items-start justify-start gap-y-2.5">
					<h1 className="text-4xl font-extrabold"> Lista de Mascotas</h1>
				</div>
				<div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
					<SearchBar />
					<div className="flex justify-start flex-wrap items-center gap-2">
						<CustomFilter tittle="Tipo"></CustomFilter>
						<CustomFilter tittle="Raza"></CustomFilter>
						<CustomFilter tittle="Tamaño"></CustomFilter>
						<CustomFilter tittle="Genero"></CustomFilter>
						<CustomFilter tittle="Edad"></CustomFilter>
						<CustomFilter tittle="Estatus"></CustomFilter>
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
							Oops, no se encontraron animalitos
						</h2>
						<p>{allAnimals?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
