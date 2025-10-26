import { Component } from '@angular/core';
import { coreImports } from '../../../../core/core.imports';
import { ProgrammingTemplateComponent } from '../programming-template/programming-template.component';
import { DevelopmentTools, Languages, OS } from '../programming.model';

@Component({
  selector: 'app-quiz-cpp',
  imports: [...coreImports, ProgrammingTemplateComponent],
  templateUrl: './quiz-cpp.component.html',
  styleUrl: './quiz-cpp.component.scss'
})
export class QuizCppComponent {
  title = 'クイズアプリケーション';
  images = [
    'images/kohama-yujin/programming/quiz_cpp/quiz_cpp1.png',
    'images/kohama-yujin/programming/quiz_cpp/quiz_cpp2.png',
    'images/kohama-yujin/programming/quiz_cpp/quiz_cpp3.png',
    'images/kohama-yujin/programming/quiz_cpp/quiz_cpp4.png',
    'images/kohama-yujin/programming/quiz_cpp/quiz_cpp5.png',
  ]
  image_descriptions = [
    'ディレクトリの中身がリスト表示され、番号指定でファイル操作ができます。',
    '解答する問題データを選択します。',
    '読み込んだ問題データが表示され、解答する問題数を決めます。',
    'テキスト入力で解答します。正誤判定は日本語にも対応しています。',
    '解答を終了すると、その時点の出題リストがCSVファイルとして保存されます。'
  ]
  abstract_description = ['C++言語を使用して制作したクイズアプリケーションです。CSV形式で問題を管理し、ユーザの回答結果に応じて出題リストを動的に更新する仕組みを実装しました。具体的には、正答した問題をリストから削除、誤答問題は末尾に再追加します。']
  period_title = '実働：約2週間';
  period_description = ['2025年6月と10月の2回に分けて制作を行いました。6月に基盤を構築し、10月に入出力部分を実装しました。約2週間の実働期間で制作を行いました。'];
  role_title = '一人で担当';
  role_description = ['企画、設計、実装、ドキュメント作成まで全て一人で担当しました。'];
  used_technique_header = [
    DevelopmentTools.NAME,
    OS.NAME,
    Languages.NAME,
  ];
  used_technique_name = [
    [ DevelopmentTools.GIT, DevelopmentTools.VSCODE ],
    [ OS.LINUX ],
    [ Languages.CPP ]
  ];
  background_title = 'テスト勉強のための効率的な学習ツール';
  background_description = ['C++の基礎を学んだ後、その知識を応用して実際に動作するアプリケーションを開発する経験を積むことを目的として制作を開始しました。', 'テスト勉強時に個人利用するためにC言語で作成していたクイズアプリケーションをC++でブラッシュアップしたもので、これにより画像での出題も可能になりました。'];
  ingenuity_title = '動的な出題リスト更新';
  ingenuity_list = [
    'CSVファイルを用いて問題データを管理し、容易に問題の追加・編集が可能な設計',
    '標準ライブラリを活用して効率的なファイル操作を実現',
    'ユーザの解答結果に基づき、正答率の低い問題を頻出するアルゴリズムを実装し、学習効果を向上',
    '画像問題にも対応可能な拡張性ある設計',
  ]
  future_title = 'GUI対応と機能拡張';
  future_description = ['将来的にはGUI対応を検討しており、解答方法の多様化を目指しています。また、問題のカテゴリー分けや難易度設定など、さらなる機能拡張も視野に入れています。'];
  gitHub_url = 'https://github.com/ratte2d3d/quiz_cpp';
}