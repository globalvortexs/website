import { Spinner } from "@heroui/react";

export const PageLoader = () => (
  <div
    className="flex items-center justify-center py-32 min-h-[60vh]"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <Spinner size="lg" color="primary" />
  </div>
);
