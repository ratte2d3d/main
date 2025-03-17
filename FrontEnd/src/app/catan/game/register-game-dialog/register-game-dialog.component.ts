import { Component, Inject } from '@angular/core';
import { coreImports } from '../../../../core/core.imports';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Option } from '../../../../core/core.model';
import { PersonalResult } from '../game.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheardFieldComponent } from '../../../../core/sheard-field/shared-field.component';

@Component({
  selector: 'app-register-game-dialog',
  imports: [...coreImports, SheardFieldComponent],
  templateUrl: './register-game-dialog.component.html',
  styleUrl: './register-game-dialog.component.scss',
})
export class RegisterGameDialogComponent {
  personalResultsForm: FormGroup;
  // プレイヤー
  players: Option[] = [];

  // ポイント、ボーナス保持者記録
  onRegister(): void {
    // Formからデータを取得
    Object.keys(this.personalResultsForm.controls).forEach((key) => {
      const holder = this.personalResultsForm.get(key)?.value; // 値を取得
      // 該当プレイヤーの情報を追加
      if (holder !== null && holder !== undefined) {
        for (let i = 0; i < this.data.personalResultsData.length; i++) {
          if (this.data.personalResultsData[i].player!.id == holder) {
            if (key == 'winner') {
              this.data.personalResultsData[i]['win']! = true;
            } else if (key == 'longestRoad') {
              this.data.personalResultsData[i]['longestRoad']! = true;
            } else if (key == 'largestArmy') {
              this.data.personalResultsData[i]['largestArmy']! = true;
            } else {
              this.data.personalResultsData[i]['point']!++;
            }
          }
        }
      }
    });
    this.dialogRef.close({
      personalResultsData: this.data.personalResultsData,
    });
  }

  // ダイアログキャンセル
  onCancel(): void {
    this.dialogRef.close();
    this.personalResultsForm.reset();
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      myTurnResultData: PersonalResult;
      personalResultsData: PersonalResult[];
    },
    private dialogRef: MatDialogRef<RegisterGameDialogComponent>,
  ) {
    this.personalResultsForm = this.fb.group({
      winner: [null, Validators.required],
      point1: [],
      point2: [],
      point3: [],
      point4: [],
      point5: [],
      longestRoad: [],
      largestArmy: [],
    });

    // プレイヤー取得
    this.players = data.personalResultsData.map((item) => ({
      key: item.player!.id!,
      viewValue: item.player!.name!,
    }));
  }
}
