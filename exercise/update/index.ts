import { clubes, IClub } from "../create";
import { Iresponse } from "../delete";

const update = (id: number, name: string): Iresponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  console.log(pos);

  if (pos > 0) {
    return {
      msg: "club invalido ",
      status: false,
    };
  } else {
    clubes[pos].name = name;
    return {
      msg: "club modificado exitosamente",
      status: true,
    };
  }
};
export default update;
