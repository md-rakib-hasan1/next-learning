
import {Home,Search,User} from "lucide-react"
const Navbar = () => {
  return (
    <nav className="flex w-full justify-between bg-gray-500 items-center gap-6 p-4">
      <div className="flex items-center gap-2">
        <Home size={20} />
        <span>Home</span>
      </div>

      <div className="flex items-center gap-2">
        <Search size={20} className="text-white" />
        <span className="text-white">Search</span>
      </div>

      <div className="flex items-center gap-2">
        <User size={20} className="text-blue-600" />
        <span className="text-white">Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;