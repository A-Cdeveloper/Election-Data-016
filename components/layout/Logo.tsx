import Image from "next/image";
import Link from "next/link";

type APPLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

const APPLogo = ({
  width = 250,
  height = 250,
  className = "",
}: APPLogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/ED016.png"
        alt="ElectionData logo"
        width={width}
        height={height}
        className={className}
        loading="lazy"
      />
    </Link>
  );
};

export default APPLogo;
