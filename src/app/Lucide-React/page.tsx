import { Heart, Search,User } from "lucide-react";
const HomePage = () => {
    return (
        <div className="flex gap-4 p-6">
            <Heart className="w-8 h-8 text-red-500"/>
            <Search/>
            <User/> <br /><br />

            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
                <Search size={18}/>
                Search
            </button>

            
        </div>
    );
};

export default HomePage;