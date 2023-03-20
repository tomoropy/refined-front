import { GoogleLoginBtn } from "@/components/GoogleLoginBtn";
import { NextPage } from "next";
import UsersList from "../components/UserLists";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div>
      <UsersList />
      <GoogleLoginBtn />
    </div>
  );
};

export default Home;
