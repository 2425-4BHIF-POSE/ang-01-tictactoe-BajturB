import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FieldComponent} from './field/field.component';
import {CellComponent} from './field/cell/cell.component';
import {CellService} from './cell-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FieldComponent, CellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe';

  constructor(protected cellService: CellService) {}

  resetGame() {
    this.cellService.resetGame();
  }
}
