import React from "react";
import { Input, Textarea, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          consent: false
        });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
          <Icon icon="lucide:check" className="text-success text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{t('contact.form.success.title')}</h3>
        <p className="text-default-600">
          {t('contact.form.success.message')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label={t('contact.form.fullName')}
          placeholder={t('contact.form.fullName')}
          value={formData.name}
          onValueChange={(value) => handleChange("name", value)}
          isRequired
          variant="bordered"
        />
        
        <Input
          label={t('contact.form.email')}
          placeholder={t('contact.form.email')}
          type="email"
          value={formData.email}
          onValueChange={(value) => handleChange("email", value)}
          isRequired
          variant="bordered"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label={t('contact.form.phone')}
          placeholder={t('contact.form.phone')}
          value={formData.phone}
          onValueChange={(value) => handleChange("phone", value)}
          variant="bordered"
        />
        
        <Input
          label={t('contact.form.company')}
          placeholder={t('contact.form.company')}
          value={formData.company}
          onValueChange={(value) => handleChange("company", value)}
          variant="bordered"
        />
      </div>
      
      <div className="mb-6">
        <Textarea
          label={t('contact.form.message')}
          placeholder={t('contact.form.messagePlaceholder')}
          value={formData.message}
          onValueChange={(value) => handleChange("message", value)}
          isRequired
          variant="bordered"
          minRows={4}
        />
      </div>
      
      <div className="mb-8">
        <Checkbox
          isSelected={formData.consent}
          onValueChange={(value) => handleChange("consent", value)}
          isRequired
        >
          <span className="text-sm text-default-600">
            {t('contact.form.consent')}
          </span>
        </Checkbox>
      </div>
      
      <Button
        type="submit"
        color="primary"
        className="w-full"
        size="lg"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
      >
        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
      </Button>
    </form>
  );
};