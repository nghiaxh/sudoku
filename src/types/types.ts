export type CellValue = number | null;
export type Grid = CellValue[][];

export interface GameState {
  grid: Grid;
  initGrid: Grid;
  selectedCell: [number][number] | null;
  isWon: boolean;
  timer: number;
}

export interface GameStore extends GameState {
  selectCell: (row: number, col: number) => void;
  setCellValue ( value: CellValue );
  newGame: () => void;
  increaseTimer: () => void;
}
