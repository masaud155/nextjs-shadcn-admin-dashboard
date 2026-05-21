"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PRIORITIES, TASK_STATUSES } from "@/lib/constants";
import { taskSchema } from "@/lib/validations";

export function TaskForm({ onSuccess }) {
  const form = useForm({ resolver: zodResolver(taskSchema), defaultValues: { title: "", description: "", status: "Todo", priority: "Medium", dueDate: "" } });
  function onSubmit(values) {
    toast.success(`${values.title} added.`);
    onSuccess?.(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="title" render={({ field }) => <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage name="title" /></FormItem>} />
        <FormField control={form.control} name="description" render={({ field }) => <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage name="description" /></FormItem>} />
        <div className="grid gap-4 sm:grid-cols-3">
          <FormField control={form.control} name="status" render={({ field }) => <FormItem><FormLabel>Status</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{TASK_STATUSES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select><FormMessage name="status" /></FormItem>} />
          <FormField control={form.control} name="priority" render={({ field }) => <FormItem><FormLabel>Priority</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{PRIORITIES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select><FormMessage name="priority" /></FormItem>} />
          <FormField control={form.control} name="dueDate" render={({ field }) => <FormItem><FormLabel>Due date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage name="dueDate" /></FormItem>} />
        </div>
        <Button type="submit" className="w-full">Add task</Button>
      </form>
    </Form>
  );
}
