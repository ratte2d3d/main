import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatanComponent } from './catan/catan.component';
import { PlayerComponent } from './catan/player/player.component';
import { GameComponent } from './catan/game/game.component';
import { ResultComponent } from './catan/result/result.component';
import { PlayingGameComponent } from './catan/game/playing-game/playing-game.component';
import { GameListComponent } from './catan/game-list/game-list.component';
import { KohamaYujinComponent } from './kohama-yujin/kohama-yujin.component';
import { TopComponent } from './kohama-yujin/top/top.component';
import { GraduationProjectComponent } from './kohama-yujin/graduation-project/graduation-project.component';
import { ProgrammingComponent } from './kohama-yujin/programming/programming.component';
import { BoardGameManagementComponent } from './kohama-yujin/programming/board-game-management/board-game-management.component';
import { QuizCppComponent } from './kohama-yujin/programming/quiz-cpp/quiz-cpp.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'home' },
  { path: 'kohama-yujin',
    component: KohamaYujinComponent,
    children: [
      { path: '', component: TopComponent, title: 'Yujin Kohama' },
      { path: 'graduation-project', component: GraduationProjectComponent, title: 'Yujin Kohama | 卒業研究' },
      { path: 'programming',
        children: [
          { path: '', component: ProgrammingComponent, title: 'Yujin Kohama | 制作物' },
          { path: 'board-game-management', component: BoardGameManagementComponent, title: 'Yujin Kohama | ボードゲームの戦績管理' },
          { path: 'quiz-cpp', component: QuizCppComponent, title: 'Yujin Kohama | クイズアプリケーション' },
        ],
      },
    ],
  },
  {
    path: 'catan',
    component: CatanComponent,
    children: [
      { path: '', component: ResultComponent, title: 'Catan | Result' },
      { path: 'player', component: PlayerComponent, title: 'Catan | Player' },
      {
        path: 'game',
        children: [
          { path: '', component: GameComponent, title: 'Catan | Game' },
          { path: 'playing-game', component: PlayingGameComponent, title: 'Catan | Playing Game' },
        ],
      },
      { path: 'game-list', component: GameListComponent, title: 'Catan | List' },
    ],
  },
];
