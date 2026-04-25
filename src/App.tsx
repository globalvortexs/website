import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { ErrorBoundary, Footer, Navbar, PageLoader } from "./components/layout";
import { useHashRoute } from "./hooks/use-hash-route";
import { HomePage } from "./pages/home";

// Páginas secundárias entram em chunks separados (code splitting).
// Home é a rota principal e fica no bundle inicial para minimizar TTI.
const ProductDetailPage = lazy(() => import("./pages/product-detail"));
const ProductNotFoundPage = lazy(() => import("./pages/product-not-found"));
const ProductCNAB240Page = lazy(() => import("./pages/product-cnab240"));

const renderRoute = (segments: string[]) => {
  if (segments[0] === "produto") {
    const slug = segments[1];
    if (!slug) return <ProductNotFoundPage />;
    if (slug === "cnab240") return <ProductCNAB240Page />;
    return <ProductDetailPage slug={slug} />;
  }
  return <HomePage />;
};

export default function App() {
  const { t } = useTranslation();
  const { segments } = useHashRoute();
  const isRoutedPage = segments.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
        {t("nav.skipToContent")}
      </a>

      <Navbar />

      <main id="main-content" className="overflow-x-hidden">
        <ErrorBoundary>
          {isRoutedPage ? (
            <Suspense fallback={<PageLoader />}>{renderRoute(segments)}</Suspense>
          ) : (
            renderRoute(segments)
          )}
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}
