import { getSession, getUsers } from "@/actions";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function AdminPage() {
  const session = await getSession();

  if (session && session.role === "ADMIN") {
    const users = await getUsers();

    const userRole = session.role.toString();
    const userName = session.username?.toString();

    return (
      <div className="flex gap-2">
        <div className="flex items-center gap-2 h-screen">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50">
              <Card className="w-full h-full text-center">
                <CardHeader>
                  <CardTitle className="text-4xl">Total Users</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50" />
            <div className="aspect-video rounded-xl bg-zinc-100/50 dark:bg-zinc-800/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-zinc-100/50 md:min-h-min dark:bg-zinc-800/50" />
        </div>
      </div>
    );
  } else {
    redirect("/login");
  }
}
