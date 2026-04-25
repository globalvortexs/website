/**
 * Helpers de navegação por âncora.
 *
 * O projeto usa duas formas de hash:
 *  - `#anchor`            -> rola até a seção da home
 *  - `#/produto/:slug`    -> rota de página
 *
 * Quando o usuário está em uma rota (`#/`) e clica em uma âncora, a
 * âncora ainda não existe no DOM. Trocamos o hash, esperamos o re-render
 * da Home e então fazemos o scroll suave.
 */
export const scrollToAnchor = (id: string) => {
  if (window.location.hash.startsWith("#/")) {
    window.location.hash = `#${id}`;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
};
