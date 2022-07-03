import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const basketItemState = atom({
  key: "basketItems",
  default: [],
});

export const watchState = atom({
  key: "watchState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
