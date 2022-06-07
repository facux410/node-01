import { clubes } from "../create";

export const findOne = (id: number) => {
  return clubes.find((i) => i.id === id);
};
