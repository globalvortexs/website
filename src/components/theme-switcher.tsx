import React from 'react';
import { useTheme } from "@heroui/use-theme";
import { Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <Tooltip content={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <Button 
        isIconOnly 
        variant="flat" 
        onPress={toggleTheme}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="bg-default-100"
        size="sm"
      >
        {isDark ? (
          <Icon icon="lucide:sun" className="text-amber-500" />
        ) : (
          <Icon icon="lucide:moon" className="text-primary-500" />
        )}
      </Button>
    </Tooltip>
  );
};