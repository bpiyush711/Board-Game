import { RandomIdService } from './random-id.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { ScoreSubimitComponent } from './score-subimit/score-subimit.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    ScoreSubimitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/game', pathMatch: 'full' },
      { path: 'game', component: GameComponent},
      { path: 'submit', component: ScoreSubimitComponent }
    ])
  ],
  providers: [RandomIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
