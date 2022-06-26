import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const publicBikeState = atom({
  key: "publicBikeState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const basketItemState = atom({
  key: "basketItems",
  default: [],
});
