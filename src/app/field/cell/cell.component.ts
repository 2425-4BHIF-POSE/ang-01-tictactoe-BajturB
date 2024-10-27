import { Component, signal, WritableSignal } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
})
export class CellComponent {
  private maxTurnCnt = 9;
  protected currCell: WritableSignal<string> = signal("default");

  constructor(private fieldComponent: FieldComponent) {}

  protected ClickRegistered() {
    const currTurn = this.fieldComponent.currTurn();
    const currPlayer = currTurn % 2 === 0 ? "X" : "0";
    this.currCell.set(currPlayer);
    this.fieldComponent.currTurn.update(oldVal => {
      if (oldVal === this.maxTurnCnt) {
        return 0;
      }
      return oldVal + 1;
    });
  }
}
