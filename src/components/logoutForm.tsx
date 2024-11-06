import { logout } from "@/actions";
import { LogOutIcon } from "lucide-react";

const LogoutForm = () => {
  return (
    <div>
      <form
        action={logout}
        className="flex items-center gap-2 bg-purple-500 rounded-lg px-2 hover:bg-blue-500"
      >
        <LogOutIcon />
        <button className="m-2 p-2">Logout</button>
      </form>
    </div>
  );
};

export default LogoutForm;
