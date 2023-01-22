import React, { useState } from "react";
import { SearchInput } from "./search-input/SearchInput";
import { Container, Photos } from "./App.styles";
import { Button } from "./button/Button";
import { Photo } from "../types";

function App() {
  const [photo, setPhoto] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);

  const getMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <SearchInput
        setPhoto={setPhoto}
        page={page}
        photo={photo}
        setPage={setPage}
      />
      <Photos>
        {photo.map((item: Photo) => (
          <img
            key={item.links.download}
            src={item.links.download}
            alt={item.description}
          />
        ))}
      </Photos>

      {photo.length && (
        <Button
          text="Pobierz więcej"
          handleClick={getMore}
          bgColor="white"
          color="black"
          position="fixed"
          customCss="bottom: 0; left: 50%; translate: -50% -50%; box-shadow: 0 0 10px 2px rgba(0,0,0,.1);"
        />
      )}
    </Container>
  );
}

export default App;
