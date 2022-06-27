import { useState } from "react";
import { useAuth } from "../../../commons/hooks/useAuth";
import MypageUI from "./mypage.presenter";

export default function Mypage() {
  // useAuth();

  const [isSelected, setIsSelected] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MypageUI
      isSelected={isSelected}
      setIsSelected={setIsSelected}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
