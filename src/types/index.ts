export type Position = "fixed" | "absolute" | "relative";
export interface Photo {
  links: {
    download: string;
  };
  description: string;
}
