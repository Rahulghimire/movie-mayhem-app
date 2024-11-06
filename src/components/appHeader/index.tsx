import { Link } from "react-router-dom";

export const AppHeader: React.FC = () => {
  return (
    <div className="font-bold italic text-lg">
      <Link to="/" className="font-bold italic text-lg">
        Movie Night Mayhem
      </Link>
    </div>
  );
};
