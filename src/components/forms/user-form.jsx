"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { USER_ROLES, USER_STATUSES } from "@/lib/constants";
import { userSchema } from "@/lib/validations";

export function UserForm({ onSuccess }) {
  const form = useForm({ resolver: zodResolver(userSchema), defaultValues: { name: "", email: "", role: "Developer", status: "Active", department: "" } });
  function onSubmit(values) {
    toast.success(`${values.name} has been added.`);
    onSuccess?.(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {["name", "email", "department"].map((name) => (
          <FormField key={name} control={form.control} name={name} render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">{name}</FormLabel>
              <FormControl><Input type={name === "email" ? "email" : "text"} {...field} /></FormControl>
              <FormMessage name={name} />
            </FormItem>
          )} />
        ))}
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField control={form.control} name="role" render={({ field }) => (
            <FormItem><FormLabel>Role</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{USER_ROLES.map((role) => <SelectItem key={role} value={role}>{role}</SelectItem>)}</SelectContent></Select><FormMessage name="role" /></FormItem>
          )} />
          <FormField control={form.control} name="status" render={({ field }) => (
            <FormItem><FormLabel>Status</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{USER_STATUSES.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}</SelectContent></Select><FormMessage name="status" /></FormItem>
          )} />
        </div>
        <Button type="submit" className="w-full">Save user</Button>
      </form>
    </Form>
  );
}
