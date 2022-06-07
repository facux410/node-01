import createClub from "./create";
import { findAll, findOne } from "./search";

const main = (): any => {
  const msg = createClub(1, "boqquita");
  createClub(2, "riber");

  // console.log(msg);
  const result = findAll;
  const resultOne = findOne;
  console.log(result(), resultOne(2));
};

main();
