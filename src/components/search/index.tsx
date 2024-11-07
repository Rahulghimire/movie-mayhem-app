import { useSearchMovies } from "@/services/api-hooks";
import { SearchOutlined } from "@ant-design/icons";
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
      value: movie?.title,
      key: movie?.id,
      url: `/movies/${movie?.id}`,
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
    <div className="m-1 md:mx-3 md:p-3">
      <div className="flex justify-center">
        <AutoComplete
          options={options}
          onSearch={handleSearch}
          style={{ width: "33%" }}
          onSelect={handleSelect}
          placeholder="Search for movies"
          suffixIcon={<SearchOutlined className="text-lg mt-2" />}
          //   loading={isLoading}
        >
          <Input />
        </AutoComplete>
      </div>
    </div>
  );
};

export default MovieSearch;
