import { clubes, IClub } from "../create";

export interface Iresponse {
  msg: string;
  status: boolean;
}

const deleteClub = (id: number): Iresponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  if (pos === -1) {
    return {
      msg: "no hay ese club",
      status: false,
    };
  } else {
    clubes.splice(pos, 1);
    return {
      msg: "club eliminado exitosamente",
      status: true,
    };
  }
};
export default deleteClub;
