import React from "react";
    
    export interface ValidationRules {
      required?: boolean;
      email?: boolean;
      minLength?: number;
      maxLength?: number;
      pattern?: RegExp;
      custom?: (value: any) => boolean;
    }
    
    export interface ValidationErrors {
      [key: string]: string;
    }
    
    export interface ErrorMessages {
      [key: string]: string;
    }
    
    export interface FormValidationReturn<T> {
      formData: T;
      errors: ValidationErrors;
      isSubmitting: boolean;
      isSubmitted: boolean;
      handleChange: (field: keyof T, value: any) => void;
      validateForm: () => boolean;
      validateField: (field: keyof T) => boolean;
      setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
      setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
      resetForm: () => void;
    }
    
    /**
     * Custom hook for form validation
     * @param initialState Initial form data
     * @param validationRules Rules for validation
     * @param errorMessages Custom error messages
     * @returns Form validation utilities
     */
    export function useFormValidation<T extends Record<string, any>>(
      initialState: T,
      validationRules: Record<keyof T, ValidationRules>,
      errorMessages: ErrorMessages
    ): FormValidationReturn<T> {
      const [formData, setFormData] = React.useState<T>(initialState);
      const [errors, setErrors] = React.useState<ValidationErrors>({});
      const [isSubmitting, setIsSubmitting] = React.useState(false);
      const [isSubmitted, setIsSubmitted] = React.useState(false);
      
      const validateField = React.useCallback((field: keyof T): boolean => {
        const value = formData[field];
        const rules = validationRules[field];
        
        if (!rules) return true;
        
        if (rules.required && (value === undefined || value === null || value === '')) {
          const errorKey = `${String(field)}Required`;
          setErrors(prev => ({
            ...prev,
            [field]: errorMessages[errorKey] || `${String(field)} is required`
          }));
          return false;
        }
        
        if (rules.email && value && !/^\S+@\S+\.\S+$/.test(String(value))) {
          const errorKey = `${String(field)}Invalid`;
          setErrors(prev => ({
            ...prev,
            [field]: errorMessages[errorKey] || `${String(field)} is not a valid email`
          }));
          return false;
        }
        
        if (rules.minLength && value && String(value).length < rules.minLength) {
          const errorKey = `${String(field)}MinLength`;
          setErrors(prev => ({
            ...prev,
            [field]: errorMessages[errorKey] || `${String(field)} must be at least ${rules.minLength} characters`
          }));
          return false;
        }
        
        if (rules.maxLength && value && String(value).length > rules.maxLength) {
          const errorKey = `${String(field)}MaxLength`;
          setErrors(prev => ({
            ...prev,
            [field]: errorMessages[errorKey] || `${String(field)} must be at most ${rules.maxLength} characters`
          }));
          return false;
        }
        
        if (rules.pattern && value && !rules.pattern.test(String(value))) {
          const errorKey = `${String(field)}Pattern`;
          setErrors(prev => ({
            ...prev,
            [field]: errorMessages[errorKey] || `${String(field)} does not match the required pattern`
          }));
          return false;
        }
        
        if (rules.custom && !rules.custom(value)) {
          const errorKey = `${String(field)}Invalid`;
          setErrors(prev => ({
            ...prev,
            [field]: errorMessages[errorKey] || `${String(field)} is invalid`
          }));
          return false;
        }
        
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field as string];
          return newErrors;
        });
        
        return true;
      }, [formData, validationRules, errorMessages]);
      
      const validateForm = React.useCallback((): boolean => {
        let isValid = true;
        
        Object.keys(validationRules).forEach(field => {
          const fieldIsValid = validateField(field as keyof T);
          if (!fieldIsValid) {
            isValid = false;
          }
        });
        
        return isValid;
      }, [validateField, validationRules]);
      
      const handleChange = React.useCallback((field: keyof T, value: any) => {
        setFormData(prev => ({
          ...prev,
          [field]: value
        }));
        
        if (errors[field as string]) {
          validateField(field);
        }
      }, [errors, validateField]);
      
      const resetForm = React.useCallback(() => {
        setFormData(initialState);
        setErrors({});
        setIsSubmitting(false);
        setIsSubmitted(false);
      }, [initialState]);
      
      return {
        formData,
        errors,
        isSubmitting,
        isSubmitted,
        handleChange,
        validateForm,
        validateField,
        setIsSubmitting,
        setIsSubmitted,
        resetForm
      };
    }