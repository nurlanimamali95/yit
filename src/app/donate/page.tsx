"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/accordion";
import { FaWhatsapp } from "react-icons/fa";
import { donatePackages } from "@/app/donate/donateData";

export default function Donate() {
	return (
		<div className="flex flex-col items-center px-8 py-12">
			<h2 className="text-3xl sm:text-2xl font-semibold mb-6 mt-[8rem]">
				Support YIT
			</h2>
			<p className="text-lg text-justify max-w-[70%] mb-10">
				As a non-profit educational theatre, YIT relies on corporate and
				community support to implement self-funded projects, like the Cultural
				Heritage Tour in Spring 2025 and 2026, publishing 3D Theatres books in
				four languages in fall 2025, and English Through Drama board games in
				2026.
			</p>

			<div
				className="w-full max-w-3xl"
				style={{
					height: "350px",
					overflowY: "auto",
				}}
			>
				<Accordion type="single" collapsible>
					{donatePackages.map((pkg, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger className="text-lg font-medium">
								{pkg.title}
							</AccordionTrigger>
							<AccordionContent className="text-sm">
								<p>{pkg.description}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>

			<div className="mt-10 w-full max-w-3xl p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-4 text-center">
					How to Donate
				</h3>
				<div className="space-y-6">
					<div>
						<h4 className="text-lg font-medium">1. Pay via PayPal</h4>
						<p>Click the button below to donate via PayPal:</p>
						<button className="mt-2 bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded">
							Donate via PayPal
						</button>
					</div>
					<div>
						<h4 className="text-lg font-medium">2. Bank Transfer</h4>
						<p>
							Use the following details to donate directly via bank transfer:
						</p>
						<ul className="list-disc ml-6">
							<li>
								<strong>Bank Name:</strong> [Your Bank Name]
							</li>
							<li>
								<strong>IBAN:</strong> [Your IBAN]
							</li>
							<li>
								<strong>SWIFT/BIC:</strong> [Your SWIFT Code]
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-4 flex items-center gap-2">
					<p>If you face any issues, text us on WhatsApp:</p>
					<a
						href="https://wa.me/[+31627623727]"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-green-500 hover:underline"
					>
						<FaWhatsapp className="w-6 h-6" />
					</a>
				</div>
			</div>
		</div>
	);
}
