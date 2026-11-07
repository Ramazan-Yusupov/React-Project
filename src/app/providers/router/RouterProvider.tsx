import { BrowserRouter } from "react-router";

import type { ReactNode } from "react";

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
