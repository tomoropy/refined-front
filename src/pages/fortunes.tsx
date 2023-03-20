import Fortunes from "@/components/Fortunes";
import HamburgerMenu from "@/components/HambergerMenu";
import { NextPage } from "next";

interface FortuneProps {}

const Fortune: NextPage<FortuneProps> = () => {
  return (
    <>
      <HamburgerMenu />
      <Fortunes />
    </>
  );
};

export default Fortune;
