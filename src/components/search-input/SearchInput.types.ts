import { Dispatch, SetStateAction } from "react";

export interface SearchInputTypes {
  setPhoto: Dispatch<SetStateAction<any>>;
  page: number;
  photo: any[];
}
