import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<Link href="/">
			<div className="inline-block">
				<Image src="/yitlogo.png" alt="Logo" width={70} height={70} />
			</div>
		</Link>
	);
}
