import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CellService {
  public currTurn: WritableSignal<number> = signal(1);
  public cellStates: WritableSignal<string[]> = signal(Array(9).fill("default"));
  public gameOver: WritableSignal<boolean> = signal(false);
  public winnerMessage: WritableSignal<string | null> = signal(null);

  updateCellState(index: number, state: string) {
    const newStates = [...this.cellStates()];
    newStates[index] = state;
    this.cellStates.set(newStates);
  }

  checkWinningCombination(): string | null {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    const states = this.cellStates();

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (states[a] !== "default" && states[a] === states[b] && states[a] === states[c]) {
        return states[a];
      }
    }

    return null;
  }

  resetGame() {
    this.winnerMessage.set(null);
    this.setGameOver(false);
    this.currTurn.set(1);
    this.cellStates.set(Array(9).fill("default"));
  }

  checkIfGameOver(){
    return this.gameOver();
  }

  setGameOver(value: boolean){
    this.gameOver.set(value);
  }
}
