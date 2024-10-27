import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
})
export class CellComponent {
  protected currCell: WritableSignal<string> = signal("Default");
  protected ClickRegistered(){
    this.currCell.set("clicked");
  }
}
