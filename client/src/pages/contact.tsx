import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Get in touch with us to discuss your virtual tour needs.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-sm text-destructive">{errors.name.message}</span>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-destructive">{errors.email.message}</span>
            )}
          </div>

          <div>
            <Input
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <span className="text-sm text-destructive">{errors.subject.message}</span>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Message"
              className="min-h-[150px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-sm text-destructive">{errors.message.message}</span>
            )}
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-muted-foreground">info@virtualspace.com</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}