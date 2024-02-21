import { Injectable } from "@angular/core";
import {  Subject } from "rxjs";

interface IDrag {
  startIndex: number;
  endIndex: number;
}

// const INIT_DRAG_DATA:IDrag = {
//   dragRowIndex: '',
//   dragColIndex: '',
//   dropRowIndex: '',
//   dropColIndex: '',
// }

@Injectable({
  providedIn: 'root'
})
export class WidgetDragService {
  subject = new Subject<IDrag>()
}
