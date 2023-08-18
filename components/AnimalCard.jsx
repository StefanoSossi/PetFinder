"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimalDetails } from "@/components";
const AnimalCard = ({ animal }) => {
	const [isOpen, setIsOpen] = useState(false);

	const photos = animal.photos;
	const firstPhoto = Object.values(photos)[0];

	return (
		<div
			className="flex flex-col p-6 justify-center items-start text-black hover:bg-blue-100 bg-zinc-100 hover:shadow-md rounded-3xl shadow-sm"
			onClick={() => setIsOpen(true)}
		>
			<div className="w-full flex justify-between items-start gap-2">
				<h2 className="text-[22px] leading-[26px] font-bold capitalize">
					{animal.name} - {animal.breeds.primary}
				</h2>
			</div>
			<div className="relative w-full h-40 my-3 object-contain">
				<Image
					src={firstPhoto ? firstPhoto.full : "/pet-logo.svg"}
					alt="animal photo"
					fill
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-contain"
				/>
			</div>

			<div className="relative flex w-full mt-2">
				<div className="flex group-hover:invisible w-full justify-between text-grey">
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src={animal.type === "Dog" ? "/dog.svg" : "/cat.svg"}
							width={30}
							height={30}
							alt="animal type"
						/>
						<p className="text-[18px] leading-[20px] font-bold capitalize">
							{animal.status}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2 -ml-3">
						<p className="text-[18px] leading-[20px] font-bold capitalize">
							{animal.age}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src={animal.gender === "Male" ? "/male.svg" : "/female.svg"}
							width={25}
							height={25}
							alt="gender"
						/>
						<p className="text-[18px] leading-[20px] font-bold capitalize">
							{animal.gender}
						</p>
					</div>
				</div>
			</div>
			<AnimalDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				animal={animal}
			/>
		</div>
	);
};

export default AnimalCard;
