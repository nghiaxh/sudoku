import { Grid, CellValue } from "../types/types";

export function isValid(grid: Grid, row: number, col: number, value: CellValue): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === value) return false;
  }
  for (let j = 0; j < 9; j++) {
    if (grid[j][col] === value) return false;
  }

  const boxRow = row - (row % 3);
  const boxCol = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + boxRow][j + boxCol] === value) return false;
    }
  }

  return true;
}
