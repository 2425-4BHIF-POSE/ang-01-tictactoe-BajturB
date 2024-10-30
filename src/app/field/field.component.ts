import { Component } from '@angular/core';
import { CellService } from '../cell-service';
import {NgForOf, NgIf} from '@angular/common';
import { CellComponent } from './cell/cell.component';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [
    CellComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {

  public winnerMessage: string | null = null;

  constructor(public cellService: CellService) {}

  onCellClick(index: number) {
    const currTurn = this.cellService.currTurn();
    const currPlayer = currTurn % 2 === 0 ? "X" : "O";
    this.cellService.updateCellState(index, currPlayer);
    if (currTurn >= 3){
      const winner = this.cellService.checkWinningCombination();
      if (winner) {
        this.winnerMessage = `Player ${winner} wins!`;
        return;
      } else if (currTurn === 9) {
        this.winnerMessage = "Draw!";
        return;
      }
    }
    this.cellService.currTurn.update((oldVal: number) => (oldVal === 9 ? 0 : oldVal + 1));
  }
}
