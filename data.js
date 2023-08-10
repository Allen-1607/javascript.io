import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "../assets/images/everyday.svg"
);

const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "../assets/images/frog.svg"
);

const backpackObjectArray = [everydayPack, frogPack];

export default backpackObjectArray;
