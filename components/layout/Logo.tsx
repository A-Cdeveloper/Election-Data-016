import Image from "next/image";
import Link from "next/link";

type APPLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

const APPLogo = ({ width = 250, height, className = "" }: APPLogoProps) => {
  const imageHeight = height ?? Math.round((width * 725) / 2170);

  return (
    <Link href="/">
      <Image
        src="/ED016.png"
        alt="ElectionData logo"
        width={width}
        height={imageHeight}
        className={className}
        loading="lazy"
      />
    </Link>
  );
};

export default APPLogo;
