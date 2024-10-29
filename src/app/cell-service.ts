import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CellService {
  public currTurn: WritableSignal<number> = signal(1);
  public cellStates: WritableSignal<string[]> = signal(Array(9).fill("default"));

  updateCellState(index: number, state: string) {
    const newStates = [...this.cellStates()];
    newStates[index] = state;
    this.cellStates.set(newStates);
  }
}
