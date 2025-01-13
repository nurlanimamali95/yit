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
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSfSBrcTpuzVqCT7AK45ujDqB1rZRci0XuTR7kHhgsjXZOo54g/viewform"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-6 px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition duration-300"
				>
					Enroll Now
				</a>

				<div className="flex flex-col items-center space-y-4 mb-4 text-black">
					<div className="flex space-x-6">
						<a
							href="https://www.linkedin.com/in/ilaya-faiq-3172a8149/?trk=opento_sprofile_details"
							rel="noopener noreferrer"
							target="_blank"
							aria-label="LinkedIn"
							className="hover:text-gray-700 transition duration-300"
						>
							<FaLinkedinIn size={20} />
						</a>
						<a
							href="https://www.instagram.com/yitsince2016/"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="hover:text-gray-700 transition duration-300"
							target="_blank"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href="https://www.facebook.com/EnglishChildrenTheatre2130/"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="hover:text-gray-700 transition duration-300"
							target="_blank"
						>
							<FaFacebookF size={20} />
						</a>
					</div>

					<div className="flex flex-col space-y-2">
						<a
							href="https://wa.me/37124857296"
							rel="noopener noreferrer"
							aria-label="WhatsApp Europe"
							className="hover:text-gray-700 transition duration-300"
							target="_blank"
						>
							<div className="flex items-center space-x-2">
								<FaWhatsapp size={20} />
								<span className="text-sm">WhatsApp EU</span>
							</div>
						</a>
						<a
							href="https://wa.me/994504608078"
							rel="noopener noreferrer"
							aria-label="WhatsApp Azerbaijan"
							className="hover:text-gray-700 transition duration-300"
							target="_blank"
						>
							<div className="flex items-center space-x-2">
								<FaWhatsapp size={20} />
								<span className="text-sm">WhatsApp AZ</span>
							</div>
						</a>
					</div>
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
								unoptimized
							/>
						</span>
						by CosmoCats.
					</p>
				</div>
			</div>
		</footer>
	);
}
