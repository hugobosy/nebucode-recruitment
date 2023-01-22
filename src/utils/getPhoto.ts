import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Photo } from "../types";

export const getPhoto = (
  clientId: string,
  inputValue: string,
  page: number,
  setPhoto: Dispatch<SetStateAction<Photo[]>>,
  photo: Photo[]
) => {
  try {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${inputValue}&page=${page}`
      )
      .then((res) => {
        setPhoto(photo.concat(res.data.results));
      });
  } catch (e) {
    console.log("Error", e);
  }
};
