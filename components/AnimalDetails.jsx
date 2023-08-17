"use client";

import Image from "next/image";
import { Dialog } from "@headlessui/react";

const AnimalDetails = ({ isOpen, closeModal, animal }) => {
	const photos = Object.values(animal.photos) || {};
	const isDataEmpty = !Array.isArray(photos) || photos.length < 1 || !photos;

	return (
		<>
			<Dialog
				as="div"
				className="relative z-10"
				onClose={closeModal}
				open={isOpen}
			>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Dialog.Panel className="relative w-full max-w-lg h-[95vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
							<button
								type="button"
								className="absolute top-2 right-2 z-10 w-fit p-2 bg-blue-100 rounded-full"
								onClick={closeModal}
							>
								<Image
									src="/close.svg"
									alt="close"
									width={20}
									height={20}
									className="object-contain"
								/>
							</button>

							<div className="flex-1 flex flex-col gap-3">
								<div className="relative w-full h-full bg-blue-100 bg-center rounded-lg">
									<Image
										src={photos[0] ? photos[0].full : "/pet-logo.svg"}
										alt="animal foto"
										fill
										priority
										className="object-contain"
									/>
								</div>
								<div className="flex gap-3">
									{!isDataEmpty ? (
										photos.map((value, index) => (
											<div
												className="flex-1 relative w-full h-20 bg-blue-50 rounded-lg"
												key={index}
											>
												<Image
													src={value.full}
													alt="animal foto"
													fill
													priority
													className="object-contain"
												/>
											</div>
										))
									) : (
										<div> No photos found </div>
									)}
								</div>
							</div>

							<div className="flex-1 flex flex-col gap-2">
								<h2 className="font-semibold text-xl capitalize">
									{animal.name} - {animal.status}
								</h2>

								<div className="mt-3 flex flex-wrap gap-4">
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Type</h4>
										<p className="text-gray-800 font-semibold">
											{animal.type ? animal.description : "No infomation"}
										</p>
									</div>
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Breed</h4>
										<p className="text-gray-800 font-semibold">
											{animal.breeds.primary
												? animal.description
												: "No infomation"}
										</p>
									</div>
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Color</h4>
										<p className="text-gray-800 font-semibold">
											{animal.colors.primary
												? animal.description
												: "No infomation"}
										</p>
									</div>
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Age</h4>
										<p className="text-gray-800 font-semibold">
											{animal.age ? animal.description : "No infomation"}
										</p>
									</div>
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Gender</h4>
										<p className="text-gray-800 font-semibold">
											{animal.gender ? animal.description : "No infomation"}
										</p>
									</div>
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Size</h4>
										<p className="text-gray-800 font-semibold">
											{animal.size ? animal.description : "No infomation"}
										</p>
									</div>
									<div className="flex justify-between gap-5 w-full text-right">
										<h4 className="text-gray-500 capitalize">Description</h4>
										<p className="text-gray-800 font-semibold">
											{animal.description
												? animal.description
												: "No infomation"}
										</p>
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export default AnimalDetails;
