import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface State {
  hasError: boolean;
}

interface ErrorFallbackProps {
  onReset: () => void;
}

const ErrorFallback = ({ onReset }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-background" role="alert">
      <div className="container mx-auto px-4">
        <Card className="border border-divider max-w-2xl mx-auto" shadow="md">
          <CardBody className="p-8 md:p-12 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-danger/10 mb-6 mx-auto">
              <Icon icon="lucide:alert-triangle" className="text-danger text-3xl md:text-4xl" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {t("errors.boundary.title")}
            </h1>
            <p className="text-default-600 text-base md:text-lg mb-8 max-w-md mx-auto">
              {t("errors.boundary.description")}
            </p>
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              startContent={<Icon icon="lucide:refresh-cw" />}
              className="font-medium"
              onPress={onReset}
            >
              {t("errors.boundary.reload")}
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

/**
 * Captura erros de renderização das páginas filhas e renderiza um fallback.
 * Não captura erros assíncronos nem em event handlers (limitação do React).
 */
export class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error("[ErrorBoundary]", error, info);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    window.location.hash = "#home";
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />;
    }
    return this.props.children;
  }
}
