import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();

  console.log(session); // checking session

    const isAdmin = session.role === "ADMIN";
    const isUser = session.role === "USER";

  return (
    <nav className="flex flex-col gap-4 w-[200px] h-screen overflow-hidden border-r rounded-r-lg bg-gray-900">
        <div className="mt-4 px-4">
            <h1 className="text-4xl mt-4 p-2 tracking-wider">Afford Motors</h1>
        </div>
        <div className="w-[80%] h-[0.5px] bg-white mt-4 px-1 relative left-[9%]"></div>
        <div className="mt-16 flex flex-col justify-between h-full" >
            <div className="flex flex-col mt-4 gap-4 ">
                <Link href={"/"} className="hover:bg-white hover:text-black hover:rounded-lg hover:transition hover:ease-in-out hover:duration-500 text-center font-bold text-2xl ">Home</Link>
                <Link href={"/profile"} className="hover:bg-white hover:text-black hover:rounded-lg hover:transition hover:ease-in-out hover:duration-500 text-center font-bold text-2xl ">Profile</Link>
                {isAdmin && <Link href={"/admin"} className="hover:bg-white hover:text-black hover:rounded-lg hover:transition hover:ease-in-out hover:duration-500 text-center font-bold text-2xl ">Dashboard</Link>}
                {isUser && <Link href={"/user"} className="hover:bg-white hover:text-black hover:rounded-lg hover:transition hover:ease-in-out hover:duration-500 text-center font-bold text-2xl ">Dashboard</Link>}
            </div>
            <div className="">
                {!session.isLoggedIn && <Link href={"/login"}><button className="m-2 p-2 rounded-lg bg-purple-600">Login</button></Link>}
                {session.isLoggedIn &&
                    <div className="mx-4 mb-4 items-center text-center flex flex-col gap-4">
                         <p className="text-2xl font-sans tracking-tight">{(session.username)?.toUpperCase()}</p>
                        <LogoutForm />
                    </div>}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
