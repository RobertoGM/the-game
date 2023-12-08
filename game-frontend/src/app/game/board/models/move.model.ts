export enum MoveTypeEnum {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

export enum ResultsEnum {
  Win = 1,
  Lose,
  Tie,
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
