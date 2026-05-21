"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginSchema, registerSchema } from "@/lib/validations";

export function AuthForm({ mode = "login" }) {
  const isRegister = mode === "register";
  const form = useForm({ resolver: zodResolver(isRegister ? registerSchema : loginSchema), defaultValues: { name: "", email: "", password: "" } });
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{isRegister ? "Create your workspace" : "Welcome back"}</CardTitle>
        <CardDescription>{isRegister ? "Start with a polished dashboard foundation." : "Sign in to continue to your admin console."}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full"><Github className="h-4 w-4" /> Continue with GitHub</Button>
        <div className="flex items-center gap-3"><Separator className="flex-1" /><span className="text-xs text-muted-foreground">or</span><Separator className="flex-1" /></div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => toast.success(isRegister ? "Workspace created." : "Signed in."))} className="space-y-4">
            {isRegister ? <FormField control={form.control} name="name" render={({ field }) => <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage name="name" /></FormItem>} /> : null}
            <FormField control={form.control} name="email" render={({ field }) => <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage name="email" /></FormItem>} />
            <FormField control={form.control} name="password" render={({ field }) => <FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage name="password" /></FormItem>} />
            <Button type="submit" className="w-full">{isRegister ? "Create account" : "Sign in"}</Button>
          </form>
        </Form>
        <p className="text-center text-sm text-muted-foreground">
          {isRegister ? "Already have an account? " : "New here? "}
          <Link href={isRegister ? "/login" : "/register"} className="font-medium text-primary">{isRegister ? "Sign in" : "Create an account"}</Link>
        </p>
      </CardContent>
    </Card>
  );
}
