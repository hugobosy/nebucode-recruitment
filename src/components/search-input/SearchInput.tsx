import React, { ChangeEvent, useEffect, useState } from "react";
import { Search, Wrapper } from "./SearchInput.styles";
import { SearchInputTypes } from "./SearchInput.types";
import { useDebounce, useLocalStorage } from "usehooks-ts";
import { Button } from "../button/Button";
import { getPhoto } from "../../utils/getPhoto";

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

  const lastSearch = history.slice(-5);

  useEffect(() => {
    latestSearch();
  }, [debouncedValue]);

  useEffect(() => {
    getPhoto(clientId, inputValue, page, setPhoto, photo);
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
            handleClick={() => {
              setPhoto([]);
              setInputValue(item);
            }}
            customCss="bottom: 0; left: 0;"
          />
        ))}
      </div>
    </Wrapper>
  );
};
