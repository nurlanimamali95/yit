import {
	FaInstagram,
	FaWhatsapp,
	FaFacebookF,
	FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-[#FEC760] py-8">
			<div className="flex flex-col items-center justify-center">
				<div className="flex space-x-6 mb-4 text-black">
					<a
						href="#"
						aria-label="Instagram"
						className="hover:text-gray-700 transition duration-300"
					>
						<FaInstagram size={20} />
					</a>
					<a
						href="#"
						aria-label="WhatsApp"
						className="hover:text-gray-700 transition duration-300"
					>
						<FaWhatsapp size={20} />
					</a>
					<a
						href="#"
						aria-label="Facebook"
						className="hover:text-gray-700 transition duration-300"
					>
						<FaFacebookF size={20} />
					</a>
					<a
						href="#"
						aria-label="LinkedIn"
						className="hover:text-gray-700 transition duration-300"
					>
						<FaLinkedinIn size={20} />
					</a>
				</div>

				<div className="text-center text-sm">
					<p>
						© 2025 CosmoCats. All rights reserved. Made with{" "}
						<span className="inline-block align-middle">
							<Image
								src="/heart.gif"
								alt="Heart"
								className="w-6 h-6 inline-block"
								width={24}
								height={24}
							/>
						</span>{" "}
						by CosmoCats.
					</p>
				</div>
			</div>
		</footer>
	);
}
