"use client";

import { Skeleton, useComputedColorScheme } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RillaFullLogo({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  let logoSrc = "/rilla-logo-black.png";

  switch (computedColorScheme) {
    case "dark":
      logoSrc = "/rilla-logo-white.png";
      break;
    case "light":
      logoSrc = "/rilla-logo-black.png";
      break;
    default:
      logoSrc = "/rilla-logo-black.png";
  }

  if (!hasMounted) {
    return (
      <Skeleton height={height || 40} width={width || 120} />
    );
  }

  return (
    <Image
      src={logoSrc}
      width={width || 120}
      height={height || 40}
      priority
      style={{ objectFit: "contain" }}
      alt="Rilla Full Logo"
    />
  );
}
