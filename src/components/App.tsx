import React, { useState } from "react";
import { SearchInput } from "./search-input/SearchInput";
import { Container, Photos } from "./App.styles";

function App() {
  const [photo, setPhoto] = useState([]);

  console.log(photo);

  return (
    <Container>
      <SearchInput setPhoto={setPhoto} />
      <Photos>
        {photo.map((item: any) => (
          <img src={item.links.download} alt="" />
        ))}
      </Photos>
    </Container>
  );
}

export default App;
