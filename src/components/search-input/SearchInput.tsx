import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Search } from "./SearchInput.styles";
import { SearchInputTypes } from "./SearchInput.types";
import useDebounce from "../../hooks/useDebonce";

export const SearchInput: React.FC<SearchInputTypes> = ({
  setPhoto,
  page,
  photo,
  setPage,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 1000);
  const clientId = "4EAKXWpOh2Uwu5o4a3L5EAQn6bjiK79wrfNLjTKHTos";

  useEffect(() => {
    function getPhoto() {
      try {
        axios
          .get(
            `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${inputValue}&page=${page}`
          )
          .then((res) => {
            console.log(res.data.results);
            setPhoto(photo.concat(res.data.results));
          });
      } catch (e) {
        console.log("Error", e);
      }
    }

    getPhoto();
  }, [debouncedValue, page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Search
      type="search"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setPhoto([]);
        setPage(1);
        handleChange(e);
      }}
      value={inputValue}
    />
  );
};
