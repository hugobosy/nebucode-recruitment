import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "./SearchInput.styles";
import { SearchInputTypes } from "./SearchInput.types";

export const SearchInput: React.FC<SearchInputTypes> = ({
  setPhoto,
  page,
  photo,
  setPage,
}) => {
  const [inputValue, setInputValue] = useState("");
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
  }, [inputValue, page]);

  return (
    <Search
      type="search"
      onChange={(e) => {
        setPhoto([]);
        setPage(1);
        setInputValue(e.target.value);
      }}
    />
  );
};
