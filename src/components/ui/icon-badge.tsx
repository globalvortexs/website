import React from "react";
import { Icon } from "@iconify/react";

interface IconBadgeProps {
  icon: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon,
  color = "primary",
  size = "md"
}) => {
  const sizeClasses = {
    sm: "p-1.5 text-lg",
    md: "p-2 text-xl",
    lg: "p-3 text-2xl"
  };

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger"
  };

  return (
    <div className={`rounded-lg w-fit ${sizeClasses[size]} ${colorClasses[color]}`}>
      <Icon icon={icon} />
    </div>
  );
};