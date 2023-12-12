export enum MoveTypeEnum {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

export enum ResultsEnum {
  Win = "WIN",
  Lose = "LOSE",
  Tie = "TIE",
}

export interface IMoveFigures {
  img: string;
  alt: string;
}

interface IAvailableMoveFigures {
  [index: string]: IMoveFigures;
}

export const MoveFigures: IAvailableMoveFigures = {
  [MoveTypeEnum.PAPER]: {
    img: 'assets/Paper.png',
    alt: 'paper move',
  },
  [MoveTypeEnum.ROCK]: {
    img: 'assets/Rock.png',
    alt: 'rock move',
  },
  [MoveTypeEnum.SCISSORS]: {
    img: 'assets/Scissors.png',
    alt: 'scissors move',
  },
};

export interface MoveDto {
  move: MoveTypeEnum;
}

export interface GameDto {
  playerMove: MoveTypeEnum;
  cpuMove: MoveTypeEnum;
  result: string;
}
