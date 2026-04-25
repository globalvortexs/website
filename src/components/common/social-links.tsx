import { memo } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { SOCIAL_LINKS } from "../../utils/constants";

interface SocialItem {
  key: keyof typeof SOCIAL_LINKS;
  icon: string;
  label: string;
}

const ITEMS: SocialItem[] = [
  { key: "linkedin", icon: "lucide:linkedin", label: "LinkedIn" },
  { key: "twitter", icon: "lucide:twitter", label: "Twitter" },
  { key: "facebook", icon: "lucide:facebook", label: "Facebook" },
  { key: "instagram", icon: "lucide:instagram", label: "Instagram" },
];

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const SocialLinks = memo(({ size = "sm", className = "flex gap-4 md:gap-5" }: SocialLinksProps) => (
  <div className={className}>
    {ITEMS.map((item) => (
      <Button
        key={item.key}
        isIconOnly
        variant="flat"
        aria-label={item.label}
        size={size}
        className="rounded-full"
        as="a"
        href={SOCIAL_LINKS[item.key]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={item.icon} className="text-lg" />
      </Button>
    ))}
  </div>
));

SocialLinks.displayName = "SocialLinks";
