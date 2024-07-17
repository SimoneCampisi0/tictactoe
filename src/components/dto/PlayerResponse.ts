import {GameResponse} from "./GameResponse.ts";

export interface PlayerResponse {
  idPlayer: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  matchesAsPlayerOne: GameResponse[];
  matchesAsPlayerTwo: GameResponse[];
  winner_player: GameResponse[];
}