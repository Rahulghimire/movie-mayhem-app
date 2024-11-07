import { AddDrawer } from "@/pages/movieNight/Drawer";
import { MovieNightList } from "@/pages/movieNight/ui/MovieNightList";
import { Link } from "react-router-dom";

export const AppHeader: React.FC = () => {
  return (
    <div className="bg-slate-400">
      <header className="p-1 md:p-4">
        <div className="flex justify-between">
          <div className="font-bold italic text-lg">
            <Link to="/" className="font-bold italic text-[#fff] text-lg">
              Movie Night Mayhem
            </Link>
          </div>
          <div className="flex gap-x-2">
            <AddDrawer />
            <MovieNightList />
          </div>
        </div>
      </header>
    </div>
  );
};
