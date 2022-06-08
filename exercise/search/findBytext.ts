import { clubes, IClub } from "../create";

export const findBytext = (name: string): IClub[] => {
  return clubes.filter((club: IClub) =>
    club.name.toLowerCase().includes(name.toLowerCase())
  );
};
