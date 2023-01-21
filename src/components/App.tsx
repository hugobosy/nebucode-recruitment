import React, { useState } from "react";
import { SearchInput } from "./search-input/SearchInput";
import { Container, Photos } from "./App.styles";
import { Button } from "./button/Button";
import { Photo } from "../types";

function App() {
  const [photo, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  // let perPage = 12;
  console.log(photo);

  const getMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <SearchInput setPhoto={setPhoto} page={page} photo={photo} />
      <Photos>
        {photo.map((item: Photo) => (
          <img
            key={item.links.download}
            src={item.links.download}
            alt={item.description}
          />
        ))}
      </Photos>
      {photo.length && <Button text="Pobierz więcej" handleClick={getMore} />}
    </Container>
  );
}

export default App;
