---
title: "考えたこと・気になったことリンク集"
description: "日々の業務で疑問に思ったこと、調べたいこと、参考になった資料のリンク集(技術系のみ抜粋)。"
---

# ソフトウェアエンジニアリング
## API
- RESTAPIのデザインについて
	- [「WebAPI 設計のベストプラクティス」に対する所感 #rest - Qiita](https://qiita.com/ryo88c/items/0a3c7861015861026e00)
- APIのエラーハンドリングのやり方調べておいたほうが良さそう #エラーハンドリング
    - 結構複雑
    - [https://qiita.com/yonaka15/items/487da844f9d2bab6d324](https://qiita.com/yonaka15/items/487da844f9d2bab6d324)
    - [https://zenn.dev/ryamakuchi/articles/111aa3f125e507](https://zenn.dev/ryamakuchi/articles/111aa3f125e507)
    - [https://github.com/tdonker/REST-API-books](https://github.com/tdonker/REST-API-books)
    - [https://zenn.dev/kyoshigai/articles/612cd90d850871](https://zenn.dev/kyoshigai/articles/612cd90d850871)
- システムパフォーマンスについて
    - プロセスとスレッド
        - Node.jsだとどうなっている？
        - プロセス中に複数スレッドがあるけど、いくらでも作れるの？てかどうやって作られるんだろう
        - コンテナって１コンテナ１プロセスだけど、中でマルチプロセスってどうやるの？
    - メモリ管理
        - [https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Memory_management](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Memory_management)
        - クラスが生成されるときのメモリの使われ方について見ておいたほうが良さそう
        - I/Oについて
            - 非同期
                - [Node.js の非同期処理の仕組み｜ラキール公式｜株式会社ラキールのエンジニアたちによるTECH BLOG](https://tech-blog.lakeel.com/n/nad1e70679a96?gs=90ebf720c7ef)
    - 知っておいた方がいいおおまかな計算について
        - [Google Pro Tip: Use Back-of-the-envelope-calculations to Choose the Best Design - High Scalability -](https://highscalability.com/google-pro-tip-use-back-of-the-envelope-calculations-to-choo/)
        - [Numbers Every Programmer Should Know By Year](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
    - システムデザイン
        - [https://github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
        - [System Design Primer](https://systemdesignschool.io/primer)
    - SLAについて
        - [Compute Engine Service Level Agreement (SLA) | Google Cloud](https://cloud.google.com/compute/sla?hl=ja)
- 画像について
    - ブロブに入れて引張る
- QRコードのトランザクションについて
    - [https://medium.com/@shivam_99875/system-design-of-qr-code-based-payment-transactions-9b1b7276335b](https://medium.com/@shivam_99875/system-design-of-qr-code-based-payment-transactions-9b1b7276335b)
    - [https://docs.antom.com/ac/transactionqrcodenew/intro](https://docs.antom.com/ac/transactionqrcodenew/intro)
    - paypayのQRコード用ツール
        - [https://github.com/paypay/paypayopa-sdk-node](https://github.com/paypay/paypayopa-sdk-node)
- URLに状態をもたせる
	- [Your URL Is Your State](https://alfy.blog/2025/10/31/your-url-is-your-state.html)

- ファイルアプロードの設計について
	- [至高のファイルアップロード #Java - Qiita](https://qiita.com/kawasima/items/f80bc54efb12d5509c0b)
	- [ファイルアップロード - kawasima](https://scrapbox.io/kawasima/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)
## テスト
- priate constructorを持つエンティティをどうやってモックしていくのか
- アプリケーション層、ドメイン層のテストで最低限やっておくこと
- テストダブルの分類とかがうまく書かれている
	- [xUTPによるテストダブルの定義とその図解 - NTT docomo Business Engineers' Blog](https://engineers.ntt.com/entry/20251208_advent-calendar-day8/entry)
- [[B! テスト] ソフトウェアテストの古典から現在まで](https://b.hatena.ne.jp/entry/s/zenn.dev/mima_ita/articles/79a98d9b9c97b6#utm_campaign=bs_tw)
- [PlaywrightとGitHub Actionsを用いたE2Eテスト自動実行環境の構築と、リリース頻度向上の取り組み - M3Career Techblog](https://m3career-eng.hatenablog.com/entry/2026/03/25/140000)
- [伊藤淳一が考える「コードレビューの観点とアプローチ」 - レバテックLAB](https://levtech.jp/media/detail_824/)
- [翻訳記事「AIコーディングツールによって加速するコード生成に品質保証活動はどう立ち向かうか」 - ブロッコリーのブログ](https://nihonbuson.hatenadiary.jp/entry/QA-activities-in-response-to-generated-code)
- [runn と Skills ではじめる結合テスト](https://zenn.dev/canary_techblog/articles/7c37dbae3a35bc)
- [Blog > Writing Good Unit Tests](https://eliocapella.com/blog/writing-good-unit-tests/)
- [保守しやすく変化に強いソフトウェアを支える柱　自動テストとテスト駆動開発、その全体像 ～Software Design 2022年3月号「そろそろはじめるテスト駆動開発」より | gihyo.jp](https://gihyo.jp/article/2024/01/automated-test-and-tdd)
## Javascript/Typescript
- [TypeScript だけで安全に JSON 文字列内の値を読み取る | t28.dev](https://t28.dev/blog/safety-json-parsing)
- [【TypeScript/JavaScript】配列操作reduce()を救いたい。 #ポエム - Qiita](https://qiita.com/rokumura7/items/cdfc92dba508bbfb6127)
- [TypeScriptの設定の良し悪し](https://gist.github.com/azu/56a0411d69e2fc333d545bfe57933d07)

### Framework
#### NestJS
- NestJSのDIを理解したい
	- [ソースコードで理解するNestJS①: @Controllerは何をするのか #TypeScript - Qiita](https://qiita.com/fj-th/items/5c11251bc66feb477f09)
- [SWC (fast compiler) | NestJS - A progressive Node.js framework](https://docs.nestjs.com/recipes/swc)
- NestJSのヘルスチェック
    - terminusの中身について
        - [Promise.race() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
#### Fastify

## BackEnd

-  Web Socket #webSocket
	- [WebSocketによる通信 \- ソフトウェア設計及び演習](https://wiki.cis.iwate-u.ac.jp/~yamanaka/csd/2020/material/js/websocket/)
- Graceful shutdown
	- [sebhildebrandt/http-graceful-shutdown: Gracefully shuts down node http server - can be used with http, express, koa, ...](https://github.com/sebhildebrandt/http-graceful-shutdown/tree/master)
	- [Lifecycle events | NestJS - A progressive Node.js framework](https://docs.nestjs.com/fundamentals/lifecycle-events#application-shutdown)
	- [Graceful shutdown with Node.js and Kubernetes - RisingStack Engineering](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/)
	- [欅樹雑記: Node.jsサーバーのgraceful shutdownまとめ](https://blog.zelkova.cc/2022/10/graceful-shutdown-in-nodejs.html)
- 決済サービス　#決済
	- [コドモンにおける決済基盤のテストの紹介 - コドモン Product Team Blog](https://tech.codmon.com/entry/2024/12/16/083951)
	- [GitHub - Paymenter/Paymenter: Free and open-source webshop solution for hostings · GitHub](https://github.com/Paymenter/Paymenter)
    - [決済基盤の整合性設計を仕様から決める。バクラク請求書発行のカード決済における2つの判断 - LayerX エンジニアブログ](https://tech.layerx.co.jp/entry/payment-consistency-decision)
- バッチ処理
	- [「定時実行」と「定期実行」の実装ガイド | blog.jxck.io](https://blog.jxck.io/entries/2026-03-03/scheduled-and-periodic-execution.html)
	- [バッチの実装方針について考える - hacomono TECH BLOG](https://techblog.hacomono.jp/entry/2026/02/17/110000)
- 他社の事例
    - [Uber Engineering Blog (Links) | System-Design](https://codersguild.github.io/System-Design/Uber%20Engineering/)
## FrontEnd
- [Webフロントエンド設計ガイドライン \| フューチャー株式会社](https://future-architect.github.io/arch-guidelines/documents/forWebFrontend/web_frontend_guidelines.html)
-  SSRとか、SPAとかマジでわからない　
- [How modern browsers work - by Addy Osmani - Elevate](https://addyo.substack.com/p/how-modern-browsers-work)
- https://github.com/catnose99/timeline/tree/main
- [ChromeDevTools/devtools-frontend: The Chrome DevTools UI](https://github.com/ChromeDevTools/devtools-frontend)

## エラーハンドリング
- [5 Reasons Why Business Exceptions Are a Bad Idea](https://reflectoring.io/business-exceptions/)
- エラーハンドリング
	- [エラーハンドリングを少しずつ改善していく / improving error handling little by little - Speaker Deck](https://speakerdeck.com/codmoninc/improving-error-handling-little-by-little)
- **Notification Pattern**
	- エラーを複数返したい場合が存在する
    -  [Notification](https://martinfowler.com/eaaDev/Notification.html)
    - [php - Domain validation using the notification pattern - Stack Overflow](https://stackoverflow.com/questions/47716205/domain-validation-using-the-notification-pattern)
    - [AggregateError - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
    - [Replacing Throwing Exceptions with Notification in Validations](https://martinfowler.com/articles/replaceThrowWithNotification.html)
- error handling
    - [例外処理コードレビュー集](https://zenn.dev/awwa500/articles/c99e56cc49412e)
    - [Exception filters | NestJS - A progressive Node.js framework](https://docs.nestjs.com/exception-filters)
    - 例外処理についていくつかあるが状況に応じてどれを使うかを分析した方がいいかもしれない
        - null を返す場合
        - throw errorする場合
        - return errorする場合
        - Result型を使う場合
- findメソッドを書くときにnullを返すか？
    - [https://dev.classmethod.jp/articles/error-handling-practice-of-typescript/](https://dev.classmethod.jp/articles/error-handling-practice-of-typescript/)
    - nullを返すのは基本的に良くない
        - 後続の処理でnullチェックが発生する
    - typescriptではnull ではなく、undefindが推奨されている
        - MSのコーディングガイドより
    - 解決策
        - エラーを返す
        - nullオブジェクトを返す
            - TSだとNullオブジェクトってあるのか？
        - PrismaとかでfindUnique使用時にnullが返る。このとき、findUniquメソッドをラップして、新しいfindメソッドを作成して、その中でエラーをかせせば良い
        - **Error型を作るのが一番良さそう**
            - カスタムエラークラスの作成
                - [https://go-to-k.hatenablog.com/entry/typescript-custom-error-class](https://go-to-k.hatenablog.com/entry/typescript-custom-error-class)
            - 無効な引数やロジックのエラーを示す際
                - Invalidから始まる名前にする
                    - InvalidEmailAdress
            - 実行時例外を返す場合
                - “Sorry, I . . . .” で終わるワードを名前にする
                - CouldNotFindProduct, CouldNotStoreFile, CouldNotConnect
- early returnにもメリデメがあるぽい
    - [https://medium.com/swlh/return-early-pattern-3d18a41bba8](https://medium.com/swlh/return-early-pattern-3d18a41bba8)
    - 基本的には、早くフェイルパスを書いてしまい、ハッピーパスは最後に返すことになる

## 開発メモ

- インフラ層の責務について
- [https://terasolunaorg.github.io/guideline/public_review/ImplementationAtEachLayer/DomainLayer.html#id3](https://terasolunaorg.github.io/guideline/public_review/ImplementationAtEachLayer/DomainLayer.html#id3)
    - DBを複数回叩く場合、インフラ層の責務はどうなるんだろう
	    - →基本的にアプリケーション層で書く
- クラスをステートレスに設計しろとは具体的にどういうこと？
	- クラスが状態を、ライフサイクルをもたないということ。具体的には、毎回、new して新しいインスタンス化を行うということ
- 変数名に、オブジェクトの名前も加えるか？
    - 例えば、求人タイトルとした場合、jobTitleのような命名にするか
    - こうすれば、変数名単体としてはわかりやすいが、コードの中では、job.JobTitleのようになり冗長な気もする
- 現在、VOの実装としてDTOを定義しているが、これで正しいのだろうか？
    - [Is it a DTO or a Value Object? | Matthias Noback](https://matthiasnoback.nl/2022/09/is-it-a-dto-or-a-value-object/)
- DTOの変更容易性を高めたい #DTO
    - どうすればいいのだろうか
    - DTOをあたいオブジェクトで生成してしまっている

- 非同期処理について #asyncronous
    - TypescriptのPromiseやasync/awaitとイベントソーシングによる非同期の違いがわからなくなってきた
    - おそらく、そもそも、どうやって、非同期処理を受け取っているかをちゃんと理解する必要がありそう
    - どういう時に非同期が欲しいのか、いらないのかを理解した方が良さそう
- QR Code について　#QRcode
    - QRcodeにはhttpのメソッドとかも含めるの？
    - [System Design — QR code generation | by Krutsilin Siarhei | Medium](https://medium.com/@krutilin.sergey.ks/system-design-qr-code-generation-37c4262bbc55)
    - [Dynamic QR Code - PayPay Open Payment API Documentation](https://www.paypay.ne.jp/opa/doc/jp/v1.0/dynamicqrcode#section/Dynamic-QR-Code)
    - QRコードのトランザクションについて
        - [https://medium.com/@shivam_99875/system-design-of-qr-code-based-payment-transactions-9b1b7276335b](https://medium.com/@shivam_99875/system-design-of-qr-code-based-payment-transactions-9b1b7276335b)
        - [https://docs.antom.com/ac/transactionqrcodenew/intro](https://docs.antom.com/ac/transactionqrcodenew/intro)
        - paypayのQRコード用ツール
            - [https://github.com/paypay/paypayopa-sdk-node](https://github.com/paypay/paypayopa-sdk-node)
    - QRコード生成パッケージ
        - [https://github.com/soldair/node-qrcode](https://github.com/soldair/node-qrcode)
        - [https://github.com/ushelp/EasyQRCodeJS-NodeJS](https://github.com/ushelp/EasyQRCodeJS-NodeJS)
    - 画像のエンコード方法がわからないから、何を取ればいいかがわかっていない
    - [JWT(JSON Web Token)をQRコードに埋め込んで表示 / 処理してみる #QRcode - Qiita](https://qiita.com/wakaken/items/1754d7186da4717d2b44)
- アプリケーションで時間をどう扱うか？
	- [Branded Typesで日時の複雑さと戦う - Speaker Deck](https://speakerdeck.com/sajikix/fighting-date-time-complexity-with-branded-types?slide=14)

# DDD (Domain-Driven Design)
- [Modeling Relationships in a DDD Way · Enterprise Craftsmanship](https://enterprisecraftsmanship.com/posts/modeling-relationships-in-ddd-way/)
- [関連のモデリング - kawasima](https://scrapbox.io/kawasima/%E9%96%A2%E9%80%A3%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AA%E3%83%B3%E3%82%B0)

- [How Shopify Handles 30TB of Data Every Minute with a Monolithic Architecture | by Himanshu Singour | Medium](https://medium.com/@himanshusingour7/how-shopify-handles-30tb-of-data-every-minute-with-a-monolithic-architecture-cad54df86955)
	- モジュラーモノリスの作り方として参考になりそう
## エンティティ
- **状態遷移の設計**
    - [7つの入金外部サービスと連携して分かった実践的な”状態管理”設計パターン3選 | Kaigi on Rails 2022 - inSmartBank](https://blog.smartbank.co.jp/entry/2022/11/04/120000)
    - [決済基盤の整合性設計を仕様から決める。バクラク請求書発行のカード決済における2つの判断 - LayerX エンジニアブログ](https://tech.layerx.co.jp/entry/payment-consistency-decision)
    - [Model Once, Represent Everywhere: UDA (Unified Data Architecture) at Netflix | by Netflix Technology Blog | Netflix TechBlog](https://netflixtechblog.com/uda-unified-data-architecture-6a6aee261d8d)
## 値オブジェクト
- **値オブジェクトと構造**
    -  [再帰的な構造のデータの同値性判定はどうしたらいいか - 貳佰伍拾陸夜日記](https://tarao.hatenablog.com/entry/deep-equality)
    - 値のコレクションクラスから取得するときに、readonlyで取得するやつ
        - [読み取り専用の配列 (readonly array) | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/array/readonly-array)
## 集約
- **集約とトランザクション**
    -  [Crossing aggregate boundaries · Vladimir Khorikov](https://khorikov.org/posts/2022-06-13-crossing-aggregate-boundaries/)
    - [Modeling Relationships in a DDD Way · Enterprise Craftsmanship](https://enterprisecraftsmanship.com/posts/modeling-relationships-in-ddd-way/)
    - [Implementing DDD Aggregates that have dependencies.](https://groups.google.com/g/dddcqrs/c/25UposNGcdk?pli=1)
    - [Processing multiple aggregates - transactional vs eventual consistency — Kamil Grzybek](https://www.kamilgrzybek.com/blog/posts/processing-multiple-aggregates-transactional-vs-eventual-consistency)
## イベント駆動
- ドメインイベントについて #ドメインイベント
    - ドメインイベントはある出来事を時系列に保管するためのオブジェクト
    - ドメインイベントはイミュータブルである必要がある、なぜなら、過去に起こった出来事は未来においてもその状態が不変でなければいけないから
- 集約間の通信について #集約
    - [[DDD] 戦術的設計パターン Part 4 整合性](https://zenn.dev/levtech/articles/4cdb1dd410d5db)
    - イベント発行はオブザーバーパターンを使うべきか
        - [DDD Part 2: Tactical Domain-Driven Design | Vaadin](https://vaadin.com/blog/ddd-part-2-tactical-domain-driven-design)
        - [Domain Event | dondakeshimoの丸太](https://www.dondakeshimo.com/posts/2024-05-06-domain-event-design)
        - [https://stackoverflow.com/questions/47222680/ddd-how-handle-transactions-in-the-returning-domain-events-pattern](https://stackoverflow.com/questions/47222680/ddd-how-handle-transactions-in-the-returning-domain-events-pattern)
        - [https://stackoverflow.com/questions/36047846/proper-way-to-add-an-entity-to-an-aggregate-root-in-ddd](https://stackoverflow.com/questions/36047846/proper-way-to-add-an-entity-to-an-aggregate-root-in-ddd)
- イベント駆動について
	- [How does it differs from CQRS EventBus ? · Issue #44 · nestjs/event-emitter](https://github.com/nestjs/event-emitter/issues/44)
- モジュラーモノリス
    - [NestJSによるモジュラーモノリスの実装 - 複数ベンダーでの協業開発 #Node.js - Qiita](https://qiita.com/okikusan-public/items/bbee497d32832690a30e)
    - [モジュラーモノリス導入がもたらした功罪 - hacomono TECH BLOG](https://techblog.hacomono.jp/entry/2025/08/15/110000)
### 業務ロジックの実装
- [型の粒度設計 - kawasima](https://scrapbox.io/kawasima/%E5%9E%8B%E3%81%AE%E7%B2%92%E5%BA%A6%E8%A8%AD%E8%A8%88)
# DB
## DBの中身
- マイグレーションコンテナは一緒に書いて良い？
- compose.dev.yamlとかcompose.stag.yamlとかに書いたほうがいいかも
- マイグレーションする場合、どうやるか検討が必要かも
	-  [O/Rマッパー×コンテナ技術使用時のマイグレーション実行タイミングについて](https://zenn.dev/faycute/articles/4735ce7b4342c7)
- DBとメモリのIOについて
- mysqlのcharとvarchrの違い
  - ７文字を占有した場合に、なぜ8バイトが占有されるのか、1文字分は、ポインタとからしいが、仕組みが分からない
  - 関連するキーワード
    - メモリ
      - allocate
      - ポインタを引き回す
      - javaのvmだとヒープに入る
      - ＧＣで遅くなる
- DBの自作とか面白そう
	- [自作RDBMSやろうぜ! |](https://ryogrid.github.io/dbms-jisaku/)
- Postgresqlの仕組みを知る
	- [PostgreSQL 18\.0文書](https://pgsql-jp.github.io/current/html/)
	- [MySQL/Postgres におけるトランザクション分離レベル \- Speaker Deck](https://speakerdeck.com/mpyw/postgres-niokerutoranzakusiyonfen-li-reberu)
	- [Learning PostgreSQL Internals · Paul Ramsey](https://blog.cleverelephant.ca/2022/10/postgresql-links.html)
	- [Transaction isolation in PostgreSQL\. By reading source code \| by Elantsev \| Medium](https://medium.com/@elantsev/transaction-isolation-in-postgresql-by-reading-source-code-be6795ae3f6d)
	- [はじめに · PostgreSQL Internals](https://www.postgresqlinternals.org/)
	- [interdb\.jp/pg/](https://www.interdb.jp/pg/)
	- [PostgreSQL のトランザクション & MVCC & スナップショットの仕組み](https://www.nminoru.jp/~nminoru/postgresql/pg-transaction-mvcc-snapshot.html)
### コネクションプール
- [Go 1.26 の database/sql 内部実装から読み解くコネクションプールの挙動と設定方針 - CADDi Tech Blog](https://caddi.tech/2026/05/20/113000)
## インデックス
- 検索時のインデックスについて #index
    - hashとか使うのだろうか？
    - データベースのカラムにハッシュを持って検索効率を上げるのってない気がする
    - なぜインデックスを使うと早くなるのか
    - どの値にインデックスをつけるとよいのか
### パフォーマンス
- [How PostgreSQL Scans Your Data | Stormatics](https://stormatics.tech/blogs/how-postgresql-scans-your-data)
- [PostgreSQLがインデックスを使ってくれなくてスロークエリが発生していた件 〜 PostgreSQLのコスト計算ロジックを深掘りする 〜 - Hello Tech](https://tech.hello.ai/entry/2026/02/26/100132)
## Transaction
- トランザクション
    - [https://note.com/watanabe_kf1983/n/n41f57b690c56](https://note.com/watanabe_kf1983/n/n41f57b690c56)
    - トランザクションで囲う範囲はどのように決めるのか？
	    - 集約で囲んだ範囲は本当にトランザクションなのか
		    - [集約とトランザクション境界に関するメモ - 男爵が書く](https://dnskimox.hateblo.jp/entry/2018/12/22/154038)
		    - [集約の境界と整合性の維持の仕方に悩んで2ヶ月ぐらい結論を出せていない話 - kbigwheelのプログラミング・ソフトウェア技術系ブログ](https://kbigwheel.hateblo.jp/entry/2018/12/03/aggregate-and-consistency)
		    - [DDDにおいて、なぜ複数の集約にまたがってトランザクションをかけてはいけないのか（multiple aggregates in one transaction） - pospomeのプログラミング日記](https://www.pospome.work/entry/20161023/1477206615)
    - 2相ロックと楽観並行制御を使い分ける基準を見極められるようにしたい
    - MVCC
	- MySQLのネクストキー
	- 合意アルゴリズム
		- 2相コミット
	- ある集約でトランザクションを貼るときを考える。そこでは、別の集約からreadを呼び出し検証してから、集約の更新などを行う。この時、別集約のreadはトランザクションの内部に入れるべきか？
	- prismaのトランザクションの挙動が分からない
		- rollbackってどうなっている？
		- データベースのisolation levelをどうやって満たしている
	- ACIDの亜種
		- [L2AW theorem](https://law-theorem.com/)
- バッチについて
	- [とあるコドモン開発部の日常〜大規模データメンテナンスバッチの設計編〜 \- コドモン Product Team Blog](https://tech.codmon.com/entry/2025/09/04/153653)
	- 非機能要件についても、イベントストーミングやるとうまくいきそう
	- バッチとストリームの処理がわからない
		- ストリームって何？
	- [バッチ処理の改善〜トランザクション範囲の最小化〜 \- Timee Product Team Blog](https://tech.timee.co.jp/entry/2022/05/26/113319)
		- [「トランザクション張っておけば大丈夫」と思ってませんか？ バグの温床になる、よくある実装パターン](https://zenn.dev/tockn/articles/4268398c8ec9a9)
		- [MySQL/Postgres におけるトランザクション分離レベルと発生するアノマリーを整理する](https://zenn.dev/mpyw/articles/rdb-transaction-isolations)
- databaseでカウンタなどの実装について
	- [Sharding Pinterest: How we scaled our MySQL fleet | by Pinterest Engineering | Pinterest Engineering Blog | Medium](https://medium.com/pinterest-engineering/sharding-pinterest-how-we-scaled-our-mysql-fleet-3f341e96ca6f)
	- [The Slotted Counter Pattern — PlanetScale](https://planetscale.com/blog/the-slotted-counter-pattern)
	- [Goで学ぶ並行処理パターン：Fan-out/Fan-inパターン #Go - Qiita](https://qiita.com/y-t0910/items/7549f3379b024fdedae1)
- トランザクションそろそろ使いこなしたい、囲う範囲とロックをどこでかけるか
    - [`SELECT FOR UPDATE = 悲観ロック` という理解が誤りであると気づいた話 - HackMD](https://hackmd.io/@imaharu/rJ2O3JCQK)
    - [The LMAX Architecture](https://martinfowler.com/articles/lmax.html)
    - JavaのORMの作者　トランザクションの知見がやばい
        - [Spring Transaction Best Practices - Vlad Mihalcea](https://vladmihalcea.com/spring-transaction-best-practices/)
        - [Transactions Archives - Vlad Mihalcea](https://vladmihalcea.com/category/transactions/)
        - [Ledger: Stripe's system for tracking and validating money movement](https://stripe.com/blog/ledger-stripe-system-for-tracking-and-validating-money-movement)
- コンピュータ・サイエンティストのための会計知識よさげ
	- [Accounting for Computer Scientists — Martin Kleppmann's blog](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html)
- For Updateは修羅の道になるかもしれない
	- [Timee Product Team Blog](https://tech.timee.co.jp/)
- 輻輳に着想を得たTransaction制御
	- [How Uber Conquered Database Overload: The Journey from Static Rate-Limiting to Intelligent Load Management | Uber Blog](https://www.uber.com/en-GB/blog/from-static-rate-limiting-to-intelligent-load-management/)
	- [Adaptive Concurrency Control for Mixed Analytical Workloads | by Dan Kleiman | Klaviyo Engineering](https://klaviyo.tech/adaptive-concurrency-control-for-mixed-analytical-workloads-51350439aeec)
	- [MySQL/Aurora/TiDBロック入門 – 第１回トランザクション分離レベル｜技術ブログ｜北海道札幌市・宮城県仙台市のVR・ゲーム・システム開発 インフィニットループ](https://www.infiniteloop.co.jp/tech-blog/2024/05/mysql-lntro-locking-1-transaction-isolation/)
### データベース (PostgreSQL)
-  [PostgreSQL: Documentation: 18: 13.2. Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html)
- [5.9. Serializable Snapshot Isolation :: Hironobu SUZUKI @ InterDB](https://www.interdb.jp/pg/pgsql05/09.html)
### 分散システム
-  [DebeziumでCDCを構築してみた](https://zenn.dev/stafes_blog/articles/ikkitang-691e9913644952#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%A7debezium%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99%E3%81%AB%E3%81%AF)
- [Google Code Archive - Long-term storage for Google Code Project Hosting.](https://code.google.com/archive/p/gregors-ramblings-ja/wikis/18_starbucks.wiki)
- [Sagas — Part 3: Choreography Instead?](https://www.ashrafmageed.com/sagas-part-3-choreography-instead/)
- [2025年の振り返り（技術編） - 理念と共に、最も困難で狂気の選択を考え続けて諦めない](https://bootjp.me/2026/01/02/2025%E5%B9%B4%E3%81%AE%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A%EF%BC%88%E6%8A%80%E8%A1%93%E7%B7%A8%EF%BC%89)
### 分散トランザクション
- [分散サービスのトランザクションでアンチパターンを設計してしまった話　〜とその改善〜](https://zenn.dev/finatext/articles/481416ea9afa5c)
- [予約処理で結果整合を実現するための実装パターン - 一休.com Developers Blog](https://user-first.ikyu.co.jp/entry/2025/12/13/185316)

## テーブル設計
- ステータスってDBのテーブルで管理するものなのだろうか？違う気がする
    - [https://zenn.dev/rsugi/articles/8a939d7bd2f60a](https://zenn.dev/rsugi/articles/8a939d7bd2f60a)
    - [https://amamanamam.hatenablog.com/entry/2023/09/21/192858](https://amamanamam.hatenablog.com/entry/2023/09/21/192858)
    - 静的なenumをデータベースのテーブルで表現すんの本当にやめてほしい by nonakasan
    - 「失敗から学ぶRDBの正しい歩き方」第5章　フラグの闇
- [テーブルのカラム名に迷ったんで、英語圏で仕事しているエンジニアに聞いてみた | かきエンジン](https://kaki-engine.com/how-to-name-columns-in-a-table/#toc14)
- ユーザーテーブル作る際に参考になった
	- [ユーザ情報を保存する時のテーブル設計 \- そーだいなるらくがき帳](https://soudai.hatenablog.com/entry/2018/05/01/204442)
- updateするのと、delete insertどっちがいいのだろうか？
	- upsertはアンチパターンなのか？どういうときに使うのか？
- updateをする場合と、createとdeleteでupdateする場合、どちらがいいのか
- 削除系について
	- 論理削除
	- 物理削除
	- ゴミ箱テーブル　退会テーブルなど
## ORM
### Prisma
- prisma
	- prismaのトランザクションの仕組みがよくわからない
		- AsyncLocalStargeの仕組みがわからない
		- 局所スレッドストレージみたいので調べればよい？
	- prismaちょっとあぶないかも
		- [Should You Stop Using Prisma? Why Database ORMs Might Be the Worst Thing That Happened to Backend Development | by Sohail Saifi | Medium](https://medium.com/@sohail_saifi/should-you-stop-using-prisma-421aba045846)
	- prismaのE2Eテストどうする門外
		- [The Ultimate Guide to Testing with Prisma: End-To-End Testing](https://www.prisma.io/blog/testing-series-4-OVXtDis201)
-  Prisma 応用
	- prismaでクエリ時の型を作成する
		- [Prisma validator | Prisma Documentation](https://www.prisma.io/docs/orm/prisma-client/type-safety/prisma-validator)
	    - [How TypeScript 4.9 `satisfies` Your Prisma Workflows](https://www.prisma.io/blog/satisfies-operator-ur8ys8ccq7zb)
- Prisma & データバリデーション
	- [Data validation with CHECK constraints (PostgreSQL) | Prisma Documentation](https://www.prisma.io/docs/concepts/components/prisma-schema/check-constraints)
	- [Offset / Cursor Paginationについて - Speaker Deck](https://speakerdeck.com/mizchi/offset-cursor-pagination-ni-tu-ite)
	- [Pagination (Reference) | Prisma Documentation](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)
	- [Secure API file uploads with magic numbers | Transloadit](https://transloadit.com/blog/2022/04/secure-file-uploads/)
	- [File Validations Using Magic Numbers In NodeJS Express Server | by Sridhar - Medium](https://medium.com/%40sridhar-s/file-validations-using-magic-numbers-in-nodejs-express-server-8b0665f80f9e)
- コネクションプール
	- prismaのエンジンをnodejs-postgresql
		- [PostgreSQL database connector | Prisma Documentation](https://www.prisma.io/docs/orm/overview/databases/postgresql)
		- [Welcome – node-postgres](https://node-postgres.com/)
## SQL
- SQL
	- SQLが実行される順番がわかっていない
	- SQLが書けない
- 実行計画
	- [PostgreSQL実行計画可視化ツールおすすめ #PostgreSQL - Qiita](https://qiita.com/sasaki_hir/items/da302aafecb77038c33f)
- CTEについて
	- [Good CTE, bad CTE | boringSQL](https://boringsql.com/posts/good-cte-bad-cte/)

## 検索
- [The Evolution of Uber's Search Platform | Uber Blog](https://www.uber.com/en-JP/blog/evolution-of-ubers-search-platform/)

# クラウド
## AWS

### ECS
- SecretManagerを更新すると、サーキットブレーカーが動き、ロールバックが走るコレがあまり良くわからなかたので、メモ
    - [Amazon ECS デプロイサーキットブレーカーが障害を検出する方法 - Amazon Elastic Container Service](https://docs.aws.amazon.com/ja_jp/AmazonECS/latest/developerguide/deployment-circuit-breaker.html)

- [AWS コンテナ運用設計に関するアプローチ #ECS - Qiita](https://qiita.com/Shmwa2/items/be5caef0407cb4746517)
- [Amazon Route 53を整理してみた #AWS - Qiita](https://qiita.com/zumax/items/f9b617d3d8df6ff1d4ab)
### Storage
- S3
	- ウイルススキャンについて
		- [sa7mon/S3Scanner: Scan for misconfigured S3 buckets across S3-compatible APIs!](https://github.com/sa7mon/S3Scanner)
	- 署名付きURLについて
		- [S3エミュレーションでrustfsを使ってみたメモとPresigned URLの仕組み | フューチャー技術ブログ](https://future-architect.github.io/articles/20260403a/)
		- [署名付き AWS API リクエストを作成する - AWS Identity and Access Management](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/reference_sigv-create-signed-request.html)
		- [AWS の API を理解しよう！〜中級編 : リクエストの署名と CLI/SDK の仕組み - 変化を求めるデベロッパーを応援するウェブマガジン | AWS](https://aws.amazon.com/jp/builders-flash/202210/way-to-operate-api-2/)
		- [ECS Fargate タスクで発生するメタデータエラーのトラブルシューティング | AWS re:Post](https://repost.aws/ja/knowledge-center/ecs-fargate-metadata-errors)
			- [Code search results](https://github.com/search?q=repo%3Aaws%2Faws-sdk-js-v3%20AWS_CONTAINER_CREDENTIALS_RELATIVE_URI&type=code)

## メッセージング
- [Review: Leases: An Efficient Fault-Tolerant Mechanism for Distributed File Cache Consistency](https://emptysqua.re/blog/review-leases-for-distributed-file-cache-consistency/)
- [Leases.pdf](https://web.eecs.umich.edu/~mosharaf/Readings/Leases.pdf)
- [The advantages of queues on logs — Jack Vanlightly](https://jack-vanlightly.com/blog/2023/10/2/the-advantages-of-queues-on-logs)
- [Message Delivery Reliability • Akka core](https://doc.akka.io/libraries/akka-core/current/general/message-delivery-reliability.html)
- [乗り越えられないキューバックログの回避](https://aws.amazon.com/jp/builders-library/avoiding-insurmountable-queue-backlogs/)
- [Amazon Simple Queue Serviceとは? - Amazon Simple Queue Service](https://docs.aws.amazon.com/ja_jp/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
- SNSとSQSのFIFOについて
    - [Amazon SNS FIFO topic example use case - Amazon Simple Notification Service](https://docs.aws.amazon.com/sns/latest/dg/fifo-example-use-case.html)
    - [Amazon SNS メッセージの FIFO トピックの重複排除 - Amazon Simple Notification Service](https://docs.aws.amazon.com/sns/latest/dg/fifo-message-dedup.html)
    - [Amazon SNS デッドレターキュー - Amazon Simple Notification Service](https://docs.aws.amazon.com/ja_jp/sns/latest/dg/sns-dead-letter-queues.html)
    - [Fanout Amazon SNS notifications to Amazon SQS queues for asynchronous processing - Amazon Simple Notification Service](https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html)
    - [Amazon SNS トピックへ Amazon SQS キューをサブスクライブする - Amazon Simple Notification Service](https://docs.aws.amazon.com/ja_jp/sns/latest/dg/subscribe-sqs-queue-to-sns-topic.html)
    - [Invoking a Lambda function asynchronously - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)
    - [serverless/examples: Serverless Examples](https://github.com/serverless/examples/)

- Lambda SNS SQS Lambdaを行うために必要なこと
  - SNS SQS間のセキュリティ
      - [Amazon SNS のデータ保護ポリシーオペレーション - Amazon Simple Notification Service](https://docs.aws.amazon.com/ja_jp/sns/latest/dg/sns-message-data-protection-operations.html)
      - [顧客データオペレーション - AWS Key Management Service](https://docs.aws.amazon.com/ja_jp/kms/latest/cryptographic-details/customer-data-operations.html)
      - [Amazon SQS を使用したキューに対するサーバー側の暗号化の設定 - Amazon Simple Queue Service](https://docs.aws.amazon.com/ja_jp/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html)
      - [Defining Lambda function permissions with an execution role - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html)
  - terraformのdepends onがLambdaのロールで必要だったので
      - [depends_on meta-argument reference | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on)
      - [aws_sns_topic_subscription | Resources | hashicorp/aws | Terraform | Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic_subscription)
  - power-toolsでログの取得も行った
      - [Logger - Powertools for AWS Lambda (TypeScript)](https://docs.aws.amazon.com/powertools/typescript/latest/features/logger/)

## ElastiCashe
- クラスタモードについて理解したいお気持ち
    - [Valkey Documentation · Cluster tutorial](https://valkey.io/topics/cluster-tutorial/)
    - [Cluster tutorial · Valkey 日本語訳](https://mogile.web.fc2.com/valkey/topics/cluster-tutorial.html)
    - [イラストで理解するElastiCacheのスケーリング](https://zenn.dev/fdnsy/articles/727864f43d9e67)
    - [ElastiCache + Redis に出てくる概念と、クラスタモードごとの違い - nyamadoriの日記](https://nyamadori.hatenablog.com/entry/2017/09/12/103523)
    - [ElastiCache でシャードを使用する - Amazon ElastiCache](https://docs.aws.amazon.com/ja_jp/AmazonElastiCache/latest/dg/Shards.html)

## DynamoDB
- DynamoDBの細かい設定とかわからない
- DynamoDB + ElastiCashe
- DynamoのTTL対策
	- https://github.com/aws/aws-dotnet-distributed-cache-provider/blob/main/src/AWS.DistributedCacheProvider/DynamoDBDistributedCache.cs#L440-L446
- [DynamoDB TTL Best Practices | Aman | 2022 | Medium | Medium](https://amdhing.medium.com/amazon-dynamodb-ttl-best-practices-867897fceb3d)
- [DynamoDBでできないこと](https://zenn.dev/hsaki/articles/aws-dynamodb-non-suited)
- [AWS の NoSQL 入門 〜Amazon ElastiCache, Amazon DynamoDB〜](https://d1.awsstatic.com/events/jp/2017/summit/slide/D3T3-4.pdf)
- [Scaling DynamoDB: How partitions, hot keys, and split for heat impact performance (Part 1: Loading) | AWS Database Blog](https://aws.amazon.com/jp/blogs/database/part-1-scaling-dynamodb-how-partitions-hot-keys-and-split-for-heat-impact-performance/)
## Aurora
- 設定もよくわかっていない
	- [タイミーで蓄積された Aurora MySQL 運用ナレッジ─ 障害・チューニング・実践知を特別公開 - Timee Product Team Blog](https://tech.timee.co.jp/entry/2025/12/03/104738?timestamp=20251203)
	- [Ruby on Railsのテーブル設計とトランザクション処理 LT Night - connpass](https://findy.connpass.com/event/375098/)
- 結局postgresqlな気がする
- AutoScaringとか、自動で落とす設定とか書けていない

## ネットワーク
- Route53
	- [Amazon Route 53を整理してみた #AWS - Qiita](https://qiita.com/zumax/items/f9b617d3d8df6ff1d4ab)
- API Gateway
	- [Amazon API Gateway のチュートリアルとワークショップ - Amazon API Gateway](https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/api-gateway-tutorials.html)
	- [イラストで理解するAPI Gateway](https://zenn.dev/fdnsy/articles/86897abce0bbf5)
	- [Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/api_gateway_rest_api)

## セキュリティ
- [AWS セキュリティの全体像を理解しよう - 初学者が知るべき脅威と対策 | ドクセル](https://www.docswell.com/s/a-zara-n/5QX4YV-2025-09-11-182813#p1)
## IaC
- Terraform
  - きれいに書きたい
  - tf stateの管理方法がいまだによくわかっていない
  - [Terraform 変更を安全にレビューする — plan の読み方・CI destroy 検知・承認フロー設計](https://zenn.dev/ojt/articles/terraform-review-flow-design)
  - [Cyclenerd/terraform-google-wif-github: Terraform module to create a Google Cloud Workload Identity Pool and Provider for GitHub Actions](https://github.com/Cyclenerd/terraform-google-wif-github/tree/master)

# セキュリティ
- Webブラウザセキュリティをあまり理解できていない
	- [新卒エンジニア向けセキュリティ研修を開催しました - 弁護士ドットコム株式会社 Creators' blog](https://creators.bengo4.com/entry/2025/08/21/080000)
	- [設計・開発・テストにおけるセキュリティの実践と考え方を知ろう | ドクセル](https://www.docswell.com/s/a-zara-n/KPGX74-2025-08-14-143959#p146)
- 少しTrivyのMisconfigurationが気になる
- セキュリティエンジニアがビジネスに貢献するには
	- [「守る」から「攻める」へ。セキュリティエンジニアがビジネスに貢献するために - カミナシ エンジニアブログ](https://kaminashi-developer.hatenablog.jp/entry/2025/08/20/080000)
	- [secmon-lab/warren: AI-powered security alert management that reduces noise and accelerates response time](https://github.com/secmon-lab/warren)
	- [セキュリティ監視入門](https://mztn.notion.site/4a1b43b9101c4f669f32f805b2393206)
	- [m-mizutani/seccamp-2025-b1](https://github.com/m-mizutani/seccamp-2025-b1)
	- 脆弱性管理ツールインフラ
		- https://github.com/secmon-lab/octovy
- [Google Cloud が推奨セキュリティチェックリストを公開しました | DevelopersIO](https://dev.classmethod.jp/articles/google-cloud-recommended-security-checklist/)
## 脅威モデリング
- [Threat modeling for OAuth 2.0 via Security by Design approach using the Microsoft Threat Modeling tool [Part 1] | by Ashish Shrivastava | Medium](https://ashish-shri2015.medium.com/threat-modeling-of-openid-connect-and-oauth-2-0-8f2eda7d2123)
- [Threat modeling for OpenID Connect and OAuth 2.0 via Security by Design approach using the Microsoft Threat Modeling tool [Part 2] | by Ashish Shrivastava | Medium](https://ashish-shri2015.medium.com/threat-modeling-of-openid-connect-and-oauth-2-0-1f6596125acf)
- [arXiv Authorization & Authentication — arXiv AuthN/Z 0.1 documentation](https://arxiv.github.io/arxiv-auth/index.html)
- S3の脅威モデリング
	- [trustoncloud/threatmodel-for-aws-s3: Threat model for Amazon S3](https://github.com/trustoncloud/threatmodel-for-aws-s3)
- [リスク管理とは何か｜きゅーい](https://note.com/kiwiwi/n/n9931bca148d0)
## 認証認可
- opt認証
- フェデレーションとは何か？
-  OAuth
	- [Auth屋さんの本](https://zenn.dev/satoken/articles/oauth-funiki)
- [【Flutter】Flutterで安全にOAuthトークンを保存するための完全ガイド #Dart - Qiita](https://qiita.com/nozomi2025/items/aa833f96377a2de69b47)
- [セキュリティエンジニアはこう見る。開発時に認可制御不備を怪しむべき実装パターン10選 - GMO Flatt Security Blog](https://blog.flatt.tech/entry/authz_assessment_view)

-  JWT
	- 仕組みよくわかってないし、cookieとの違いわかっていない
	- [OAuthとOIDCの前にJWTから勉強しよう](https://zenn.dev/nttdata_tech/articles/cdf46cbf625147)
	- [JWTの検証はちゃんとするべき](https://zenn.dev/il/articles/9ac239f9426984)
	- [Mike Jones: self-issued – Musings on Digital Identity](https://self-issued.info/)
	- [セキュリティ視点からの JWT 入門 \- blog of morioka12](https://scgajge12.hatenablog.com/entry/jwt_security)
	- [OAuthの仕組みを説明してHonoで実装してみる](https://zenn.dev/levtech/articles/a6e8910df5baa0)

### 認可の設計
- [Authorization Concepts | OpenFGA](https://openfga.dev/docs/authorization-concepts)
- [atc19-pang.pdf](https://www.usenix.org/system/files/atc19-pang.pdf)
- [Oso - Authorization Academy](https://www.osohq.com/academy)

# DevOps
## Git
- commit messageについて #git
    - 一応推奨のルールが有る
        - サマリーを命令形で50文字以内で書く
        - それ以上のテキストを書く場合は、2行めを空行にする
        - 好きなだけテキストを追加してよいが、幅が72文字以内になるようにフォーマットする
        - 日本語で書く場合は半分にする
    - **何をどのように**変更したのかという質問に対する答えは他の場所で見つけられます。したがって、コミットメッセージはなぜその変更をしたのか、なぜその形になっているのかを説明する
    - 次のように書いていけばいいかな
        - 何をしたのか？
        - それによって何が嬉しいのか？なぜそうしたのか？
    - [tbaggery - A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
    - 過去形ではなく、命令形で書く
- pull Requests #git
    - [10 tips for better Pull Requests](https://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/)
    - プルリクエストの粒度を決めて、レビューを楽にしたい
	    - [Findyの爆速開発を支える、価値提供を最優先にするための開発手法 - Findy Tech Blog](https://tech.findy.co.jp/entry/2024/11/18/070000)
## CICD
- [増えすぎた GitHub Actions を「3 層アーキテクチャ」で整理した話](https://zenn.dev/simpleform_blog/articles/99cea8c1af0657)
	- action散らばりそうだから、層分けするのよさそう
- [GitHub ActionsにおけるStep/Job/Workflow設計論](https://zenn.dev/hsaki/articles/github-actions-component)
- [GitHubの監査ログを定期的にexportして保存する - 10X Product Blog](https://product.10x.co.jp/entry/2023/12/13/170742)

## コードレビュー
- [【日本語対応】GitHub Copilot コードレビュー機能のTips](https://github.blog/jp/2024-04-10-github-copilot-code-reviewing-tips/)
- [コードレビューの方法 | google-engineering-practices](https://google.github.io/eng-practices/review/reviewer/)

# Observability
## SRE
- [Snowflakeがオブザーバビリティー分野に進出--「可観測性はデータ問題だ」 - ZDNET Japan](https://japan.zdnet.com/article/35248903/)
- [「SREは信頼性、PEは生産性」に引っかかったので、"信頼性"を考え直してみる - SRE Magazine](https://sre-magazine.net/articles/13/hym/)
- [Google SRE - Site Reliability engineering](https://sre.google/)

## SLO SLI
- [Google SRE - SLO Documnets: Game Services API, HTTP, Score](https://sre.google/workbook/slo-document/)
- [[PUBLIC] The Art of SLOs – Participant Handbook - JA](https://static.googleusercontent.com/media/sre.google/ja//static/pdf/jp-art-of-slos-handbook-pdf-a4.pdf)
- [小さくはじめるSLI/SLO ～育てながら組織に定着させる実践知～ - Speaker Deck](https://speakerdeck.com/nari_ex/slos-building-adoption-through-continuous-growth)
- [信頼性向上のためのSLI/SLO導入vol.3 - サービスへの導入事例](https://techblog.lycorp.co.jp/ja/20260513a)
## 監視
- [恵贈御礼「入門 監視」読了 - YAMAGUCHI::weblog](https://ymotongpoo.hatenablog.com/entry/2019/03/08/090901)
## OpenTelemetry
- [社員に何もさせずにClaude Code利用ログを集める ── 数百名規模のOpenTelemetry収集基盤の構築 - ZOZO TECH BLOG](https://techblog.zozo.com/entry/claudecode-otel)

## Lambdaのトレースについて
- [AWS LambdaとAWS X-Ray - AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/xray-services-lambda.html)
- [Visualize Lambda function invocations using AWS X-Ray - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html)
- [Amazon EventBridge でスケジュールされたルール (レガシー) を作成する - Amazon EventBridge](https://docs.aws.amazon.com/ja_jp/eventbridge/latest/userguide/eb-create-rule-schedule.html)
- [コンテナでデプロイした Lambda から OpenTelemetry でトレースを X-Ray に送る | Amazon Web Services ブログ](https://aws.amazon.com/jp/blogs/news/sending-traces-from-containerized-lambda-to-xray/)

## Logging
- ログ設計の方針
	- まず、開発者目線、マーケ、営業、運用、セキュリティ、様々な関係者目線で、「自分たちが知りたい情報」をログにしていくべき
	- レイヤごとに知りたい情報を決める
		- インフラ / プレゼンテーション / アプリケーション / データベース
	- 何が原因でエラーがおきたのかをわかりやすく表現する
	- ログフォーマット（何を伝えるか？）
	- ログ出力でやらないほうがいいこと
		- 個人情報の出力
	- [丁度ええ! ロギング - kawasima](https://scrapbox.io/kawasima/%E4%B8%81%E5%BA%A6%E3%81%88%E3%81%88!_%E3%83%AD%E3%82%AE%E3%83%B3%E3%82%B0)
	- [ロギング設計大全 - kawasima](https://scrapbox.io/kawasima/%E3%83%AD%E3%82%AE%E3%83%B3%E3%82%B0%E8%A8%AD%E8%A8%88%E5%A4%A7%E5%85%A8)
	- [NestJSでCloud Loggingのための構造化ロギング](https://zenn.dev/ubie_dev/articles/4f2d5607875589)
	- [Repeatable execution](https://blog.ploeh.dk/2020/03/23/repeatable-execution/)
	- [バッチ処理の通知・アラート管理 - CARTA TECH BLOG](https://techblog.cartaholdings.co.jp/entry/2016/07/05/080000)
- [構造化ログのタイムスタンプ形式 - methaneのブログ](https://methane.hatenablog.jp/entry/2024/03/05/%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%AD%E3%82%B0%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%97%E5%BD%A2%E5%BC%8F)
- [構造化ログから構造化イベントへ - methaneのブログ](https://methane.hatenablog.jp/entry/2024/03/07/%E6%A7%8B%E9%80%A0%E5%8C%96%E3%83%AD%E3%82%B0%E3%81%8B%E3%82%89%E6%A7%8B%E9%80%A0%E5%8C%96%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%B8)
- [AWSでの法令に則ったログ設計及び実装/分析 - Adwaysエンジニアブログ](https://blog.engineer.adways.net/entry/2023/10/20/140000)
- [Amazon RDSの監査ログを保全する信頼性の高いソフトウェアの設計と実装について - Pepabo Tech Portal](https://tech.pepabo.com/2025/04/16/colorme-rds-audit-logs-s3/)
- イベントログについて #ES
    - [Event Sourcing vs Audit Log](https://www.kurrent.io/blog/event-sourcing-audit)
- Fluentd
	- ログをどう転送しているかわかっていない
	- [fluent-bit これぐらいはやった方がいい設定](https://zenn.dev/fujiwara/scraps/f779bbe88a3e32)
	- [Go のエラーにコンテキストを持たせていい感じにロギングする - カミナシ エンジニアブログ](https://kaminashi-developer.hatenablog.jp/entry/2025/12/17/080000)
- TypescriptにおけるLoggerの実装をどうするか？
	- Proxy
		- [Proxy - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
		- [Stop Passing Request Data Around Your NestJS Application | by Corals | Elementor Engineers | Medium](https://medium.com/elementor-engineers/stop-passing-request-data-around-your-nestjs-application-9893ac073821)
		- [Papooch/nestjs-cls](https://github.com/Papooch/nestjs-cls)
		- [The NestJS Request Context Problem: Request-Scoped DI vs AsyncLocalStorage (ALS)](https://pas7.com.ua/blog/en/nestjs-request-context-als-2026)
		- [Injection scopes | NestJS](https://docs.nestjs.com/fundamentals/injection-scopes)
		- [Dynamic modules | NestJS](https://docs.nestjs.com/fundamentals/dynamic-modules)
		- [Middleware | NestJS](https://docs.nestjs.com/middleware)
- [「私たちのログ配送、コストかかりすぎ？」fluentdのログ配送に関するコスト削減に取り組んだお話 - freee Developers Hub](https://developers.freee.co.jp/entry/cost-down-fluentd)
- Node.jsのプロセスレベルで起こるログについて
    - main.tsで起こるレベルのログってどうやって処理すればいいかいまいちわかってねえ
    - [Window: unhandledrejection イベント - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Window/unhandledrejection_event)

### FEのログについて
- ブラウザのログをどう取るか
    - [aws-observability/aws-rum-web: Amazon CloudWatch RUM Web Client](https://github.com/aws-observability/aws-rum-web/tree/main)
    - [CloudWatch RUM - Amazon CloudWatch](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM.html)

# CS、低レイヤ
- 待ち行列で性能測るやつ
	- [Surprising Economics of Load-Balanced Systems - Marc's Blog](https://brooker.co.za/blog/2020/08/06/erlang.html)
- Node.jsのパフォーマンスの測り方
	- [メモリー管理 \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Memory_management)
- アルゴリズムマジで弱すぎるのでちゃんとやりたい
- [What every SRE should know | Viacheslav Biriukov](https://biriukov.dev/)
## 正規表現
- [404 Blog Not Found : 「PHP使いはもう正規表現をblogに書くな」と言わせないでくれ](https://dankogai.livedoor.blog/archives/51189905.html)
- [電話番号の正規表現はどうしたらいいのか - ノンカフェインであなたにやさしい](https://akinobu.net/entry/2017/05/31/194421)
- 正規表現AIに書かせているので原理ぐらいは知っておきたい
-  [正規表現のはなし \| ドクセル](https://www.docswell.com/s/usami-k/Z389Q2-regex-theory#p1)
-  [正規表現の話　＠第25回日曜数学会 \- ニコニコ動画](https://www.nicovideo.jp/watch/sm41285650)
- [Foundations of Computer Science](http://infolab.stanford.edu/~ullman/focs.html)
- [%CPU Utilization Is A Lie \- Brendan Long](https://www.brendanlong.com/cpu-utilization-is-a-lie.html)
- [Goroutine はなぜ軽量スレッドと称されるのか](https://www.ren510.dev/blog/goroutine-concurrency)
- [論理的思考の放棄](https://softether.hatenadiary.org/entry/20070324/p1)

# Document作成
## ADR (Architecture Decision Record)
- [俺たちはこう ADR（Architecture Decision Record）を書いている - giftee Tech Blog](https://tech.giftee.co.jp/entry/2023/10/02/120000)
- [Architecture 101 — Architecture Decision Record (ADR) | by Anji… | Medium](https://anjireddy-kata.medium.com/architecture-101-architecture-decision-record-adr-dfea0aebd36b)
## デザインドキュメント
-  [175. 良いデザインドキュメントの書き方 - Today I Learned - Podcast on Spotify](https://open.spotify.com/episode/59Cl6e9B57I5vE3b2NjzQC)
- [eugeneyan/ml-design-docs](https://github.com/eugeneyan/ml-design-docs/tree/main)
- [ユーザーストーリーを書くのがかったるいので「背景・目的・対応内容」に落ち着いた話](https://zenn.dev/yuichi_dev/articles/5da9509fe04c2d)
- [How to Write an Effective Software Design Document · Refactoring English](https://refactoringenglish.com/excerpts/write-an-effective-design-doc/)
## 技術記事
- [Supercharge Your Tech Writing with Claude Code Subagents and Agent Skills | Medium](https://medium.com/google-cloud/supercharge-tech-writing-with-claude-code-subagents-and-agent-skills-44eb43e5a9b7)

# AI
- Figmaとかと連携できるようにしたいよね
	- [FigmaでAIを強化する #LLM - Qiita](https://qiita.com/BNR-Long/items/d1df15482fd2888243ce)
- 学術的なやつ
	- [Zotero×Obsidian 学術活動のすゝめ](https://masaki39.github.io/Zotero%C3%97Obsidian-%E5%AD%A6%E8%A1%93%E6%B4%BB%E5%8B%95%E3%81%AE%E3%81%99%E3%82%9D%E3%82%81)
- スマホとかipadでobsidianが見たい
	- [スマホのObsidianをGitで同期(2024.11)](https://zenn.dev/ishikawa096/articles/158246fc5a5d62)
- obsidianのスライドモードで報告するのよさそう
-  [GPT-5、開発に使うための基礎知識 | gihyo.jp](https://gihyo.jp/article/2025/08/programming-with-chatgpt-05)
- [Claude Code を開発チームに迎え入れるためにやっておきたい環境整備 | ドクセル](https://www.docswell.com/s/matsu3m/ZN9NEE-2025-08-22-090728#p14)
- [Claude Codeに「QA専門エージェント」を組ませたらテスト内容が劇的に変わったお話 - kubell Creator's Note](https://creators-note.chatwork.com/entry/subagent_for_qa)
- [The New Skill in AI is Not Prompting, It's Context Engineering](https://www.philschmid.de/context-engineering)
- [LLMとソフトウェア開発に関する考察 - Martin Fowler's Bliki (ja)](https://bliki-ja.github.io/202508-ai-thoughts)
-  [mizchi/ai-coding-guide-202507](https://github.com/mizchi/ai-coding-guide-202507)
- [arxiv.org/pdf/2604.14572](https://arxiv.org/pdf/2604.14572)
- [GitHub - addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- [AGENTS.mdを自動で育てる仕組みを作った - 逆瀬川ちゃんのブログ](https://nyosegawa.com/posts/agents-md-generator/)
- [[2511.12884] Agent READMEs: An Empirical Study of Context Files for Agentic Coding](https://arxiv.org/abs/2511.12884)

# エンジニア英語
- [GitHub - mercari/engineer-vocabulary-list](https://github.com/mercari/engineer-vocabulary-list)
- [IT技術者と英語. 雇用機会と文化 | Medium](https://medium.com/ymotongpoo-thoughts/it%E6%8A%80%E8%A1%93%E8%80%85%E3%81%A8%E8%8B%B1%E8%AA%9E-4da1c26f866)

# 便利ツール
- [エディタを Zed に乗り換えてみた](https://azukiazusa.dev/blog/editor-zed/)
