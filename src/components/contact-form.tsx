'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/contact/actions';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && Object.keys(state.errors ?? {}).length === 0) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
      const errorMessages = Object.values(state.errors ?? {}).flat().join(' ');
      toast({
        variant: "destructive",
        title: 'Submission Error',
        description: `${state.message} ${errorMessages}`,
      });
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
        {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input id="company" name="company" placeholder="Your Company" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
        {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can we partner with you?" rows={5} required />
        {state?.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>

      <Button type="submit" className="w-full" size="lg">
        Submit Inquiry
      </Button>
    </form>
  );
}
