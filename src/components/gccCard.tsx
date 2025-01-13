"use client";

import Image from "next/image";

interface GccCardProps {
	image: string;
	name?: string;
	location?: string | undefined;
	description: string;
}

export default function GccCard({ image, name }: GccCardProps) {
	return (
		<div className="max-w-md bg-white bg-opacity-40 rounded-lg shadow-md p-6 relative flex flex-col">
			<div className="relative">
				<div className="relative">
					<Image
						src={image}
						alt={name || "Image"}
						className="w-full h-96 object-contain rounded-lg"
						width={500}
						height={400}
					/>
				</div>
				{name && (
					<span className="absolute top-0 bg-gray-200 px-3 py-1 text-lg w-full text-center shadow-sm">
						{name}
					</span>
				)}
			</div>
		</div>
	);
}
