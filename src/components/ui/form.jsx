"use client";

import * as React from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;
const FormField = Controller;

const FormItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef(({ className, ...props }, ref) => (
  <Label ref={ref} className={cn(className)} {...props} />
));
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef(({ ...props }, ref) => <div ref={ref} {...props} />);
FormControl.displayName = "FormControl";

function FormDescription({ className, ...props }) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

function FormMessage({ className, name, ...props }) {
  const form = useFormContext();
  const error = name ? form.formState.errors?.[name] : null;
  const body = error ? String(error.message) : props.children;
  if (!body) return null;
  return <p className={cn("text-sm font-medium text-destructive", className)} {...props}>{body}</p>;
}

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage };
