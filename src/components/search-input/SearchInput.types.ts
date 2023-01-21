import { Dispatch, SetStateAction } from "react";
import { Photo } from "../../types";

export interface SearchInputTypes {
  setPhoto: Dispatch<SetStateAction<Photo[]>>;
  page: number;
  photo: Photo[];
  setPage: Dispatch<SetStateAction<number>>;
}
