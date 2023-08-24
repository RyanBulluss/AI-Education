import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import { Menu } from "lucide-react";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav
      className="w-full z-50 flex justify-between items-center py-2 px-4 border-b
      border-fifth/0 bg-third h-16 fixed inset-y-0"
    >
      <div className="flex items-center">
        <Menu className="block md:hidden hover:bg-fifth rounded-xl" />
        <Link className="hidden md:block text-3xl font-bold hover:bg-fifth p-1 rounded-xl" to="/">AI University</Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Link className="hover:bg-fifth p-1 rounded-xl" to="" onClick={handleLogOut}>Log Out</Link>
        <div className="h-9 w-9 overflow-hidden rounded-full border border-black ">
          <img src={user.image} alt="profile picture" />
        </div>
        
      </div>
    </nav>
  );
}
