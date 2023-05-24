"use client";

import NinetailedPreviewPlugin from "@ninetailed/experience.js-plugin-preview";
import { NinetailedProvider } from "@ninetailed/experience.js-react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NinetailedProvider
      clientId={process.env.NEXT_PUBLIC_NINETAILED_CLIENT_ID || ""}
      environment={process.env.NEXT_PUBLIC_NINETAILED_ENVIRONMENT || ""}
      plugins={[
        new NinetailedPreviewPlugin({
          clientId:
            process.env.NEXT_PUBLIC_NINETAILED_MANAGEMENT_CLIENT_ID ?? "",
          secret: process.env.NEXT_PUBLIC_NINETAILED_MANAGEMENT_SECRET ?? "",
          environment: process.env.NEXT_PUBLIC_NINETAILED_ENVIRONMENT ?? "main",
        }),
      ]}
    >
      {children}
    </NinetailedProvider>
  );
}
