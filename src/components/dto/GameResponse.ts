import {PlayerResponse} from "./PlayerResponse.ts";

export interface GameResponse {
  idGame: number;
  matrix_json: string;
  player_one: PlayerResponse;
  player_two: PlayerResponse;
  player_winner: PlayerResponse;
  startTime: string;
  endTime: string;
}