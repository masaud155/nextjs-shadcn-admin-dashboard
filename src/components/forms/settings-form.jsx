"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { settingsSchema } from "@/lib/validations";

export function SettingsForm() {
  const form = useForm({ resolver: zodResolver(settingsSchema), defaultValues: { name: "Maya Patel", email: "maya@example.com", company: "Northstar Labs", timezone: "Asia/Karachi" } });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => toast.success("Settings saved."))} className="space-y-4">
        {["name", "email", "company", "timezone"].map((name) => (
          <FormField key={name} control={form.control} name={name} render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{name}</FormLabel>
              <FormControl><Input type={name === "email" ? "email" : "text"} {...field} /></FormControl>
              <FormMessage name={name} />
            </FormItem>
          )} />
        ))}
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
}
