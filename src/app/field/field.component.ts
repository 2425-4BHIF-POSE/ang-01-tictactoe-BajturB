import {Component, signal, WritableSignal} from '@angular/core';
import {CellComponent} from './cell/cell.component';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [
    CellComponent
  ],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent {
  public currTurn: WritableSignal<number> = signal(1);
}
