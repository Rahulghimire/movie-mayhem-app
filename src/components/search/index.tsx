import { useSearchMovies } from "@/services/api-hooks";
import { AutoComplete, Input } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieSearch: React.FC = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const { data } = useSearchMovies(searchText);

  const timeoutRef = useRef<number | null>(null);

  const options =
    data?.results.map((movie: any) => ({
      value: movie.title,
      key: movie.id,
      url: `/movies/${movie.id}`,
    })) || [];

  const handleSearch = (value: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setSearchText(value);
    }, 300);
  };

  const handleSelect = (_: string, option: any) => {
    if (option.url) {
      navigate(option.url);
    }
  };

  return (
    <AutoComplete
      options={options}
      onSearch={handleSearch}
      style={{ width: "100%" }}
      onSelect={handleSelect}
      placeholder="Search for movies"
      //   loading={isLoading}
    >
      <Input />
    </AutoComplete>
  );
};

export default MovieSearch;
