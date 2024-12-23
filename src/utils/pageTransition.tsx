"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, type: "spring", stiffness: 100 }}
				className="flex-grow"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
