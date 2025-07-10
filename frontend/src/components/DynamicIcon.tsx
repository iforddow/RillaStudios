export default function DynamicIcon({
  name,
  width,
  height,
  color,
}: {
  name?: string;
  width?: number;
  height?: number;
  color?: string;
}) {
  if (!name) {
    return null;
  }

  return (
    <i
      className={`ti ti-${name}`}
      style={{ width: width || 22, height: height || 22, color: color }}
    />
  );
}
