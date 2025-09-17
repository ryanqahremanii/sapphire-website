'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type State = {
  errors?: {
    name?: string[];
    company?: string[];
    email?: string[];
    message?: string[];
  } | null;
  message?: string | null;
};

export async function submitContactForm(prevState: State, formData: FormData) : Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }
  
  // For this demo, we'll just log the data and simulate a successful submission.
  // In a real application, you would send an email or save the data to a database here.
  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    errors: null,
  };
}
