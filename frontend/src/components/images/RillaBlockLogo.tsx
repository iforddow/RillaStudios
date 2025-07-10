import Image from "next/image";

export default function RillaBlockLogo({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={"/rilla_block_logo.png"}
      width={width || 40}
      height={height || 40}
      alt="Rilla Block Logo"
    />
  );
}
