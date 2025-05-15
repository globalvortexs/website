import React from "react";
import { Input, Textarea, Button, Checkbox, Alert } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useFormValidation } from "../../lib/hooks/use-form-validation";
import api from "../../lib/services/email";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
}

export const ContactForm = () => {
  const { t } = useTranslation();
  
  const errorMessages = React.useMemo(() => ({
    nameRequired: t('contact.form.errors.nameRequired', 'Name is required'),
    emailRequired: t('contact.form.errors.emailRequired', 'Email is required'),
    emailInvalid: t('contact.form.errors.emailInvalid', 'Email is invalid'),
    messageRequired: t('contact.form.errors.messageRequired', 'Message is required'),
    consentInvalid: t('contact.form.errors.consentRequired', 'You must agree to the terms')
  }), [t]);

  const initialFormState: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false
  };

  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    validateForm,
    setIsSubmitting,
    setIsSubmitted,
    resetForm
  } = useFormValidation<ContactFormData>(
    initialFormState,
    {
      name: { required: true },
      email: { required: true, email: true },
      phone: {},
      company: {},
      message: { required: true, minLength: 10 },
      consent: { custom: value => value === true }
    },
    errorMessages
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar o email com os dados do formulário
      await sendEmail();
      
      // Se o envio for bem-sucedido, atualize os estados
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (error) {
      console.error("Erro ao processar o formulário:", error);
      setIsSubmitting(false);
      // Aqui você pode adicionar um estado para mostrar uma mensagem de erro
      // Por exemplo: setSubmissionError(true);
    }
  };

  async function sendEmail() {
    try {
      // Formatando a data para exibição
      const submittedAt = new Date().toLocaleString();
      
      // Criando o objeto de dados para enviar o email no formato exato que a API SMTP2GO espera
      const emailData = {
        api_key: import.meta.env.VITE_SMTP2GO_API_KEY,
        to: [`Global Vortex - Website <${import.meta.env.VITE_EMAIL_CONTACT}>`],
        sender: `Global Vortex - Website <${import.meta.env.VITE_EMAIL_CONTACT}>`,
        template_id: "7468142",
        template_data: {
          fullName: formData.name,
          email: formData.email, 
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          message: formData.message,
          submittedAt: submittedAt
        }
      };
      
      const response = await api.post('/email/send', emailData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <Alert 
          title={t('contact.form.success.title')}
          description={t('contact.form.success.message')}
          color="success"
          variant="bordered"
          className="mb-4"
        />
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
          <Icon icon="lucide:check" className="text-success text-2xl" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{t('contact.form.success.title')}</h3>
        <p className="text-default-600">
          {t('contact.form.success.message')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl md:text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label={t('contact.form.fullName')}
          placeholder={t('contact.form.fullName')}
          value={formData.name}
          onValueChange={(value) => handleChange("name", value)}
          isRequired
          variant="bordered"
          size="md"
          isInvalid={!!errors.name}
          errorMessage={errors.name}
          startContent={<Icon icon="lucide:user" className="text-default-400 text-lg" />}
        />
        
        <Input
          label={t('contact.form.email')}
          placeholder={t('contact.form.email')}
          type="email"
          value={formData.email}
          onValueChange={(value) => handleChange("email", value)}
          isRequired
          variant="bordered"
          size="md"
          isInvalid={!!errors.email}
          errorMessage={errors.email}
          startContent={<Icon icon="lucide:mail" className="text-default-400 text-lg" />}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label={t('contact.form.phone')}
          placeholder={t('contact.form.phone')}
          value={formData.phone}
          onValueChange={(value) => handleChange("phone", value)}
          variant="bordered"
          size="md"
          startContent={<Icon icon="lucide:phone" className="text-default-400 text-lg" />}
        />
        
        <Input
          label={t('contact.form.company')}
          placeholder={t('contact.form.company')}
          value={formData.company}
          onValueChange={(value) => handleChange("company", value)}
          variant="bordered"
          size="md"
          startContent={<Icon icon="lucide:briefcase" className="text-default-400 text-lg" />}
        />
      </div>
      
      <div>
        <Textarea
          label={t('contact.form.message')}
          placeholder={t('contact.form.messagePlaceholder')}
          value={formData.message}
          onValueChange={(value) => handleChange("message", value)}
          isRequired
          variant="bordered"
          minRows={4}
          size="md"
          isInvalid={!!errors.message}
          errorMessage={errors.message}
        />
      </div>
      
      <div>
        <Checkbox
          isSelected={formData.consent}
          onValueChange={(value) => handleChange("consent", value)}
          isRequired
          size="md"
          isInvalid={!!errors.consent}
        >
          <span className="text-sm text-default-600">
            {t('contact.form.consent')}
          </span>
        </Checkbox>
        {errors.consent && (
          <p className="text-danger text-xs mt-1">{errors.consent}</p>
        )}
      </div>
      
      <Button
        type="submit"
        color="primary"
        className="w-full"
        size="lg"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
        startContent={!isSubmitting && <Icon icon="lucide:send" />}
      >
        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
      </Button>
    </form>
  );
};