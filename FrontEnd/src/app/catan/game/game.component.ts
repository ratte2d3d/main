import { Component, OnInit } from '@angular/core';
import { coreImports } from '../../../core/core.imports';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colors, Titles } from './game.model';
import { GameResultService } from './game-result.service';
import { Option } from '../../../core/core.model';
import { SheardFieldComponent } from '../../../core/sheard-field/shared-field.component';
import { PersonalResultService } from './personal-result.service';
import { PlayerService } from '../player/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, identity, of } from 'rxjs';
import { TimeFormatService } from '../../../core/time-format/time-format.service';
import * as XLSX from 'xlsx';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-game',
  imports: [...coreImports, SheardFieldComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  // クエリ
  notGraduated: string = 'isGraduated=false';
  // GameResultテーブルに対応
  gameResultForm: FormGroup;
  // 人数分のPersonalsResultテーブルに対応
  personalResultsForm: FormGroup;
  // ゲームタイトル
  titles: Option[] = Titles;
  // 色
  colors: Option[] = Colors;
  optionColors = ['#c70000', '#ddddaa', '#2307a1', '#ffad32', '#146677', '#330022'];
  // プレイヤー
  players: Option[] = [];
  // 最低人数
  minNumberOfPlayer: number = 3;
  // 最高人数
  maxNumberOfPlayer: number = 6;

  // personalResults の取得
  get personalResults(): FormArray {
    return this.personalResultsForm.get('results') as FormArray;
  }

  // personalResult の取得
  personalResult(index: number): FormGroup {
    return this.personalResults.at(index) as FormGroup;
  }

  // PersonalResultテーブルに対応
  personalResultForm(): FormGroup {
    return this.fb.group({
      player: [, [Validators.required]],
      game: [],
      order: [, [Validators.required]],
      color: [, [Validators.required]],
      land: [2],
    });
  }

  // orderセット
  orderSet(): void {
    for (let i = 0; i < this.personalResults.length; i++) {
      this.personalResult(i).patchValue({ order: i + 1 });
    }
  }

  // 人数を追加
  addPersonalResult(): void {
    if (this.personalResults.length < this.maxNumberOfPlayer) {
      this.personalResults.push(this.personalResultForm());
      this.orderSet();
    }
  }
  // 人数を削除
  removePersonalResult(index: number): void {
    if (this.personalResults.length > this.minNumberOfPlayer) {
      this.personalResults.removeAt(index);
      this.orderSet();
    }
  }

  Register(): void {
    // GameResultを登録
    this.gameResultService.create(this.gameResultForm.value).subscribe(() => {
      // 最新のGameResult(登録したGameResult)を取得
      this.gameResultService.getLatestGame().subscribe((response) => {
        const createRequests = this.personalResults.controls.map((control, i) => {
          // 登録したGameResultのIDを追加
          this.personalResult(i).patchValue({ game: response.id });
          // PlayerResultを登録
          return this.personalResultService.create(control.value);
        });
        // 全てのcreateリクエストが完了するのを待つ
        forkJoin(createRequests).subscribe(() => {
          // すべての登録が完了した後にナビゲート
          this.router.navigate(['playing-game'], {
            relativeTo: this.activatedRoute,
            queryParams: { id: response.id },
          });
        });
      });
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeFormatService: TimeFormatService,
    private playerService: PlayerService,
    private gameResultService: GameResultService,
    private personalResultService: PersonalResultService,
  ) {
    // GameResultテーブルに対応
    this.gameResultForm = this.fb.group({
      title: ['catan', [Validators.required]],
      date: [, [Validators.required]],
    });

    // 人数分のPersonalResultテーブルに対応
    this.personalResultsForm = this.fb.group({
      results: this.fb.array([]),
    });

    // yyyy-mm-dd に変換して FormControl に反映
    this.gameResultForm.get('date')?.valueChanges.subscribe((date) => {
      if (date) {
        const formattedDate = this.timeFormatService.convertDateToDateField(date);
        this.gameResultForm.get('date')?.setValue(formattedDate, { emitEvent: false }); // 変更をトリガーしない
      }
    });
  }

  ngOnInit(): void {
    // 日付をプレイ当日に指定
    this.gameResultForm.controls['date'].patchValue(new Date());

    // 最低人数を4人に指定
    for (let i = 0; i < 4; i++) {
      this.addPersonalResult();
    }

    // クエリセット
    this.playerService.addQuery(this.notGraduated);
    // プレイヤー取得
    this.playerService.queryList$.subscribe((queryList) => {
      this.playerService.getAll(queryList).subscribe((response) => {
        this.players = response.map((item: { id: any; name: string }) => ({
          key: item.id,
          viewValue: item.name,
        }));
      });
    });
  }
  progress: string = '';
  sheetName: string = '';
  columnsTitle: string[] = [
    '日付',
    'ゲーム',
    '勝者',
    '道ボーナス',
    '騎士ボーナス',
    '1人目',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '2人目',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '3人目',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '4人目',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '5人目',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '6人目',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '合計',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    'ターン数',
  ];
  data: any[] = [];

  readExcel(event: any) {
    this.progress = 'ファイル選択完了';
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) return;

    this.progress = '読み取り開始';
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const binaryString: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });

      this.progress = 'ワークブック読み込み';
      this.sheetName = workbook.SheetNames[3];

      const worksheet: XLSX.WorkSheet = workbook.Sheets[this.sheetName];

      // **セルの値を取得**
      const columns = [
        'A',
        'B',
        'C',
        'E',
        'F',
        'DQ',
        'DR',
        'DS',
        'DT',
        'DU',
        'DV',
        'DW',
        'DX',
        'DY',
        'DZ',
        'EA',
        'EB',
        'EC',
        'ED',
        'EE',
        'EF',
        'EG',
        'EH',
        'EI',
        'EJ',
        'EK',
        'EL',
        'EM',
        'EN',
        'EO',
        'EP',
        'EQ',
        'ER',
        'ES',
        'ET',
        'EU',
        'EV',
        'EW',
        'EX',
        'EY',
        'EZ',
        'FA',
        'FB',
        'FC',
        'FD',
        'FF',
        'FF',
        'FG',
        'FH',
        'FI',
        'FJ',
        'FK',
        'FL',
        'FM',
        'FN',
        'FO',
        'FP',
        'FQ',
        'FR',
        'FS',
        'FT',
        'FU',
        'FV',
        'FW',
        'FX',
        'FY',
        'FZ',
        'GA',
        'GB',
        'GC',
        'GD',
        'GG',
        'GF',
        'GG',
        'GH',
        'GI',
        'GJ',
        'GK',
        'GL',
        'GM',
        'GN',
        'GO',
        'GP',
        'GQ',
        'GR',
        'GS',
        'GT',
        'GU',
        'GV',
        'GW',
      ];
      const startRow = 2;
      const endRow = 154;
      const interval = 2;
      const baseDate = new Date(1899, 11, 30); // Excelの基準日（1900年1月1日 - 1日）
      for (let row = startRow; row < endRow; row += interval) {
        var rowData = [];
        for (const col of columns) {
          if (
            col == 'A' ||
            col == 'B' ||
            col == 'C' ||
            col == 'E' ||
            col == 'F' ||
            col == 'DQ' ||
            col == 'EC' ||
            col == 'EO' ||
            col == 'FA' ||
            col == 'FM' ||
            col == 'FY' ||
            col == 'GK'
          ) {
            var cellAddress = `${col}${row}`;
          } else {
            var cellAddress = `${col}${row + 1}`;
          }

          const cellValue = worksheet[cellAddress]?.v ?? null;
          if (col == 'A') {
            const jsDate = new Date(baseDate.getTime() + cellValue * 86400000);
            jsDate.setHours(jsDate.getHours() + 9);
            rowData.push(this.timeFormatService.convertDateToDateTimeField(jsDate));
          } else {
            rowData.push(cellValue);
          }
        }
        this.data.push(rowData);
      }
      this.progress = '読み取り完了';

      this.gameResultForm.controls['date'].patchValue(this.data[0][0]);
      Titles.forEach((title) => {
        this.gameResultForm.controls['title'].patchValue(
          this.data[0][1] == title.viewValue && title.key,
        );
      });
      if (this.data[3][41] == 0) {
        this.removePersonalResult(0);
      }
      if (this.data[3][53] != 0) {
        this.addPersonalResult();
      }
      if (this.data[3][65] != 0) {
        this.addPersonalResult();
      }

      for (let i = 0; i < this.personalResults.length; i++) {
        this.players.forEach((player) => {
          this.personalResult(i).patchValue({
            player: this.data[3][5 + 12 * i] == player.viewValue && player.key,
          });
        });
        this.personalResult(i).patchValue({ color: Colors[i].key });
      }

      this.progress = 'データセット完了';
      // this.personalResult(i).patchValue({ game: response.id });
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
