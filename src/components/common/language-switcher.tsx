import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: "en", name: "English", icon: "circle-flags:us" },
    { code: "pt", name: "Português", icon: "circle-flags:br" },
    { code: "es", name: "Español", icon: "circle-flags:es" }
  ];
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          isIconOnly 
          aria-label="Language"
          className="text-default-500"
        >
          <Icon icon={currentLanguage.icon} className="text-lg" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection">
        {languages.map((language) => (
          <DropdownItem
            key={language.code}
            startContent={<Icon icon={language.icon} />}
            onPress={() => handleLanguageChange(language.code)}
            className={i18n.language === language.code ? "text-primary" : ""}
          >
            {language.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};