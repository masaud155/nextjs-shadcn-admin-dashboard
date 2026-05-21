import { ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { SettingsForm } from "@/components/forms/settings-form";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <DashboardShell>
      <PageHeader title="Settings" description="Tune profile, notification, security, and workspace preferences." />
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader><CardTitle>Profile settings</CardTitle><CardDescription>Update the account details shown across your dashboard.</CardDescription></CardHeader>
          <CardContent><SettingsForm /></CardContent>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Appearance</CardTitle><CardDescription>Switch between light and dark mode.</CardDescription></CardHeader>
            <CardContent className="flex items-center justify-between"><span className="text-sm font-medium">Theme</span><ThemeToggle /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Notifications</CardTitle><CardDescription>Control workspace updates.</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              {["Product updates", "Billing alerts", "Weekly summary"].map((item) => <div key={item} className="flex items-center justify-between"><Label>{item}</Label><Switch defaultChecked /></div>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Security</CardTitle><CardDescription>Protect workspace access.</CardDescription></CardHeader>
            <CardContent className="space-y-3"><Button variant="outline" className="w-full">Configure 2FA</Button><Button variant="outline" className="w-full">Review sessions</Button></CardContent>
          </Card>
          <Card className="border-destructive/40">
            <CardHeader><CardTitle className="flex items-center gap-2 text-destructive"><ShieldAlert className="h-5 w-5" /> Danger zone</CardTitle><CardDescription>Destructive workspace actions.</CardDescription></CardHeader>
            <CardContent><Separator className="mb-4" /><Button variant="destructive" className="w-full">Delete workspace</Button></CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
