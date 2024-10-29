import { Component, Input } from '@angular/core';
import { CellService } from '../../cell-service';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() index!: number;

  constructor(public cellService: CellService) {}

  get currCell() {
    return this.cellService.cellStates()[this.index];
  }

  ClickRegistered() {
    this.cellService.updateCellState(this.index, this.currCell);
  }
}
