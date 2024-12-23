import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar"; // Import Navbar
import Footer from "@/components/footer"; // Import Footer
import "./globals.css";
import PageTransition from "@/utils/pageTransition";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Youth Inclusive Theatre",
	description:
		"Theatre fosters empathy, confidence, and self-esteem in children by exposing them to diverse perspectives and encouraging self-expression. It helps build public speaking skills, conquer stage fright, and unlock their creative potential in a supportive environment.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} antialiased bg-gray-100 flex flex-col min-h-screen`}
			>
				<Navbar />
				<main className="flex-grow mt-[3.6rem]">
					<PageTransition>{children}</PageTransition>
				</main>

				<Footer />
			</body>
		</html>
	);
}
