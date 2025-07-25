import Image from "next/image";

export default function DynamicIcon({
  src,
  width,
  height,
  color,
}: {
  src?: string;
  width?: number;
  height?: number;
  color?: string;
}) {
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt="icon"
      width={width || 22}
      height={height || 22}
      style={{
        filter: color ? `invert(1) sepia(1) saturate(5) hue-rotate(${color})` : undefined,
      }}
    />
  );
}