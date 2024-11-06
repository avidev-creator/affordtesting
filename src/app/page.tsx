import { getSession } from "@/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (session.isLoggedIn) {
    return (
      <main className="flex gap-4 h-screen w-screen overflow-hidden">
        <div></div>
        <div className="text-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full overflow-hidden">
          <h1 className="mx-auto items-center text-center w-full">
            {" "}
            Welcome to Afford Motors
          </h1>
        </div>
      </main>
    );
  }

  redirect("/login");
}
