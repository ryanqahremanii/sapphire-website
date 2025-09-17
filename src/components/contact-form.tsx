
'use client';

import { useState, type FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function ContactForm() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<{ [key: string]: string[] | undefined }>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    const validatedFields = contactSchema.safeParse({
      name: formObject.name,
      company: formObject.company,
      email: formObject.email,
      message: formObject.message,
    });

    if (!validatedFields.success) {
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      toast({
        variant: "destructive",
        title: 'Submission Error',
        description: 'Please correct the errors below.',
      });
      return;
    }
    
    setErrors({});
    
    // For this demo, we'll just log the data and simulate a successful submission.
    // In a real application, you would send this to a backend API or a third-party service.
    console.log('Contact form submitted:', validatedFields.data);

    toast({
      title: 'Message Sent!',
      description: 'Thank you for your message! We will get back to you shortly.',
    });

    (event.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
        {errors?.name && <p className="text-sm text-destructive">{errors.name[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input id="company" name="company" placeholder="Your Company" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
        {errors?.email && <p className="text-sm text-destructive">{errors.email[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can we partner with you?" rows={5} required />
        {errors?.message && <p className="text-sm text-destructive">{errors.message[0]}</p>}
      </div>

      <Button type="submit" className="w-full" size="lg">
        Submit Inquiry
      </Button>
    </form>
  );
}
