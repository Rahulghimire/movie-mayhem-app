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
          <div>2</div>
        </div>
      </header>
    </div>
  );
};
