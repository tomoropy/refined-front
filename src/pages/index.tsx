import { NextPage } from 'next';
import UsersList from '../components/UserLists';

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div>
      <UsersList />
    </div>
  )
}

export default Home;
