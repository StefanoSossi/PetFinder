import { CustomFilter, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
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
			</div>
		</main>
	);
}
