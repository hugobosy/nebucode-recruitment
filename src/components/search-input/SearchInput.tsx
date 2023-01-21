import React, { useState } from "react";
import axios from "axios";
import { Search } from "./SearchInput.styles";
import { SearchInputTypes } from "./SearchInput.types";

export const SearchInput: React.FC<SearchInputTypes> = ({ setPhoto }) => {
  const [inputValue, setInputValue] = useState("");
  const clientId = "4EAKXWpOh2Uwu5o4a3L5EAQn6bjiK79wrfNLjTKHTos";
  let perPage = 12;

  function getPhoto() {
    try {
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${inputValue}&per_page=${perPage}`
        )
        .then((res) => {
          console.log(res.data);
          setPhoto(res.data.results);
        });
    } catch (e) {
      console.log("Error", e);
    }
  }
  function debounce(cb: any, delay = 1000) {
    let timeout: ReturnType<typeof setTimeout>;

    return (...args: string[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const updateState = debounce((text: string) => {
    setInputValue(text);
  }, 250);

  return (
    <Search
      type="search"
      onChange={(e) => {
        updateState(e.target.value);
        getPhoto();
      }}
    />
  );
};
