import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Image from "next/image";
import UsersList from "../components/UserLists";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div>
      <UsersList />
      <a
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      >
        <Image
          src={"/google-logo.png"}
          alt="google signIn"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
};

export default Home;
