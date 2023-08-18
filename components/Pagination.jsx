"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Pagination = ({ totalPages, setPage }) => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div className="flex justify-center flex-wrap items-center gap-2 mt-4">
			<button
				onClick={() => {
					setCurrentPage(currentPage - 1);
					setPage(currentPage - 1);
				}}
				className="relative w-28 min-w-[40px] flex justify-center items-center cursor-default rounded-lg bg-white py-2 px-3 shadow-md sm:text-sm border"
				disabled={currentPage === 1 ? true : false}
			>
				<Image
					src={"/left-arrow.svg"}
					alt="left-arrow"
					width={20}
					height={20}
					className="object-contain"
				/>
				<h1 className="w-fit overflow-x-hidden">Previous</h1>
			</button>
			<h1 className="relative w-10 min-w-[20px] flex justify-center items-center cursor-default rounded-lg bg-white py-2 px-3 shadow-md sm:text-sm border">
				{currentPage}
			</h1>
			<button
				onClick={() => {
					setCurrentPage(currentPage + 1);
					setPage(currentPage + 1);
				}}
				className="relative w-28 min-w-[40px] flex justify-center items-center cursor-default rounded-lg bg-white py-2 px-3 shadow-md sm:text-sm border"
				disabled={currentPage === totalPages ? true : false}
			>
				<h1 className="w-fit">Next</h1>
				<Image
					src={"/right-arrow.svg"}
					alt="right-arrow"
					width={20}
					height={20}
					className="object-contain"
				/>
			</button>
		</div>
	);
};
export default Pagination;
