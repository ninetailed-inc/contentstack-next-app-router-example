"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNinetailed } from "@ninetailed/experience.js-react";

export default function TrackPage() {
  const pathname = usePathname();
  const { page } = useNinetailed();

  useEffect(() => {
    console.log(pathname);
    page();
  }, [pathname]);

  return null;
}
