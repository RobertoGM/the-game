import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './containers/board/board.component';
import { MovePickerComponent } from './components/move-picker/move-picker.component';
import { BoardService } from './services/board.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BoardComponent, MovePickerComponent],
  providers: [BoardService],
  imports: [CommonModule, BoardRoutingModule, HttpClientModule],
})
export class BoardModule {}
