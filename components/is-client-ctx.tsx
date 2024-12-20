// Yoinked from https://stackoverflow.com/a/75692565/6335363
"use client"
import { createContext, useContext, useEffect, useState } from "react";

const IsClientCtx = createContext(false);

export const IsClientCtxProvider = ({ children }: { children: any }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}
