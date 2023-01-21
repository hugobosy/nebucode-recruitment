import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Search, Wrapper } from "./SearchInput.styles";
import { SearchInputTypes } from "./SearchInput.types";
import useDebounce from "../../hooks/useDebonce";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "../button/Button";

export const SearchInput: React.FC<SearchInputTypes> = ({
  setPhoto,
  page,
  photo,
  setPage,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 1000);
  const [history, setHistory] = useLocalStorage<string[]>("history", []);
  const clientId = "4EAKXWpOh2Uwu5o4a3L5EAQn6bjiK79wrfNLjTKHTos";

  const latestSearch = () => {
    setHistory((prev) => {
      return inputValue.length !== 0 ? prev.concat(inputValue) : prev;
    });
  };

  const lastSearch = [...new Set<string>(history)].slice(-5);
  console.log(lastSearch);

  useEffect(() => {
    latestSearch();
  }, [debouncedValue]);

  useEffect(() => {
    const getPhoto = () => {
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
    };
    getPhoto();
  }, [debouncedValue, page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <Search
        type="search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPhoto([]);
          setPage(1);
          handleChange(e);
        }}
        value={inputValue}
        placeholder="Wyszukaj..."
      />
      <div>
        <p>Ostatnie wyszukiwane frazy:</p>
        {lastSearch.map((item) => (
          <Button
            text={item}
            bgColor="transparent"
            color="white"
            position="relative"
            handleClick={() => setInputValue(item)}
            customCss="bottom: 0; left: 0;"
          />
        ))}
      </div>
    </Wrapper>
  );
};
