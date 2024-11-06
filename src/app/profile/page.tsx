import { getSession } from "@/actions";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  const role = session.role;


  return (

      <main className="flex gap-4 h-screen overflow-hidden">
        <Sidebar/>
        <div className="text-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 w-full overflow-hidden">
          <h1 className="mx-auto items-center text-center w-full"> Welcome {(session.username)?.toUpperCase()}</h1>
            {role === "ADMIN" &&
                <span>
                  <p>Role :</p>
                  <p>{role}</p>
                </span>
            }
            {role === "USER" &&
                <span className="flex gap-2">
                  <p>Role :</p>
                  <p>{role}</p>
                </span>}
        </div>
      </main>

  );
}

export default ProfilePage;
