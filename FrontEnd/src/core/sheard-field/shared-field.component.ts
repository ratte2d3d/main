import { Component, forwardRef, Input, OnInit, signal } from '@angular/core';
import { coreImports } from '../core.imports';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Option } from '../core.model';

@Component({
  selector: 'app-shared-field',
  imports: [...coreImports],
  templateUrl: './shared-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SheardFieldComponent),
      multi: true,
    },
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
  ],
  styleUrl: './shared-field.component.scss',
})
export class SheardFieldComponent implements ControlValueAccessor, OnInit {
  @Input() label!: string; // ラベル
  @Input() type!: string; // 入力フィールドの種類
  @Input() placeholder: string = ''; // プレースホルダー
  @Input() required: boolean = false; // 必須項目
  @Input() disabled: boolean = false; // 無効化
  @Input() maxlength: number | null = null; //最大入力文字数
  @Input() startView!: 'month' | 'year' | 'multi-year'; // 日付選択用
  @Input() options: Option[] = []; // セレクト用の選択肢
  @Input() optionColor: string[] = []; // セレクトの色
  hintLabel: string = ''; // ヒントラベル
  errorMessage: string = '必須項目です';

  // パスワード伏字処理
  hide = signal(true);
  onHide(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  // 選択フォームの色指定
  optionFont: string = ''; // セレクトの文字
  selectedColor: string = '#000'; // デフォルトカラー
  setSelectedColor(color: string) {
    this.selectedColor = color;
  }

  ngOnInit(): void {
    this.optionFont = this.optionColor.length != 0 ? 'bold' : '';
    this.hintLabel = this.maxlength != null ? `${this.maxlength}文字以内` : ''; // ヒントラベル
  }

  value: any; // フォームの値
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
