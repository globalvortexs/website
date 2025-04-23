import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const languages = [
    { code: 'en', name: 'English', icon: 'logos:usa-flag' },
    { code: 'pt', name: 'Português', icon: 'logos:brazil-flag' }
  ];
  
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="flat" 
          isIconOnly
          aria-label="Change Language"
          className="bg-default-100 relative overflow-hidden"
          size="sm"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <Icon icon="lucide:languages" className="text-primary-500" />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language Selection">
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            startContent={<Icon icon={lang.icon} className="text-xl" />}
            onPress={() => handleLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? "text-primary font-medium" : ""}
            description={currentLanguage === lang.code ? "Current" : ""}
          >
            {lang.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};