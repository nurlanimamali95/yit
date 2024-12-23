import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

interface LogoCardProps {
	image: string;
}

const Card: React.FC<LogoCardProps> = ({ image }) => {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<motion.div
			className="relative overflow-hidden h-32 w-32 flex justify-center items-center"
			key={image}
			onHoverStart={() => setShowOverlay(true)}
			onHoverEnd={() => setShowOverlay(false)}
		>
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					></motion.div>
				)}
			</AnimatePresence>
			<Image src={image} alt={image} fill style={{ objectFit: "contain" }} />
		</motion.div>
	);
};

export default Card;
