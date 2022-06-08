import { clubes, IClub } from "../create";

export const findOne = (id: number) => {
  return clubes.find((i: IClub) => i.id === id);
};
