import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration Settings
 * 
 * Replace these credentials with your actual EmailJS keys from https://dashboard.emailjs.com/
 * Or set them in a .env file:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_4scuzvp',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7f7qaao',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '33e0X5mqX7JoXvgIS',
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Sends a contact form message using EmailJS
 * 
 * @param formData - The form fields filled out by the user (name, email, subject, message)
 * @returns Promise<EmailResponse> - Status of email transmission
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'corexathon@gmail.com',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been transmitted successfully!'
      };
    } else {
      return {
        success: false,
        message: `Failed to send email. Status code: ${response.status}`
      };
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: error?.text || error?.message || 'An unexpected error occurred while sending email.'
    };
  }
};
