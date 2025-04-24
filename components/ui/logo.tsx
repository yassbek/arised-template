import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/arised_logo.png"; // imported from src/images

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={LogoImage} alt="Cruip Logo" width={64} height={64} />
    </Link>
  );
}
