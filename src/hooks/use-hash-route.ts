import { useEffect, useState } from "react";

/**
 * Hook simples de roteamento baseado em hash.
 *
 *  - Hash começando com `#/`  -> rota de página (ex.: `#/produto/nucleus`)
 *  - Hash sem prefixo `/`     -> âncora dentro da home (ex.: `#products`)
 *
 * Ambas as formas convivem: o navegador continua rolando para âncoras
 * normalmente, e o roteador identifica páginas pelo prefixo `#/`.
 */
export interface HashRoute {
  hash: string;
  path: string | null;
  segments: string[];
}

const parseHash = (hash: string): HashRoute => {
  const isRoute = hash.startsWith("#/");
  const path = isRoute ? hash.slice(1) : null;
  const segments = path ? path.split("/").filter(Boolean) : [];
  return { hash, path, segments };
};

export const useHashRoute = (): HashRoute => {
  const [route, setRoute] = useState<HashRoute>(() =>
    parseHash(typeof window !== "undefined" ? window.location.hash : "")
  );

  useEffect(() => {
    const handleHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route;
};
