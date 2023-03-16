import { gql } from '@apollo/client';
import { User } from '@/types';

export const USERS_QUERY = gql`
  query {
    allUser {
        uid
        username
        email
        text
        avater
        header
        createdAt
    }
  }
`;

export type UsersData = {
  allUser: User[]
}
