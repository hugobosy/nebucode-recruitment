import React, { useState } from "react";
import { SearchInput } from "./search-input/SearchInput";
import { Container, Photos } from "./App.styles";
import { Button } from "./button/Button";

function App() {
  const [photo, setPhoto] = useState([]);
  let perPage = 12;
  console.log(photo);

  return (
    <Container>
      <SearchInput setPhoto={setPhoto} perPage={perPage} />
      <Photos>
        {photo.map((item: any) => (
          <img key={item.download} src={item.links.download} alt="" />
        ))}
      </Photos>
      {photo.length && <Button text="Pobierz więcej" />}
    </Container>
  );
}

export default App;
