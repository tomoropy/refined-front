import { User } from "@/types";
import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
  query {
    allUser(limit: 10) {
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
  allUser: User[];
};
