"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PRIORITIES, PROJECT_STATUSES } from "@/lib/constants";
import { projectSchema } from "@/lib/validations";

export function ProjectForm({ onSuccess }) {
  const form = useForm({ resolver: zodResolver(projectSchema), defaultValues: { title: "", description: "", status: "Planning", priority: "Medium", deadline: "" } });
  function onSubmit(values) {
    toast.success(`${values.title} created.`);
    onSuccess?.(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="title" render={({ field }) => <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage name="title" /></FormItem>} />
        <FormField control={form.control} name="description" render={({ field }) => <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage name="description" /></FormItem>} />
        <div className="grid gap-4 sm:grid-cols-3">
          <FormField control={form.control} name="status" render={({ field }) => <FormItem><FormLabel>Status</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{PROJECT_STATUSES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select><FormMessage name="status" /></FormItem>} />
          <FormField control={form.control} name="priority" render={({ field }) => <FormItem><FormLabel>Priority</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{PRIORITIES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select><FormMessage name="priority" /></FormItem>} />
          <FormField control={form.control} name="deadline" render={({ field }) => <FormItem><FormLabel>Deadline</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage name="deadline" /></FormItem>} />
        </div>
        <Button type="submit" className="w-full">Create project</Button>
      </form>
    </Form>
  );
}
