import createClub from "./create";
import Delete from "./delete";
import { findAll, findBytext, findOne } from "./search";
import update from "./update";

const main = (): any => {
  createClub(1, "boqquita");
  createClub(2, "riberboq");
  createClub(3, "plantense");
  createClub(4, "corintians");

  // console.log(msg);
  // const resultOne = findOne;
  // // console.log(result(), resultOne(2));
  // console.log(findBytext("boq"));
  const resupd = update(1, "racing");
  // console.log(Delete(3));
  console.log(resupd);
  console.log(findAll());
};

main();
