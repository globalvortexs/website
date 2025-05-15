import React from "react";
import { Icon } from "@iconify/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  taglineIcon?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  tagline,
  taglineIcon,
  centered = true
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {tagline && (
        <div className={`inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium ${centered ? 'mx-auto' : ''}`}>
          {taglineIcon && <Icon icon={taglineIcon} className="mr-2" size={16} />}
          {tagline}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-default-600 text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};