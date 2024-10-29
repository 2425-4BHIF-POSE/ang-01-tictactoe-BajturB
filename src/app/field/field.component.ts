import { Component } from '@angular/core';
import { CellService } from '../cell-service';
import { NgForOf } from '@angular/common';
import { CellComponent } from './cell/cell.component';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [
    CellComponent,
    NgForOf
  ],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  constructor(public cellService: CellService) {}

  onCellClick(index: number) {
    const currTurn = this.cellService.currTurn();
    const currPlayer = currTurn % 2 === 0 ? "X" : "O";
    this.cellService.updateCellState(index, currPlayer);
    this.cellService.currTurn.update((oldVal: number) => (oldVal === 9 ? 0 : oldVal + 1));
  }
}
