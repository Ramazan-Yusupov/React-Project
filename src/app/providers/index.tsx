import type { ReactNode } from "react";

import { ThemeProvider } from "./theme/ThemeProvider";
import { RouterProvider } from "./router/RouterProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <RouterProvider>{children}</RouterProvider>
    </ThemeProvider>
  );
}
