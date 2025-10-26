import { Component } from '@angular/core';
import { coreImports } from '../../../../core/core.imports';
import { ProgrammingTemplateComponent } from '../programming-template/programming-template.component';
import { Databases, DBaaS, DevelopmentTools, Frameworks, IaaS, Languages, PaaS } from '../programming.model';

@Component({
  selector: 'app-board-game-management',
  imports: [...coreImports, ProgrammingTemplateComponent],
  templateUrl: './board-game-management.component.html',
  styleUrl: './board-game-management.component.scss'
})
export class BoardGameManagementComponent {
  title = 'ボードゲームの戦績管理アプリ';
  abstract_description = ['研究室で遊ばれていたボードゲーム『カタン』の戦績を記録・可視化するWebアプリです。'];
  period_title = '約2ヶ月';
  period_description = ['2025年2月 〜 2025年3月に大部分を制作し、2025年4月から運用を開始しました。2025年9月にランキングなどの可視化部分を追加し、機能を強化しました。'];
  role_title = '一人で担当';
  role_description = ['要件定義から設計・実装・運用までを全て一人で担当しました。フロントエンドとバックエンドの両方を開発し、デプロイも行いました。'];
  used_technique_header = [
    DevelopmentTools.NAME,
    Frameworks.NAME,
    Languages.NAME,
    Databases.NAME,
    DBaaS.NAME,
    PaaS.NAME,
    IaaS.NAME,
  ]
  used_technique_name = [
    [ DevelopmentTools.GIT, DevelopmentTools.VSCODE ],
    [ Frameworks.ANGULAR, Frameworks.DJANGO ],
    [ Languages.HTML_CSS, Languages.TYPESCRIPT, Languages.PYTHON ],
    [ Databases.POSTGRESQL ],
    [ DBaaS.NEON ],
    [ PaaS.RENDER ],
    [ IaaS.AWS_S3 ]
  ]
  background_title = '戦歴等を管理したい';
  background_description = ['ボードゲーム「カタン」が研究室で流行していた際に『戦績を管理したい』という要望を受け、自主制作を行いました。当初はエクセルでの管理を行っていましたが、記録漏れが起こったり管理が大変であったため、簡単に記録・管理できるアプリの制作を決意しました。制作を通じてWebシステムの理解を深めることも目的としています。']
  ingenuity_title = '使いやすさと視認性を重視したUI/UX設計';
  ingenuity_list = [
    'ユーザーが直感的に操作できるよう、シンプルで分かりやすいインターフェースを設計',
    '画像アップロード機能を実装したことでユーザーのアイコン設定が可能になり、視認性が向上',
    'コードの可読性を高めるため、コンポーネントの分割や共通スタイルの適用を徹底',
    '無料のクラウドサービスを活用し、コストを抑えつつ安定した運用を実現',
  ]
  future_title = 'さらなる機能拡充';
  future_description = ['出目分布の可視化や手番順と勝率の相関分析など、さらなるデータ分析機能の追加を検討しています。また、レスポンシブデザインを強化し、モバイルデバイスでの操作性向上も目指しています。'];
  product_url = 'https://frontend-gn26.onrender.com/#/catan';
  gitHub_url = 'https://github.com/ratte2d3d/main';
}
