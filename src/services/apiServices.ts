import axios from "axios";
import { number } from "joi";
import { conflictError } from "../middleware/handleErrorsMiddleware.js";

export async function battleService(firstUser: string, secondUser: string) {
  const API_URL: string = "https://api.github.com/users/";
  let firstUserStar: number = 0;
  let secondUserStar: number = 0;
  let draw = false;
  let winner = null;
  let loser = null;

  try {
    const firstUserResult = await axios.get(`${API_URL}${firstUser}/repos`);
    for (let repo of firstUserResult.data) {
      firstUserStar += repo["stargazers_count"];
    }
    const secondUserResult = await axios.get(`${API_URL}${secondUser}/repos`);
    for (let repo of secondUserResult.data) {
      secondUserStar += repo["stargazers_count"];
    }
  } catch (error) {
    throw conflictError();
  }

  if (firstUserStar === secondUserStar) {
    draw = true;
  } else if (firstUserStar > secondUserStar) {
    winner = firstUser;
    loser = secondUser;
  } else {
    winner = secondUser;
    loser = firstUser;
  }

  return {
    winner,
    loser,
    draw,
  };
}
